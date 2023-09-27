import { ValidationPipe as BaseValidationPipe, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class ValidationPipe extends BaseValidationPipe {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const { metatype } = metadata;

    if (!metatype || !this.toValidate(metadata)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const formattedErrors = this.formatErrors(errors);
      throw new BadRequestException(formattedErrors);
    }

    return value;
  }

  private formatErrors(errors: any[]) {
    return errors.map((error) => {
      const constraints = Object.values(error.constraints);
      return constraints.join(', ');
    });
  }
}