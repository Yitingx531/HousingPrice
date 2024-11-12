import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserDBService } from 'src/users/DBService/userDB.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserDBService, PrismaService],
  exports: [UserDBService, AuthService],
})
export class AuthModule {}
