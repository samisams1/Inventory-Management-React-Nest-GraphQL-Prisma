import { Product } from "src/product/product.entity";
export declare class OrderDetail {
    id: number;
    orderId: number;
    quantity: number;
    productId: number;
    product: Product;
}
