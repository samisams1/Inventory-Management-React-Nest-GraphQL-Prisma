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
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_create_input_1 = require("./Dto/product-create-input");
const product_update_input_1 = require("./Dto/product-update-input");
const product_entity_1 = require("./product.entity");
const product_service_1 = require("./product.service");
let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    async product(id) {
        return this.productService.product(id);
    }
    async products() {
        return this.productService.products();
    }
    async createProduct(createProductDto) {
        return this.productService.createProduct(createProductDto);
    }
    async updateProduct(id, updateProductInput) {
        return this.productService.update(id, updateProductInput);
    }
    async deleteProduct(id) {
        return this.productService.delete(id);
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "product", null);
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "products", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_create_input_1.CreateProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_update_input_1.UpdateProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map