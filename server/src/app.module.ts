import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { StoreModule } from './store/store.module';
import { CategoryResolver } from './category/category.resolver';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { NotificationModule } from './notification/notification.module';
import { PubSub } from 'graphql-subscriptions';
import { ShopeProductModule } from './shopeProduct/shopeProduct.module';
import { SaleModule } from './sale/sale.module';
import { SaleDetailModule } from './sale-detail/sale-detail.module';
import { ReportModule } from './report/report.module';
import { NotifiationalertModule } from './notifiationalert/notifiationalert.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      sortSchema: true,
      context: ({ req }: { req: Express.Request }) => ({ req }),
    }),
    UsersModule,
    AuthModule,
    ShopeProductModule,
    CompanyModule,
    CategoryModule,
    StoreModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    OrderDetailModule,
    NotificationModule,
    SaleModule,
    SaleDetailModule,
    ReportModule,
    NotifiationalertModule,
  ],
  controllers: [],
  providers: [PrismaService, CategoryResolver,PubSub,NotifiationalertModule],
})
export class AppModule {}
