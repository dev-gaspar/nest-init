import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let errors: string[] = [];
    const standardMessage = 'Something went wrong.';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const responseMessage = exception.getResponse();

      if (typeof responseMessage === 'object' && responseMessage['message']) {
        if (Array.isArray(responseMessage['message'])) {
          errors = responseMessage['message'];
        } else {
          errors = [responseMessage['message']];
        }
      } else if (typeof responseMessage === 'string') {
        errors = [responseMessage];
      }
    } else if (exception instanceof Error) {
      errors = [exception.message];
    } else {
      errors = ['An unexpected error occurred.'];
    }

    if (errors.length === 0) {
      errors = [standardMessage];
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      success: false,
      message: standardMessage,
      errors,
    });
  }
}
