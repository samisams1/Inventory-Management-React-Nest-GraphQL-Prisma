import { Module } from '@nestjs/common';
import { SaleResolver } from './sale.resolver';
import { SaleService } from './sale.service';

@Module({
  providers: [SaleService, SaleResolver]
})
export class SaleModule {}
