import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MemcachedService } from 'src/memcached/memcached.service';
import { UserMock } from './mocks/user.mock';

@Module({
  providers: [UsersResolver, UsersService,MemcachedService,UserMock],
  exports: [UsersService],
})
export class UsersModule {}
