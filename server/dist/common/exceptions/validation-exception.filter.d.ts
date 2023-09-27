import { ExceptionFilter, ArgumentsHost, BadRequestException } from '@nestjs/common';
export declare class ValidationExceptionFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost): void;
}
