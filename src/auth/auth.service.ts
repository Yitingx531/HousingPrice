import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDBService } from 'src/users/DBService/userDB.service';
import { UserInfoResponseDto } from 'src/users/dto/userInfo-response.dto';
import { SignInDto } from './SignInDto';

@Injectable()
export class AuthService {
    constructor(private readonly userDBService: UserDBService){}

    async userSignIn(signInDto: SignInDto): Promise<UserInfoResponseDto>{
      try{  
        const user = await this.userDBService.authUser(signInDto.email, signInDto.password);
        if(typeof user === 'string'){
            throw new UnauthorizedException(user);
        }
        return user as UserInfoResponseDto;
      }catch(error){
        throw error;
      }
    }
}
