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
exports.OrderDetailResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_detail_service_1 = require("./order-detail.service");
const orderDetail_entity_1 = require("./orderDetail.entity");
let OrderDetailResolver = class OrderDetailResolver {
    constructor(orderDetailService) {
        this.orderDetailService = orderDetailService;
    }
    async orderDetail(id) {
        return this.orderDetailService.orderDetail(id);
    }
    async orderDetails(orderId) {
        return this.orderDetailService.orderDetails(orderId);
    }
};
exports.OrderDetailResolver = OrderDetailResolver;
__decorate([
    (0, graphql_1.Query)(() => orderDetail_entity_1.OrderDetail),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderDetailResolver.prototype, "orderDetail", null);
__decorate([
    (0, graphql_1.Query)(() => [orderDetail_entity_1.OrderDetail]),
    __param(0, (0, graphql_1.Args)('orderId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderDetailResolver.prototype, "orderDetails", null);
exports.OrderDetailResolver = OrderDetailResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [order_detail_service_1.OrderDetailService])
], OrderDetailResolver);
//# sourceMappingURL=order-detail.resolver.js.map