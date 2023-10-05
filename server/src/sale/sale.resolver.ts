import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Order, Sale, SaleDetail, Store } from '@prisma/client';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import { saleDetail } from 'src/sale-detail/sale-detail.entity';
import { UpdateStoreInput } from 'src/store/Dto/update-store-input';
import { store } from 'src/store/store.entity';
import { CreateSaleInput } from './Dto/sale-create-input';
import { sale } from './sale.entity';
import { SaleService } from './sale.service';

@Resolver()
export class SaleResolver {
  constructor(private saleService: SaleService) {}
  
  @Mutation(()=>sale)
  @UseGuards(GqlAuthGuard,RolesGuard)
  async createSale(@Args('input') CreateSaleInput: CreateSaleInput) {
    return this.saleService.create(CreateSaleInput);
  } 

  //@UseGuards(GqlAuthGuard,RolesGuard)
  @Query(()=>[sale])
  async sales():Promise<Sale[]> {
    return this.saleService.sales();
  }
  @Query(()=>sale)
  async sale(@Args('id') id:number):Promise<Sale | null>{
  return this.saleService.sale(id);
  }
  @Query(()=>[saleDetail])
  async saleDetails() {
    return this.saleService.saleDetail();
  }
  @Query(()=>[saleDetail])
  async saleDetailById(@Args('id') id:number,):Promise<SaleDetail[]> {
    return this.saleService.saleDetailBySellId(id);
  }
  @Query(()=>Number)
  async totalSale() {
    return this.saleService.sumTheGross();
  }
  @Query(()=>Number)
  async saleTotalProduct() {
    return this.saleService.saleTotalProduct();
  }
  @Mutation(() => [store])
  async acceptStoreProduct(
    @Args('input', { type: () => [UpdateStoreInput] }) input: UpdateStoreInput[],
  ): Promise<Store[]> {
    // Assuming you have a `storeService` that handles the store update logic
    return await this.saleService.acceptProductFromSale(input);
  }
}

