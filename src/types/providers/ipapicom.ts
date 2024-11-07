export type LookupErrorMessage =
  | "private range"
  | "reserved range"
  | "invalid query";

export type ResponseLang =
  | "en"
  | "de"
  | "es"
  | "pt-BR"
  | "fr"
  | "ja"
  | "zh-CN"
  | "ru";

/**
 * All fields of this response depends on the fields param
 */
export type RawLookupFullSuccessResponse = {
  /**
   * for error messages
   */
  message?: LookupErrorMessage;
  status: "success" | "fail";
  continent: string;
  /**
   * ISO code e.g. EU
   */
  continentCode: string;
  country: string;
  /**
   * ISO 3166-1 alpha-2
   */
  countryCode: string;
  /**
   * Region/state short code (FIPS or ISO)
   */
  region: string;
  regionName: string;
  city: string;
  /**
   * District (subdivision of city)
   */
  district: string;
  zip: string;
  lat: number;
  lon: number;
  /**
   * e.g. America/Detroit
   */
  timezone: string;
  /**
   * Timezone UTC DST offset in seconds
   */
  offset: number;
  /**
   * National currency e.g. USD
   */
  currency: string;
  isp: string;
  org: string;
  as: string;
  asname: string;
  /**
   * Reverse DNS of the IP (can delay response) e.g wi-in-f94.1e100.net
   */
  reverse: string;
  mobile: boolean;
  /**
   * is Proxy, VPN or Tor exit address
   */
  proxy: boolean;
  /**
   * is big hosting provider (oracle, google and etc)
   */
  hosting: boolean;
  /**
   * IP used for the query
   */
  query: string;
};

export type RawLookupSuccessResponse = Partial<RawLookupFullSuccessResponse>;

export type RawLookupErrorResponse = Pick<
  RawLookupFullSuccessResponse,
  "status" | "message"
>;

export type LookupSuccessResponse = Omit<
  RawLookupFullSuccessResponse,
  | "region"
  | "district"
  | "zip"
  | "offset"
  | "currency"
  | "asname"
  | "reverse"
  | "query"
>;
