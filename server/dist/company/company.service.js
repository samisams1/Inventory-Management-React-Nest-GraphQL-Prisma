"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let CompanyService = class CompanyService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async company(id) {
        return this.prisma.company.findUnique({ where: { id } });
    }
    async companies() {
        return this.prisma.company.findMany();
    }
    async create(input) {
        return this.prisma.company.create({
            data: {
                name: input.name,
                address: input.address,
            }
        });
    }
    async update(id, data) {
        return this.prisma.company.update({ where: { id }, data });
    }
    async delete(id) {
        return this.prisma.company.delete({ where: { id } });
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CompanyService);
//# sourceMappingURL=company.service.js.map