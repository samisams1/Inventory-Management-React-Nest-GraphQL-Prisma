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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const memcached_service_1 = require("../memcached/memcached.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(memcachedService) {
        this.prisma = new client_1.PrismaClient();
        this.memcachedService = memcachedService;
    }
    async users() {
        const users = await this.prisma.user.findMany();
        return users;
    }
    async user(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return user;
    }
    async create(input) {
        try {
            const { username, email, password, firstName, lastName } = input;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await this.prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    username,
                    email,
                    password: hashedPassword,
                    companyId: 1
                },
            });
            return user;
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateStoreDto) {
        const { firstName, lastName } = updateStoreDto;
        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                firstName,
                lastName,
            },
        });
    }
    async delete(id) {
        return this.prisma.user.delete({ where: { id } });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [memcached_service_1.MemcachedService])
], UsersService);
//# sourceMappingURL=users.service.js.map