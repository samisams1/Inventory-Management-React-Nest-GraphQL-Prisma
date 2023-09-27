"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../users/entities/user.entity");
let Company = class Company {
};
exports.Company = Company;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_entity_1.User], { nullable: true }),
    __metadata("design:type", Array)
], Company.prototype, "eemployees", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
exports.Company = Company = __decorate([
    (0, graphql_1.ObjectType)()
], Company);
//# sourceMappingURL=company.entity.js.map