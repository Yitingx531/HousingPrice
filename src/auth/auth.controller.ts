import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserInfoResponseDto } from 'src/users/dto/userInfo-response.dto';
import { SignInDto } from './SignInDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signin')
    async userSignIn(@Body() signInDto: SignInDto): Promise<UserInfoResponseDto>{
        return this.authService.userSignIn(signInDto);
    }   
}
