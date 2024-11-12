import { Injectable } from '@nestjs/common';
import { UserDBService } from 'src/users/DBService/userDB.service';
import { JwtService } from '@nestjs/jwt';
import { UserInfoResponseDto } from 'src/users/dto/userInfo-response.dto';
import { SignInDto } from './SignInDto';

@Injectable()
export class AuthService {
    constructor(
      private readonly userDBService: UserDBService,
      private readonly jwtService: JwtService
    ){}

    async userSignIn(signInDto: SignInDto): Promise<{access_token: string, refresh_token: string}>{
      try{  
        const user = await this.userDBService.authUser(signInDto.email, signInDto.password);
        const payload = {email: user.email, username: user.username}
        return{
          access_token: await this.jwtService.signAsync(payload, {expiresIn: '1h'}),
          refresh_token: await this.jwtService.signAsync(payload, {expiresIn: '1m'})
        }
      }catch(error){
        throw error;
      }
    }
}
