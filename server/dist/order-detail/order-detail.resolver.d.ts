import { OrderDetailService } from './order-detail.service';
export declare class OrderDetailResolver {
    private orderDetailService;
    constructor(orderDetailService: OrderDetailService);
    orderDetail(id: number): Promise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    } | null>;
    orderDetails(orderId: number): Promise<({
        order: {
            id: number;
            sellerId: number;
            totalQuantity: number;
            status: string;
            createdAt: Date;
        };
    } & {
        id: number;
        orderId: number;
        quantity: number;
        productId: number;
        createdAt: Date;
    })[]>;
}
