import { Product } from '@prisma/client';
export declare class OrderDetailService {
    private prisma;
    constructor();
    orderDetail(id: number): Promise<Product | null>;
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
