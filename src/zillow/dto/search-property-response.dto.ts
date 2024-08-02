import FilteredPropertyData from '../interfaces/filteredPropertyData';

export class SearchPropertyResponseDto implements FilteredPropertyData {
    bathrooms: number;
    bedrooms: number;
    city: string;
    country: string;
    homeStatus: string;
    homeType: string;
    imgSrc: string;
    isUnmappable: boolean;
    latitude: number;
    livingArea: number;
    longitude: number;
    lotAreaUnit: string;
    lotAreaValue: number;
    price: number;
    priceForHDP: number;
    rentZestimate: number;
    state: string;
    streetAddress: string;
    taxAssessedValue: number;
    zestimate: number;
    zipcode: string;
    zpid: number;
}