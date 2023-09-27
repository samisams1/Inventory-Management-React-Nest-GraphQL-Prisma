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
exports.SaleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_sale_input_1 = require("./Dto/create-sale-input");
const update_sale_input_1 = require("./Dto/update-sale-input");
const sale_entity_1 = require("./sale.entity");
const sale_service_1 = require("./sale.service");
let SaleResolver = class SaleResolver {
    constructor(saleService) {
        this.saleService = saleService;
    }
    async sale(id) {
        const purchase = await this.saleService.Sale(id);
        return purchase;
    }
    sales() {
        return this.saleService.Sales();
    }
    async createSale(createPurchaseDto) {
        return this.saleService.create(createPurchaseDto);
    }
    async updatePurchase(id, data) {
        const purchase = await this.saleService.update(id, data);
        return purchase;
    }
    async deletePurchase(id) {
        const purchase = await this.saleService.delete(id);
        return purchase;
    }
};
exports.SaleResolver = SaleResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "sale", null);
__decorate([
    (0, graphql_1.Query)(() => [sale_entity_1.sale]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "sales", null);
__decorate([
    (0, graphql_1.Mutation)(() => sale_entity_1.sale),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sale_input_1.CreateSaleInput]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "createSale", null);
__decorate([
    (0, graphql_1.Mutation)(() => sale_entity_1.sale),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_sale_input_1.UpdateSaleInput]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "updatePurchase", null);
__decorate([
    (0, graphql_1.Mutation)(() => sale_entity_1.sale),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "deletePurchase", null);
exports.SaleResolver = SaleResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [sale_service_1.SaleService])
], SaleResolver);
//# sourceMappingURL=sale.resolver.js.map