import { Prisma, Sale } from '@prisma/client';
import { CreateSaleInput } from './Dto/create-sale-input';
export declare class SaleService {
    private prisma;
    constructor();
    Sale(id: number): Promise<Sale | null>;
    Sales(): Promise<Sale[]>;
    create(createSaleInput: CreateSaleInput): Promise<Sale>;
    update(id: number, data: Prisma.SaleUpdateInput): Promise<Sale | null>;
    delete(id: number): Promise<Sale | null>;
}
