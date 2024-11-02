import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDBService } from './DBService/userDB.service';
import { PrismaService } from 'src/prisma.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserDBService, PrismaService],
  exports: [UserDBService, UsersService],
})
export class UsersModule {}
