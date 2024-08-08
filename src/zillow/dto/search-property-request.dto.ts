export class SearchPropertyRequestDto {
    location: string;
    status?: string = 'forSale';
    sortSelection?: string = 'priorityscore';
}