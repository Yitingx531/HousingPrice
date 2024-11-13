import { Body, Controller, HttpException, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './SignInDto';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './jwtContants';
import { Response, Request } from 'express';


@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private jwtService: JwtService
    ){}

    @Post('signin')
    async userSignIn(
        @Body() signInDto: SignInDto,
        @Res({passthrough: true}) response: Response
    ): Promise<{message: string}>{
        const tokens = await this.authService.userSignIn(signInDto);

        response.cookie('access_token', tokens.access_token, {
            httpOnly: true,
            secure: true,
            maxAge: 4 * 60 * 60 * 1000, //4hrs
            sameSite: 'strict'
        })

        response.cookie('refresh_token', tokens.refresh_token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
            sameSite: 'strict'

        })
        return { message: 'Sign-in successful' };
    }   

    @Post('refresh')
    async refreshToken(
        @Res({passthrough: true}) response: Response,
        @Req() request: Request
    ): Promise<{message: string}>{
        const refreshToken = request.cookies['refresh_token'];

        if(!refreshToken) {
            throw new HttpException('Refresh token not found', HttpStatus.UNAUTHORIZED);
        }
        try{
            const payload = await this.jwtService.verifyAsync(refreshToken, {secret:  jwtConstants.secret});
            const newAccessToken = await this.jwtService.signAsync({email: payload.email, username: payload.username}, {expiresIn:'4h'});
            response.cookie('access_token', newAccessToken, {
                httpOnly: true,
                secure: true,
                maxAge: 4 * 60 * 60 * 1000, // 4 hours
                sameSite: 'strict',
            })
            return { message: 'Access token successfully refreshed'}
        } catch(error){
            throw new HttpException('Invalid refresh token', HttpStatus.FORBIDDEN);
        }
    }
}
