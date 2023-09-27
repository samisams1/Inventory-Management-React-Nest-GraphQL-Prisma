import { Product } from '@prisma/client';
import { CreateProductInput } from './Dto/product-create-input';
import { UpdateProductInput } from './Dto/product-update-input';
export declare class ProductService {
    private prisma;
    constructor();
    product(id: number): Promise<Product | null>;
    products(): Promise<({
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    })[]>;
    createProduct(createProductDto: CreateProductInput): Promise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    update(id: number, updateProductDto: UpdateProductInput): Promise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    delete(id: number): Promise<Product | null>;
}
