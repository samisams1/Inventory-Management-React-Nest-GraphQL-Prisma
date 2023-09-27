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
exports.StoreResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const update_store_input_1 = require("./Dto/update-store-input");
const store_entity_1 = require("./store.entity");
const store_service_1 = require("./store.service");
let StoreResolver = class StoreResolver {
    constructor(storeService) {
        this.storeService = storeService;
    }
    async store(id) {
        return this.storeService.store(id);
    }
    async stores() {
        const stores = await this.storeService.stores();
        return stores;
    }
    async updateStore(input) {
        return this.storeService.update(input);
    }
};
exports.StoreResolver = StoreResolver;
__decorate([
    (0, graphql_1.Query)(() => store_entity_1.store),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "store", null);
__decorate([
    (0, graphql_1.Query)(() => [store_entity_1.store]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "stores", null);
__decorate([
    (0, graphql_1.Mutation)(() => [store_entity_1.store]),
    __param(0, (0, graphql_1.Args)('input', { type: () => [update_store_input_1.UpdateStoreInput] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "updateStore", null);
exports.StoreResolver = StoreResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreResolver);
//# sourceMappingURL=store.resolver.js.map