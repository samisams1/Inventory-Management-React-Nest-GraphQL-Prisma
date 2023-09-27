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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const cron_1 = require("cron");
const prisma_service_1 = require("../prisma/prisma.service");
const WebSocket = require("ws");
let NotificationService = class NotificationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    startNotificationCron() {
        this.cronJob = new cron_1.CronJob('0 6 15 * * *', async () => {
            try {
                const expiredDrugs = await this.prisma.product.findMany({});
                this.sendNotificationsToClients(expiredDrugs);
                console.log('Expired drugs:', expiredDrugs);
            }
            catch (error) {
                console.error('An error occurred during notification:', error);
            }
        });
        this.cronJob.start();
    }
    sendNotificationsToClients(expiredDrugs) {
        if (this.wss) {
            this.wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(expiredDrugs));
                }
            });
        }
    }
    stopNotificationCron() {
        if (this.cronJob) {
            this.cronJob.stop();
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map