import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const errorMessage = exception.getResponse();

    response.status(400).json({
      statusCode: 400,
      message: 'Validation failed',
      error: errorMessage,
    });
  }
}