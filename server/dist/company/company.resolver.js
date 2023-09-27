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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const company_entity_1 = require("./company.entity");
const company_service_1 = require("./company.service");
const create_company_input_1 = require("./Dto/create-company.input");
let CompanyResolver = class CompanyResolver {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async company(id) {
        const company = await this.companyService.company(id);
        return company;
    }
    async companies() {
        const company = await this.companyService.companies();
        return company;
    }
    async createCompany(input) {
        const company = await this.companyService.create(input);
        return company;
    }
    async updateCompany() {
        const company = await this.companyService.companies();
        return company;
    }
    async deleteCompany() {
        const company = await this.companyService.companies();
        return company;
    }
};
exports.CompanyResolver = CompanyResolver;
__decorate([
    (0, graphql_1.Query)(() => company_entity_1.Company),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "company", null);
__decorate([
    (0, graphql_1.Query)(() => [company_entity_1.Company]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "companies", null);
__decorate([
    (0, graphql_1.Mutation)(() => company_entity_1.Company),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_input_1.CreateCompanyInput]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "createCompany", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "updateCompany", null);
__decorate([
    (0, graphql_1.Mutation)(() => company_entity_1.Company),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "deleteCompany", null);
exports.CompanyResolver = CompanyResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyResolver);
//# sourceMappingURL=company.resolver.js.map