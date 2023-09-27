export type ModelName = 'user' | 'Product' | '...';
export type PrismaModel = {
    [K in ModelName]: any;
};
