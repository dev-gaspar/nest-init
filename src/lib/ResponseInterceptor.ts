import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reflector } from '@nestjs/core';

interface ResponseFormat<T> {
  statusCode: number;
  timestamp: string;
  success: boolean;
  message: string;
  data: T;
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept<T>(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ResponseFormat<T>> {
    const response = context.switchToHttp().getResponse();
    const statusCode = response.statusCode;

    const message =
      this.reflector.get<string>('responseMessage', context.getHandler()) ||
      'OK';

    return next.handle().pipe(
      map((data: T) => ({
        statusCode,
        timestamp: new Date().toISOString(),
        success: true,
        message,
        data,
      })),
    );
  }
}
