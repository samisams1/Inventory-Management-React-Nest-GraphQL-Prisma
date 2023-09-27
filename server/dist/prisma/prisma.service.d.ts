export declare class PrismaService {
    constructor();
    private prisma;
    get user(): import(".prisma/client").Prisma.UserDelegate<import("@prisma/client/runtime/library").DefaultArgs>;
    get product(): import(".prisma/client").Prisma.ProductDelegate<import("@prisma/client/runtime/library").DefaultArgs>;
    onModuleDestroy(): Promise<void>;
}
