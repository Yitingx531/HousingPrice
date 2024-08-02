import { Body, Controller, Get, Query } from '@nestjs/common';
import { ZillowService } from './zillow.service';
import { SearchPropertyRequestDto } from './dto/search-property-request.dto';
import { SearchPropertyResponseDto } from './dto/search-property-response.dto';

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
    async searchProperties(@Query() searchPropertyRequestDto:SearchPropertyRequestDto): Promise<SearchPropertyResponseDto[]> {
        return this.zillowService.searchProperties(searchPropertyRequestDto);
    }
}