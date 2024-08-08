import { Module } from '@nestjs/common';
import { ZillowController } from './zillow.controller';
import { ZillowService } from './zillow.service';
import { PrismaService } from 'src/prisma.service';
import { PropertyService } from './DBservices/property.service';

@Module({
    imports: [],
    controllers: [ZillowController],
    providers: [ZillowService, PropertyService, PrismaService], 
    exports: [ZillowService, PropertyService],
})
export class ZillowModule {}
