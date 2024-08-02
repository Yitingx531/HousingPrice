import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ZillowService {
    private readonly RAPIDAPI_KEY = process.env.ZILLOW_API_KEY;
    private readonly ZILLOW_API_BASE_URL = process.env.ZILLOW_API_BASE_URL;
    private readonly ZILLOW_API_HOST = process.env.ZILLOW_API_HOST;

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
            console.log('API Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error in ZillowService:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
}