// prisma.types.ts

export type ModelName = 'user' | 'Product' | '...'; // Add more model names as needed

export type PrismaModel = {
  [K in ModelName]: any;
};