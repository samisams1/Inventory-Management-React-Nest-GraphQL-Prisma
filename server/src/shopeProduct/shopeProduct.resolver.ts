import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShopeProduct } from '@prisma/client';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import { CreateShopeProductInput } from './Dto/create-shope-product-input';
import { UpdateShopeProductInput } from './Dto/update-shope-product-input';
import { shopeProduct } from './shopeProduct.entity';
import { ShopeProductService } from './shopeProduct.service';

@Resolver()
export class shopeProductResolver {
    constructor(private readonly saleService:ShopeProductService){}
    @Query(()=>String)
    async shopeProduct(@Args('id',{type:()=>Int}) id:number){
        const purchase = await this.saleService.Sale(id);
        return purchase;
     }
    @Query(() => [shopeProduct])
    @UseGuards(GqlAuthGuard,RolesGuard)
    shopeProducts(): Promise<ShopeProduct[]> {
    return this.saleService.Sales();
     }
    @Mutation(()=>shopeProduct)
    async createShopeProduct(@Args('input') createPurchaseDto: CreateShopeProductInput) {
      return this.saleService.create(createPurchaseDto);
    }
    @Mutation(()=>shopeProduct)
    async updateShopeProduct(id:number,data:UpdateShopeProductInput){
        const purchase = await this.saleService.update(id,data);
        return purchase;
    }
    @Mutation(()=>shopeProduct)
    async deleteShopeProduct(id:number){
        const purchase = await this.saleService.delete(id);
        return purchase;
    }
}
