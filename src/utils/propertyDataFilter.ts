import FilteredPropertyData from "src/zillow/interfaces/filteredPropertyData";

/**
 * 
 * @param propertiesData 
 * @returns array of objects with filtered data
 */
export function propertyDataFilter(propertiesData: any[]): FilteredPropertyData[]{
    return propertiesData.map(property => ({
            bathrooms: property.bathrooms,
            bedrooms: property.bedrooms,
            city: property.city,
            country: property.country,
            // currency: 'USD',
            // daysOnZillow: -1,
            homeStatus: property.homeStatus,
            // homeStatusForHDP: 'FOR_SALE',
            homeType: property.homeType,
            imgSrc: property.imgSrc,
            // isFeatured: false,
            // isNonOwnerOccupied: true,
            // isPreforeclosureAuction: false,
            // isPremierBuilder: false,
            // isShowcaseListing: false,
            isUnmappable: property.isUnmappable,
            // isZillowOwned: boolean,
            latitude: property.latitude,
            // listing_sub_type: { is_FSBA: true },
            livingArea: property.livingArea,
            longitude: property.longitude,
            lotAreaUnit: property.lotAreaUnit,
            lotAreaValue: property.lotAreaValue,
            price: property.price,
            priceForHDP: property.priceForHDP,
            rentZestimate: property.rentZestimate,
            // shouldHighlight: boolean,
            state: property.state,
            streetAddress: property.streetAddress,
            taxAssessedValue: property.taxAssessedValue,
            zestimate: property.zestimate,
            zipcode: property.zipcode,
            zpid: property.zpid
    }))

}