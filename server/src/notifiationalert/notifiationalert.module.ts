import { Module } from '@nestjs/common';
import { NotifiationalertService } from './notifiationalert.service';
import { NotifiationalertResolver } from './notifiationalert.resolver';

@Module({
  providers: [NotifiationalertService, NotifiationalertResolver]
})
export class NotifiationalertModule {}
