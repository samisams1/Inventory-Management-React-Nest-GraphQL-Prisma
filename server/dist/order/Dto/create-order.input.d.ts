import { CreateOrderDetailInput } from 'src/order-detail/Dto/create-order-detail.input';
export declare class CreateOrderInput {
    sellerId: number;
    totalQuantity: number;
    status: string;
    orderDetails: CreateOrderDetailInput[];
}
