import { Injectable } from '@nestjs/common';
import { UserInfoRequestDto } from './dto/userInfo-request.dto';
import { UserDBService } from './DBService/userDB.service';
import { hashPassword } from './utils/hashPassword';

@Injectable()
export class UsersService {
    constructor(private readonly userDBService: UserDBService) {}
    
    /**
     * create a new user in the database
     * @param userInfo 
     * @returns the created user 
     */
    async createUser(userInfo: UserInfoRequestDto) {
        try {
            const hashedPassword = await hashPassword(userInfo.password);
            const createdUser = await this.userDBService.createUser({
                ...userInfo,
                password: hashedPassword,
            });
            return createdUser; 
        } catch (error) {
            console.error('Error creating user:', error); // Log the detailed error
            throw new Error('Failed to create user: ' + error.message);
        }
     }
     
}
