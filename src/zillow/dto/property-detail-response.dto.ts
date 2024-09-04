export class PropertyDetailResponseDto {
    price: number;
    abbreviatedAddress: string;
    city: string;
    state: string;
    zipcode: number;
    responsivePhotos: { url: string }[] = [];
    bedrooms: number;
    bathrooms: number;
    livingArea: number;
    longitude: number;
    latitude: number; 
    hiResImageLink: string;
    description: string;
    priceHistory: PriceHistoryItem[];
  }

export interface PriceHistoryItem {
    date: Date;
    event: string;
    price: number;
    pricePerSquareFoot: number;
  }