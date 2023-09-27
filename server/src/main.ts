import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { NotifiationalertService } from './notifiationalert/notifiationalert.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  const notificationAlertService = app.get(NotifiationalertService);
  notificationAlertService.startNotificationCronStore();
  await app.listen(5000, () => {
    console.log('Nest application is running on port 5000');
  });
}

bootstrap();