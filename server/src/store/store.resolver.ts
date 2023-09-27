import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Store } from '@prisma/client';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import { CreateStoreInput } from './Dto/create-store-input';
import { UpdateQuantityInput, UpdateStoreInput } from './Dto/update-store-input';
import { store } from './store.entity';
import { StoreService } from './store.service';

@Resolver()
export class StoreResolver {
    constructor(private readonly storeService:StoreService){}

    @Query(()=>store)
    async store(@Args('id', { type: () => Int }) id: number) {
    return this.storeService.store(id);
    }
    @Query(()=>[store])
    @UseGuards(GqlAuthGuard,RolesGuard)
    async stores():Promise<Store[]>{
    const stores =  await  this.storeService.stores();
    return stores;
    }  
   /* @Mutation(()=>Store)
    async createstore(@Args('input') createStoreDto:CreateStoreInput):Promise<Store>{
    const store =  await  this.storeService.create(createStoreDto);
    return store;
    } */       
    @Mutation(() => [store])
    async updateStore(
      @Args('input', { type: () => [UpdateStoreInput] }) input: UpdateStoreInput[],
    ): Promise<Store[]> {
      // Assuming you have a `storeService` that handles the store update logic
      return await this.storeService.update(input);
    }
    @Mutation(()=>store)
    async updateStoreQuantity(@Args('id',{type:()=>Int}) id:number,@Args('input') input:UpdateQuantityInput) :Promise<Store>{
    const store =  await  this.storeService.updateQuantity(id,input);
    return store;
    }    
    @Query(()=>Number)
    async countStoreProducts() {
      return this.storeService.storeTotalProduct();
    }
}


