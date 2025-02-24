import { LoggerModule } from 'nestjs-pino';
import { IncomingMessage, ServerResponse } from 'http';

type LoggerConfig = {
  pinoHttp: {
    level?: string;
    transport?: {
      target: string;
      options?: {
        colorize?: boolean;
        translateTime?: string;
        singleLine?: boolean;
        ignore?: string;
      };
    };
    serializers?: {
      req?: (req: IncomingMessage & { method?: string; url?: string }) => {
        method?: string;
        url?: string;
      };
      res?: (res: ServerResponse & { statusCode?: number }) => {
        statusCode?: number;
      };
    };
  };
};

const loggerConfig: LoggerConfig = {
  pinoHttp: {
    level: process.env.LOG_LEVEL || 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        singleLine: true,
        ignore: 'pid,hostname',
      },
    },
    serializers: {
      req: (req: IncomingMessage & { method?: string; url?: string }) => ({
        method: req.method || 'unknown',
        url: req.url || 'unknown',
      }),
      res: (res: ServerResponse & { statusCode?: number }) => ({
        statusCode: res.statusCode || 0,
      }),
    },
  },
};

const loggerConfigAsync = {
  useFactory: async (): Promise<LoggerConfig> => {
    return loggerConfig;
  },
};

export const LoggerConfiguredModule =
  LoggerModule.forRootAsync(loggerConfigAsync);
