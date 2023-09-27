import { CreateProductInput } from './Dto/product-create-input';
import { UpdateProductInput } from './Dto/product-update-input';
import { ProductService } from './product.service';
export declare class ProductResolver {
    private productService;
    constructor(productService: ProductService);
    product(id: number): Promise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    } | null>;
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
    updateProduct(id: number, updateProductInput: UpdateProductInput): Promise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    deleteProduct(id: number): Promise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    } | null>;
}
