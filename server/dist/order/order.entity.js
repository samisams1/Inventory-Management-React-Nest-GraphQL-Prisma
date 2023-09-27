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
exports.order = void 0;
const graphql_1 = require("@nestjs/graphql");
const orderDetail_entity_1 = require("../order-detail/orderDetail.entity");
let order = class order {
};
exports.order = order;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], order.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], order.prototype, "sellerId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], order.prototype, "totalQuantity", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], order.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => [orderDetail_entity_1.OrderDetail]),
    __metadata("design:type", Array)
], order.prototype, "orderDetails", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], order.prototype, "createdAt", void 0);
exports.order = order = __decorate([
    (0, graphql_1.ObjectType)()
], order);
//# sourceMappingURL=order.entity.js.map