import { Module } from '@nestjs/common';
import { shopeProductResolver } from './shopeProduct.resolver';
import { ShopeProductService } from './shopeProduct.service';

@Module({
  providers: [ShopeProductService, shopeProductResolver]
})
export class ShopeProductModule {}
