"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordStrength = exports.PasswordStrengthConstraint = void 0;
const class_validator_1 = require("class-validator");
let PasswordStrengthConstraint = class PasswordStrengthConstraint {
    validate(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    }
};
exports.PasswordStrengthConstraint = PasswordStrengthConstraint;
exports.PasswordStrengthConstraint = PasswordStrengthConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'passwordStrength', async: false })
], PasswordStrengthConstraint);
function PasswordStrength(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: PasswordStrengthConstraint,
        });
    };
}
exports.PasswordStrength = PasswordStrength;
//# sourceMappingURL=password-strength.validator.js.map