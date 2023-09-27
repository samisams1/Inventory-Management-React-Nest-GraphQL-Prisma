"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const users_module_1 = require("./users/users.module");
const prisma_service_1 = require("./prisma/prisma.service");
const auth_module_1 = require("./auth/auth.module");
const notification_service_1 = require("./notification/notification.service");
const company_module_1 = require("./company/company.module");
const store_module_1 = require("./store/store.module");
const category_resolver_1 = require("./category/category.resolver");
const category_module_1 = require("./category/category.module");
const product_module_1 = require("./product/product.module");
const sale_module_1 = require("./sale/sale.module");
const order_module_1 = require("./order/order.module");
const order_detail_module_1 = require("./order-detail/order-detail.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            sale_module_1.SaleModule,
            company_module_1.CompanyModule,
            category_module_1.CategoryModule,
            store_module_1.StoreModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            order_module_1.OrderModule,
            order_detail_module_1.OrderDetailModule,
        ],
        controllers: [],
        providers: [prisma_service_1.PrismaService, notification_service_1.NotificationService, category_resolver_1.CategoryResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map