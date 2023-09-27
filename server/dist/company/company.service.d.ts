import { Company, Prisma } from '@prisma/client';
export declare class CompanyService {
    private prisma;
    constructor();
    company(id: number): Promise<Company | null>;
    companies(): Promise<Company[]>;
    create(input: Prisma.CompanyCreateInput): Promise<Company | null>;
    update(id: number, data: Prisma.SaleUpdateInput): Promise<Company | null>;
    delete(id: number): Promise<Company | null>;
}
