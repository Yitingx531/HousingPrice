import { Injectable } from '@nestjs/common';
import axios from 'axios';

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

    async searchProperties(location: string, status: string = 'forSale', sortSelection: string = 'priorityscore') {
        try {
            const response = await axios.get(`${this.ZILLOW_API_BASE_URL}/search`, {
                params: {
                    location,
                    output: 'json',
                    status,
                    sortSelection
                },
                headers: {
                    'X-RapidAPI-Host': this.ZILLOW_API_HOST,
                    'X-RapidAPI-Key': this.RAPIDAPI_KEY,
                },
            });
            console.log('results', response.data.results)
            return response.data.results; 
        } catch (error) {
            throw new error;
        }
    }
}
