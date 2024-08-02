import { Controller, Get, Query } from '@nestjs/common';
import { ZillowService } from './zillow.service';

@Controller('zillow')
export class ZillowController {
    constructor(private zillowService: ZillowService) {}
    /**
     * Search for filtered properties by neighborhood, city, or ZIP code. PS : To search for an address of a property, use the "/search_address" endpoint. 
     * For a list of properties, you can select the output format (JSON , CSV , XLSX) using the optional "output" parameter.
     * @param location 
     * @param status 
     * @param sortSelection 
     * @returns 
     */
    @Get('search')
    async searchProperties(
        @Query('location') location: string,
        @Query('status') status: string = 'forSale',
        @Query('sortSelection') sortSelection: string = 'priorityscore'
    ) {
        return this.zillowService.searchProperties(location, status, sortSelection);
    }
}