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
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let SaleService = class SaleService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async Sale(id) {
        return this.prisma.sale.findUnique({ where: { id } });
    }
    async Sales() {
        return this.prisma.sale.findMany({
            include: {
                user: true
            }
        });
    }
    async create(createSaleInput) {
        const { quantity, storeId, productId, userId } = createSaleInput;
        return this.prisma.sale.create({
            data: {
                quantity,
                userId,
                productId
            }
        });
    }
    async update(id, data) {
        return this.prisma.sale.update({ where: { id }, data });
    }
    async delete(id) {
        return this.prisma.sale.delete({ where: { id } });
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SaleService);
//# sourceMappingURL=sale.service.js.map