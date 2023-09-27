import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateStoreInput {
  @Field(() => Int)
  orderId: number;

  @Field(() => [ProductInput])
  products: ProductInput[];
}

@InputType()
export class UpdateQuantityInput {
  @Field(() => Int)
  quantity: number;

}

@InputType()
class ProductInput {
  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  quantity: number;
}

