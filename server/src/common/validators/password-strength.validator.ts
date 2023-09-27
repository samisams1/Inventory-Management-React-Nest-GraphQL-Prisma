import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'passwordStrength', async: false })
export class PasswordStrengthConstraint implements ValidatorConstraintInterface {
  validate(password: string): boolean {
    // Implement your password strength validation logic here
    // Return true if the password meets the required strength criteria, otherwise return false
    // Example: Check if the password has at least 8 characters and contains at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  }
}

export function PasswordStrength(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: PasswordStrengthConstraint,
    });
  };
}