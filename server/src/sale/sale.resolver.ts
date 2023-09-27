import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Order, Sale, SaleDetail } from '@prisma/client';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import { saleDetail } from 'src/sale-detail/sale-detail.entity';
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
  async saleDetails():Promise<SaleDetail[]> {
    return this.saleService.saleDetail();
  }
  @Query(()=>[saleDetail])
  async saleDetailById():Promise<SaleDetail[]> {
    return this.saleService.saleDetailBySellId();
  }
  @Query(()=>Number)
  async totalSale() {
    return this.saleService.totalSales();
  }
  @Query(()=>Number)
  async saleTotalProduct() {
    return this.saleService.saleTotalProduct();
  }
}

