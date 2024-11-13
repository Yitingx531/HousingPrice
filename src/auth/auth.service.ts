import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserDBService } from 'src/users/DBService/userDB.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './SignInDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userDBService: UserDBService,
    private readonly jwtService: JwtService
  ) {}

  async userSignIn(signInDto: SignInDto): Promise<{ access_token: string, refresh_token: string }> {
    try {
      const user = await this.userDBService.authUser(signInDto.email, signInDto.password);
       console.log('userid', user.id)
      const payload = { userId: user.id, email: user.email };

      return {
        access_token: await this.jwtService.signAsync(payload, { expiresIn: '4h' }),
        refresh_token: await this.jwtService.signAsync(payload, { expiresIn: '30d' })
      };
    } catch (error) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }
}
