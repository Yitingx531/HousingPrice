import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserDBService } from 'src/users/DBService/userDB.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwtContants';

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: {expiresIn: '1h'},
  })],
  controllers: [AuthController],
  providers: [AuthService, UserDBService, PrismaService],
  exports: [UserDBService, AuthService],
})
export class AuthModule {}
