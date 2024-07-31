import { Module } from '@nestjs/common';
import { ZillowController } from './zillow.controller';
import { ZillowService } from './zillow.service';

@Module({
    controllers: [ZillowController],
    providers: [ZillowService],
})
export class ZillowModule { }
