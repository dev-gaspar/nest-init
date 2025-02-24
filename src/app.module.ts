import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configLoader from './lib/ConfigLoader';
import { LoggerConfiguredModule } from './lib/Logger';
import { PrismaService } from './core/prisma.service';
import { ResponseInterceptor } from './lib/ResponseInterceptor';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configLoader],
      isGlobal: true,
    }),
    LoggerConfiguredModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [PrismaService, ResponseInterceptor],
})
export class AppModule {}
