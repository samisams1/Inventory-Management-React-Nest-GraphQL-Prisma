import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class PasswordStrengthConstraint implements ValidatorConstraintInterface {
    validate(password: string): boolean;
}
export declare function PasswordStrength(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
