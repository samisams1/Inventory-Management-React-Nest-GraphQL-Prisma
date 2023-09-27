import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { CreateSaleDetailInput } from 'src/sale-detail/Dto/sale-detail-create-input';

@InputType()
export class CreateSaleInput {

@Field()
vat:number;

@Field()
net:number;

@Field()
grossAmount:number;

@Field()
sellerId:number;

@Field()
status:string;

@Field(() => [CreateSaleDetailInput])
saleDetail: CreateSaleDetailInput[]; 

}