
export class Weather {
    coord!: Coord;
    weather!: WeatherDetails[];
    base!: string;
    main!: MainWeather;
    visibility!: number;
    wind!: Wind;
    clouds!: Clouds;
    dt!: number;
    sys!: Sys;
    timezone!: number;
    id!: number;
    name!: string;
    cod!: number;

}

export class Coord {
    "lon": number;
    "lat": number;
};
export class MainWeather {
    feels_like!: number;
    humidity!: number;
    pressure!: number;
    temp!: number;
    temp_max!: number;
    temp_min!: number;
}
export class WeatherDetails {
    "id": number;
    "main": string;
    "description": string;
    "icon": string;
};
export class Wind {
    speed!: number;
    deg!: number;
};
export class Sys {
    type!: number;
    id!: number;
    country!: string;
    sunrise!: number;
    sunset!: number;
};
export class Clouds {
    all!: number;
};