import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserInfoRequestDto } from '../dto/userInfo-request.dto';

@Injectable()
export class UserDBService {
    constructor(private readonly prisma: PrismaService){};
    
    /**
     * store a new user's data in the users table
     * @param userInfo 
     */
    async createUser(userInfo: UserInfoRequestDto): Promise<UserInfoRequestDto> {
        try {
            return await this.prisma.user.create({
                data: {
                    username: userInfo.username,
                    email: userInfo.email,
                    password: userInfo.password,
                },
            });
        } catch (error) {
            if (error.code === 'P2002') { 
                throw new Error('Email already exists');
            }
            throw error;
        }
    }
    //TODO:CHANGE userId type to uuid //
    
    /**
     * update a user's info with user's email
     * @param id 
     * @param userInfo 
     */
      async updateUserInfo(id: string, userInfo:UserInfoRequestDto): Promise<Partial<UserInfoRequestDto>>{
        return await this.prisma.user.update({
            where: {
                id: userInfo.id,
            },
            // users can't update their email
            data: {
                username: userInfo.username,
                password: userInfo.password
            }
        })
      }
}
