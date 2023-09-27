import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  private prisma: PrismaClient;

  get user() {
    return this.prisma.user;
  }

  get product(){
    return this.prisma.product
  }

  // Other Prisma models

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}