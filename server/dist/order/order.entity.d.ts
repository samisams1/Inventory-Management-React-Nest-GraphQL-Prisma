import { OrderDetail } from 'src/order-detail/orderDetail.entity';
export declare class order {
    id: number;
    sellerId: number;
    totalQuantity: number;
    status: string;
    orderDetails: OrderDetail[];
    createdAt: Date;
}
