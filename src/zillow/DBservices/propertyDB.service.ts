import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SearchPropertyResponseDto } from '../dto/search-property-response.dto';

@Injectable()
export class PropertyDBService {
    constructor(private readonly prisma: PrismaService){};
    
    async storePropertyData(propertyData: SearchPropertyResponseDto[]): Promise<void> {
      for (const property of propertyData) {
          const result = await this.prisma.property.upsert({
              where: {
                  zpid: property.zpid,
              },
              update: {
                  bathrooms: property.bathrooms ?? 0,
                  bedrooms: property.bedrooms ?? 0,
                  city: property.city ?? 'Unknown',
                  country: property.country ?? 'Unknown',
                  homeStatus: property.homeStatus ?? 'Unknown',
                  homeType: property.homeType ?? 'Unknown',
                  imgSrc: property.imgSrc ?? '',
                  isUnmappable: property.isUnmappable ?? false,
                  latitude: property.latitude ?? 0,
                  livingArea: property.livingArea ?? 0,
                  longitude: property.longitude ?? 0,
                  lotAreaUnit: property.lotAreaUnit ?? 'Unknown',
                  lotAreaValue: property.lotAreaValue ?? 0,
                  price: property.price ?? 0,
                  priceForHDP: property.priceForHDP ?? 0,
                  rentZestimate: property.rentZestimate ?? 0,
                  state: property.state ?? 'Unknown',
                  streetAddress: property.streetAddress ?? 'Unknown',
                  taxAssessedValue: property.taxAssessedValue ?? 0,
                  zestimate: property.zestimate ?? 0,
                  zipcode: property.zipcode ?? 'Unknown',
              },
              create: {
                  bathrooms: property.bathrooms ?? 0,
                  bedrooms: property.bedrooms ?? 0,
                  city: property.city ?? 'Unknown',
                  country: property.country ?? 'Unknown',
                  homeStatus: property.homeStatus ?? 'Unknown',
                  homeType: property.homeType ?? 'Unknown',
                  imgSrc: property.imgSrc ?? '',
                  isUnmappable: property.isUnmappable ?? false,
                  latitude: property.latitude ?? 0,
                  livingArea: property.livingArea ?? 0,
                  longitude: property.longitude ?? 0,
                  lotAreaUnit: property.lotAreaUnit ?? 'Unknown',
                  lotAreaValue: property.lotAreaValue ?? 0,
                  price: property.price ?? 0,
                  priceForHDP: property.priceForHDP ?? 0,
                  rentZestimate: property.rentZestimate ?? 0,
                  state: property.state ?? 'Unknown',
                  streetAddress: property.streetAddress ?? 'Unknown',
                  taxAssessedValue: property.taxAssessedValue ?? 0,
                  zestimate: property.zestimate ?? 0,
                  zipcode: property.zipcode ?? 'Unknown',
                  zpid: property.zpid,
              },

          });
          console.log('property data length', propertyData)
      }
  }
}
