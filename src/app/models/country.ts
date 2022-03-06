export class GetCountriesResponse{
    error!: boolean;
    msg!: string;
    data!: Country[];
}

export class Country{
    iso2!: string;
    iso3!: string;
    country!: string;
    cities!: string[];
}

export class GetCitiesResponse{
    error!: boolean;
    msg!: string;
    data!: string[];
}