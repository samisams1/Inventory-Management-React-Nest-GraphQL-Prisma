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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let OrderService = class OrderService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async order(id) {
        const order = await this.prisma.order.findUnique({
            where: { id: id },
            include: {
                orderDetails: {
                    include: {
                        product: true,
                    }
                }
            }
        });
        return order;
    }
    async getOrderDetails() {
        const orders = await this.prisma.order.findMany({
            include: {
                orderDetails: {
                    include: {
                        product: true
                    }
                }
            }
        });
        return orders;
    }
    async createOrder(createSaleInput) {
        const { totalQuantity, sellerId, orderDetails, status } = createSaleInput;
        return this.prisma.order.create({
            data: {
                totalQuantity,
                status,
                sellerId,
                orderDetails: {
                    create: orderDetails.map((orderDetail) => ({
                        quantity: orderDetail.quantity,
                        productId: orderDetail.productId,
                    })),
                },
            },
            include: {
                orderDetails: {
                    include: {
                        product: true
                    }
                },
            },
        });
    }
    async update(createSaleInput) {
        const { totalQuantity, sellerId, orderDetails, status } = createSaleInput;
        return this.prisma.order.create({
            data: {
                totalQuantity,
                status,
                sellerId,
                orderDetails: {
                    create: orderDetails.map((orderDetail) => ({
                        quantity: orderDetail.quantity,
                        productId: orderDetail.productId,
                    })),
                },
            },
            include: {
                orderDetails: {
                    include: {
                        product: true
                    }
                },
            },
        });
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OrderService);
//# sourceMappingURL=order.service.js.map