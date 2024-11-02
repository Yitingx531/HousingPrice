import { Controller, Post, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInfoRequestDto } from './dto/userInfo-request.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    /**
     * store a new user's data into the users table
     * @param userInfo 
     */
    @Post()
    async createUser(@Body() userInfo: UserInfoRequestDto) {
        await this.usersService.createUser(userInfo);
    }

    /**
     * update a user's info with the user's id
     * @param email 
     * @param userInfo 
     */
    // @Put('usersetting:id')
    // async updateUserInfo(@Param('id') id: number, @Body() userInfo: UserInfoRequestDto): Promise<void> {
    //     await this.usersService.updateUserInfo(userInfo.id, userInfo);
    // }
}