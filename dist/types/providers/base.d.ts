import { FetchFunction } from "../client.js";
export type BaseProviderOpts = {
    fetchFn?: FetchFunction;
    fetchOpts?: Record<string, unknown>;
    apiUrl?: string;
    apiKey?: string;
    headers?: Record<string, unknown>;
};
export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export type ProviderSuccessResponse<T = unknown> = {
    success: boolean;
    data: T;
};
export type ProviderFailedResponse = {
    success: false;
    data: string | null;
};
export type ProviderResponse<T = unknown> = ProviderFailedResponse | ProviderSuccessResponse<T>;
export type IPGeolocationInfo = {
    continent: string;
    continentCode: string;
    country: string;
    countryCode: string;
    city: string;
    region: string;
    lat: number;
    lon: number;
    timezone?: string;
    isMobile?: boolean;
    isProxy?: boolean;
    isVPN?: boolean;
    isHosting?: boolean;
    isTor?: boolean;
};
//# sourceMappingURL=base.d.ts.map