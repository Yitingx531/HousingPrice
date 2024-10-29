import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserInfoRequestDto } from '../dto/userInfo-request.dto';

@Injectable()
export class UserDBService {
    constructor(private readonly prisma: PrismaService){};
    
    async storeUserData(userInfo: UserInfoRequestDto): Promise<void> {
        const result = await this.prisma.user.upsert({
          where: {
            email: userInfo.email, 
          },
          update: {
            username: userInfo.username,
            email: userInfo.email,
            password: userInfo.password,
          },
          create: {
            username: userInfo.username,
            email: userInfo.email,
            password: userInfo.password,
          },
        });
      }
}
