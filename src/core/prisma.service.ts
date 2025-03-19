import { PrismaClient, GlobalStatus, Prisma } from '@prisma/client';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';

// Tables configuration for logging
const logTables = {
  LogsUser: { id: 'id' },
};

// Check if log table exists
async function logTableExists(tableName: string) {
  if (!logTables[tableName]) {
    return false;
  }
  return true;
}

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['error', 'warn'],
      errorFormat: 'pretty',
    });

    // Middleware for soft-delete and global status filtering
    this.$use(async (params, next) => {
      if (!params.args) {
        return next(params);
      }

      if (params.model) {
        if (params.action === 'delete') {
          params.action = 'update';
          params.args.data = { globalStatus: GlobalStatus.DELETED };
        }
        if (params.action === 'deleteMany') {
          params.action = 'updateMany';
          params.args.data = {
            ...(params.args.data || {}),
            globalStatus: GlobalStatus.DELETED,
          };
        }
      }

      if (params.action === 'findUnique') {
        params.action = 'findFirst';
      }

      if (['findUnique', 'findFirst', 'findMany'].includes(params.action)) {
        if (!params.args.where) {
          params.args.where = {};
        }

        if (params.args.where.globalStatus === undefined) {
          params.args.where = {
            AND: [
              params.args.where,
              {
                globalStatus: {
                  notIn: [GlobalStatus.DELETED, GlobalStatus.ARCHIVED],
                },
              },
            ],
          };
        }
      }

      return next(params);
    });

    // Middleware for logging operations
    this.$use(async (params, next) => {
      // Only process create, update, delete operations
      if (
        !['create', 'update', 'delete'].includes(params.action) ||
        !params.model
      ) {
        return next(params);
      }

      let previousData = null;
      const model = params.model;
      const logTableName = `Logs${model}`;

      try {
        // Check if log table exists
        const exists = await logTableExists(logTableName);
        if (!exists) {
          return next(params);
        }

        // Get previous data before performing the operation
        if (['update', 'delete'].includes(params.action)) {
          if (params.args.where && logTables[logTableName]) {
            const idField = logTables[logTableName].id;
            const entityId = params.args.where[idField];

            if (entityId) {
              previousData = await this[model].findUnique({
                where: { [idField]: entityId },
              });

              if (previousData) {
                previousData = {
                  ...previousData,
                  [idField]: entityId,
                };
              }
            }
          }
        }
      } catch (error) {
        console.error('Error retrieving previous data:', error);
      }

      // Extract executedBy and remove it from args.data
      const executedBy = params.args?.executedBy || null;
      if (params.args?.executedBy) {
        delete params.args.executedBy;
      }

      // Execute the original operation
      const result = await next(params);

      try {
        // Verify that the table exists
        const idField = logTables[logTableName]?.id;
        if (!idField) {
          return result;
        }

        const entityId = params.args?.where?.[idField] || result?.[idField];
        if (!entityId) {
          return result;
        }

        const logData = {
          entityId: entityId,
          action: params.action.toUpperCase(),
          executedBy: executedBy,
          previousData: previousData,
          newData: null,
        };

        // Get new data for create/update operations
        if (['create', 'update'].includes(params.action)) {
          logData.newData = params.args.data;
        }

        // Create dynamic query to insert the log
        const insertQuery = Prisma.sql`
          INSERT INTO "${Prisma.raw(logTableName)}" (
            "entityId", 
            action, 
            "previousData", 
            "newData", 
            "executedBy", 
            date
          ) VALUES (
            ${logData.entityId},
            ${logData.action},
            ${JSON.stringify(logData.previousData)}::jsonb,
            ${JSON.stringify(logData.newData)}::jsonb,
            ${JSON.stringify(logData.executedBy)}::jsonb,
            ${new Date()}
          )
        `;

        await this.$queryRaw(insertQuery);
      } catch (error) {
        console.error('Error creating log entry:', error);
      }

      return result;
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
