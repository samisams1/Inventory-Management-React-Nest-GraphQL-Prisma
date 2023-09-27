import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationService {
    private readonly prisma;
    private cronJob;
    private wss;
    constructor(prisma: PrismaService);
    startNotificationCron(): void;
    private sendNotificationsToClients;
    stopNotificationCron(): void;
}
