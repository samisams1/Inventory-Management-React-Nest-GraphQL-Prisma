import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';

@Module({
  providers: [OrderService, OrderResolver]
})
export class OrderModule {}
