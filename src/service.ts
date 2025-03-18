import { Logger } from '@nestjs/common';
import { PrismaService } from './core/prisma.service';

export class Service {
  public readonly logger: Logger;
  public readonly prisma: PrismaService;

  constructor(name: string) {
    this.logger = new Logger(name);
    this.prisma = new PrismaService();
  }
}
