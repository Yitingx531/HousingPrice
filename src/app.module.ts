import { Module } from '@nestjs/common';
import { ZillowModule } from './zillow/zillow.module';

@Module({
  imports: [ZillowModule],
})
export class AppModule {}
