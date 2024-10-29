import { Module } from '@nestjs/common';
import { ZillowModule } from './zillow/zillow.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ZillowModule, AuthModule, UsersModule],
})
export class AppModule {}
