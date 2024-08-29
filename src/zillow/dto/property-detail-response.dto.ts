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
  }