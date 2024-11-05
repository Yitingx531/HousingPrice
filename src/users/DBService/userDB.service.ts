import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserInfoRequestDto } from '../dto/userInfo-request.dto';
import { ConflictException, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserDBService {
    constructor(private readonly prisma: PrismaService) {}
    
    /**
     * Store a new user's data in the users table
     * @param userInfo User information to create
     * @throws ConflictException if email already exists
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
                throw new ConflictException('An account with this email already exists');
            }
            throw error;
        }
    }
    
    /**
     * Update a user's info with user's email
     * @param id User ID to update
     * @param userInfo Updated user information
     * @throws NotFoundException if user doesn't exist
     */
    async updateUserInfo(id: string, userInfo: UserInfoRequestDto): Promise<Partial<UserInfoRequestDto>> {
        try {
            return await this.prisma.user.update({
                where: {
                    id: id, // Use the id parameter instead of userInfo.id
                },
                data: {
                    username: userInfo.username,
                    password: userInfo.password
                }
            });
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException('User not found');
            }
            throw error;
        }
    }
}