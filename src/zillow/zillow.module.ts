import { Module } from '@nestjs/common';
import { ZillowController } from './zillow.controller';
import { ZillowService } from './zillow.service';
import { PrismaService } from 'src/prisma.service';
import { PropertyDBService } from './DBservices/propertyDB.service';

@Module({
    imports: [],
    controllers: [ZillowController],
    providers: [ZillowService, PropertyDBService, PrismaService], 
    exports: [ZillowService],
})
export class ZillowModule {}
