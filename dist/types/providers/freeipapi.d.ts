export type Currency = {
    code: string;
    name: string;
};
export type LookupSuccessResponse = {
    ipVersion: 4 | 6;
    ipAddress: string;
    latitude: number;
    longitude: number;
    countryName: string;
    countryCode: string;
    timeZone: string;
    zipCode: string;
    cityName: string;
    regionName: string;
    continent: string;
    continentCode: string;
    isProxy: boolean;
    currency: Currency;
    language: string;
    timeZones: string[];
    tlds: string[];
};
//# sourceMappingURL=freeipapi.d.ts.map