import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SearchPropertyRequestDto } from './dto/search-property-request.dto';
import { SearchPropertyResponseDto } from './dto/search-property-response.dto';
import { PropertyDBService } from './DBservices/propertyDB.service';
import { PropertyDetailResponseDto } from './dto/property-detail-response.dto';
import { PropertyDetailRequestDto } from './dto/property-detail-request.dto';

@Injectable()
export class ZillowService {
    private readonly RAPIDAPI_KEY = process.env.ZILLOW_API_KEY;
    private readonly ZILLOW_API_BASE_URL = process.env.ZILLOW_API_BASE_URL;
    private readonly ZILLOW_API_HOST = process.env.ZILLOW_API_HOST;

    constructor(private readonly propertyDBService: PropertyDBService){};

     /**
     * Searches for properties based on the given location, the location can either be neighborhood, city, or ZIP code, optional: (status, and sort selection) 
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
                    sortSelection: searchRequestDto.sortSelection || 'priorityscore',
                    page: searchRequestDto.page || 1, 
                },
                headers: {
                    'X-RapidAPI-Host': this.ZILLOW_API_HOST,
                    'X-RapidAPI-Key': this.RAPIDAPI_KEY,
                },
            });

            const propertiesData = response.data.results; 
            console.log('propertyDatainZillowService',response.data.results)
            // store properties in our DB
            await this.propertyDBService.storePropertyData(propertiesData);

            return propertiesData as SearchPropertyResponseDto[]; 
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error occurred while searching properties: ${error.message}`);
            }
            throw new Error('An unknown error occurred while searching properties.');
        
        }
    }

    /**
     * Get the detailed information of one property with zpid provided
     * @param propertyDetailRequestDto
     * @returns detailed info of one property
     */
     async getPropertyDetails(propertyDetailRequestDto: PropertyDetailRequestDto): Promise<PropertyDetailResponseDto> {
        try {
            const response = await axios.get(`${this.ZILLOW_API_BASE_URL}/property`, {
                params: {
                    zpid: propertyDetailRequestDto.zpid,
                },
                headers: {
                    'X-RapidAPI-Host': this.ZILLOW_API_HOST,
                    'X-RapidAPI-Key': this.RAPIDAPI_KEY,
                },
            });

            const propertyDetails = response.data;
            console.log(propertyDetails)

            return propertyDetails as PropertyDetailResponseDto;
        } catch (error) {
            if (error instanceof Error) {
                console.error('Request setup error:', error.message);
                throw new Error(`Error occurred while setting up the request: ${error.message}`);
            }
            throw new Error('An unknown error occurred while setting up the request.');
        }
    }
}