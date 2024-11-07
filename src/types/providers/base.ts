import { FetchFunction } from "../client";

export type BaseProviderOpts = {
  /**
   * e.g. GM_fetch, ofetch.native and etc
   */
  fetchFn?: FetchFunction;
  /**
   * e.g. { dispatcher: ... }
   */
  fetchOpts?: Record<string, unknown>;
  /**
   * e.g. schema://domain/api
   */
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

export type ProviderResponse<T = unknown> =
  | ProviderFailedResponse
  | ProviderSuccessResponse<T>;

export type IPGeolocationInfo = {
  continent: string;
  /**
   * ISO code e.g. EU
   */
  continentCode: string;
  country: string;
  /**
   * ISO 3166-1 alpha-2 e.g. US
   */
  countryCode: string;
  city: string;
  region: string;
  lat: number;
  lon: number;
  /**
   * This isn't always the true time zone of location.
   *
   * It's recommended to use it only to understand the UTC time shift
   */
  timezone?: string;

  // This section doesn't work correctly for all providers
  isMobile?: boolean;
  isProxy?: boolean;
  isVPN?: boolean;
  isHosting?: boolean;
  isTor?: boolean;
};
