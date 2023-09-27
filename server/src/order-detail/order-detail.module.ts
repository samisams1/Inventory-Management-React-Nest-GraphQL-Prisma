import { Module } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailResolver } from './order-detail.resolver';

@Module({
  providers: [OrderDetailService, OrderDetailResolver],
  exports:[OrderDetailService]
})
export class OrderDetailModule {}
