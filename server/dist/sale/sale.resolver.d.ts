import { Sale } from '@prisma/client';
import { CreateSaleInput } from './Dto/create-sale-input';
import { UpdateSaleInput } from './Dto/update-sale-input';
import { SaleService } from './sale.service';
export declare class SaleResolver {
    private readonly saleService;
    constructor(saleService: SaleService);
    sale(id: number): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    sales(): Promise<Sale[]>;
    createSale(createPurchaseDto: CreateSaleInput): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatePurchase(id: number, data: UpdateSaleInput): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    deletePurchase(id: number): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
