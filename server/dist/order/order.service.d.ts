import { Order } from '@prisma/client';
import { CreateOrderInput } from './Dto/create-order.input';
export declare class OrderService {
    private prisma;
    constructor();
    order(id: number): Promise<Order | null>;
    getOrderDetails(): Promise<Order[]>;
    createOrder(createSaleInput: CreateOrderInput): Promise<Order>;
    update(createSaleInput: CreateOrderInput): Promise<Order>;
}
