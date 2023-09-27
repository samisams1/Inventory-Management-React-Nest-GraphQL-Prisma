import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './guards/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [PrismaService, AuthService, AuthResolver, JwtStrategy],
})
export class AuthModule {}