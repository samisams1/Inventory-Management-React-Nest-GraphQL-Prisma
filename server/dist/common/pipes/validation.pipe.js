"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ValidationPipe extends common_1.ValidationPipe {
    async transform(value, metadata) {
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metadata)) {
            return value;
        }
        const object = (0, class_transformer_1.plainToClass)(metatype, value);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            const formattedErrors = this.formatErrors(errors);
            throw new common_1.BadRequestException(formattedErrors);
        }
        return value;
    }
    formatErrors(errors) {
        return errors.map((error) => {
            const constraints = Object.values(error.constraints);
            return constraints.join(', ');
        });
    }
}
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map