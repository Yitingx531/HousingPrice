import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { propertyDataFilter } from 'src/utils/propertyDataFilter';
import { SearchPropertyRequestDto } from './dto/search-property-request.dto';
import { SearchPropertyResponseDto } from './dto/search-property-response.dto';

@Injectable()
export class ZillowService {
    private readonly RAPIDAPI_KEY = process.env.ZILLOW_API_KEY;
    private readonly ZILLOW_API_BASE_URL = process.env.ZILLOW_API_BASE_URL;
    private readonly ZILLOW_API_HOST = process.env.ZILLOW_API_HOST;

     /**
     * Searches for properties based on the given location, status, and sort selection.
     * 
     * @param location - The location to search properties in (e.g., neighborhood, city, or ZIP code).
     * @param status - The status of the properties to search for (default is 'forSale').
     * @param sortSelection - The criteria to sort the search results by (default is 'priorityscore').
     * @returns A promise that resolves to the search results.
     * @throws An error if the API call fails.
     */

    async searchProperties(searchRequestDto: SearchPropertyRequestDto): Promise<SearchPropertyResponseDto[]> {
        try {
            const response = await axios.get(`${this.ZILLOW_API_BASE_URL}/search`, {
                params: {
                    location: searchRequestDto.location,
                    output: 'json',
                    status: searchRequestDto.status || 'forSale',
                    sortSelection: searchRequestDto.sortSelection || 'priorityscore'
                },
                headers: {
                    'X-RapidAPI-Host': this.ZILLOW_API_HOST,
                    'X-RapidAPI-Key': this.RAPIDAPI_KEY,
                },
            });
            console.log(response.data.results)
            const filteredData = propertyDataFilter(response.data.results);
            console.log('filtered data', filteredData)
            return filteredData as SearchPropertyResponseDto[]; 
        } catch (error) {
            throw new error;
        }
    }
}
