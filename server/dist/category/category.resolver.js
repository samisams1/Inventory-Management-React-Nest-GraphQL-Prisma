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
exports.CategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const category_entity_1 = require("./category.entity");
const category_service_1 = require("./category.service");
const create_category_input_1 = require("./Dto/create-category.input");
const update_category_input_1 = require("./Dto/update-category.input");
let CategoryResolver = class CategoryResolver {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async category(id) {
        const categories = await this.categoryService.category(id);
        return categories;
    }
    async categories() {
        const category = await this.categoryService.categories();
        return category;
    }
    async createCategory(data) {
        const createCategory = await this.categoryService.cretae(data);
        return createCategory;
    }
    async updateCategory(id, data) {
        const updateCategory = await this.categoryService.update(id, data);
        return updateCategory;
    }
    async deleteCategory(id) {
        const deleteCategory = await this.categoryService.delete(id);
        return deleteCategory;
    }
};
exports.CategoryResolver = CategoryResolver;
__decorate([
    (0, graphql_1.Query)(() => category_entity_1.Category),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "category", null);
__decorate([
    (0, graphql_1.Query)(() => [category_entity_1.Category]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "categories", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_entity_1.Category),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_input_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_entity_1.Category),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_category_input_1.UpdateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_entity_1.Category),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
exports.CategoryResolver = CategoryResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryResolver);
//# sourceMappingURL=category.resolver.js.map