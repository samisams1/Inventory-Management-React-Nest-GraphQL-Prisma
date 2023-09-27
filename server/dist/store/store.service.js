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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let StoreService = class StoreService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async store(id) {
        return this.prisma.store.findUnique({ where: { id } });
    }
    async stores() {
        return this.prisma.store.findMany({
            include: {
                product: true
            }
        });
    }
    async update(input) {
        const updatedStores = [];
        for (const storeUpdateInput of input) {
            const { productId, quantity } = storeUpdateInput;
            const updatedStore = await this.prisma.store.updateMany({
                where: { productId: productId },
                data: { quantity: { decrement: quantity } },
            });
            const affectedStores = await this.prisma.store.findMany({
                where: { productId: productId },
                include: {
                    product: true,
                },
            });
            const affectedSales = await this.prisma.sale.findMany({
                where: { productId: productId },
                include: {
                    product: true,
                },
            });
            updatedStores.push(...affectedStores);
            for (const sale of affectedSales) {
                const updatedSale = await this.prisma.sale.update({
                    where: { id: sale.id },
                    data: { quantity: { increment: quantity } },
                });
                updatedStores.push(updatedSale);
            }
        }
        return updatedStores;
    }
};
exports.StoreService = StoreService;
__decorate([
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoreService.prototype, "store", null);
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StoreService);
//# sourceMappingURL=store.service.js.map