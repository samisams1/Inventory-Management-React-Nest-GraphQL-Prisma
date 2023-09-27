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
exports.OrderDetailService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let OrderDetailService = class OrderDetailService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async orderDetail(id) {
        return this.prisma.product.findUnique({
            where: { id },
            include: {
                category: true
            }
        });
    }
    async orderDetails(orderId) {
        return this.prisma.orderDetail.findMany({
            where: { orderId: orderId },
            include: {
                order: true,
            }
        });
    }
};
exports.OrderDetailService = OrderDetailService;
__decorate([
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderDetailService.prototype, "orderDetail", null);
exports.OrderDetailService = OrderDetailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OrderDetailService);
//# sourceMappingURL=order-detail.service.js.map