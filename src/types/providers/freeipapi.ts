export type Currency = {
  /**
   * e.g. USD
   */
  code: string;
  name: string;
};

export type LookupSuccessResponse = {
  ipVersion: 4 | 6;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  /**
   * ISO 3166-1 alpha-2 e.g. US
   */
  countryCode: string;
  /**
   * The time zone offset of the IP address location e.g. +02:00
   */
  timeZone: string;
  zipCode: string;
  cityName: string;
  regionName: string;
  continent: string;
  /**
   * ISO code e.g. EU
   */
  continentCode: string;
  /**
   * It shows that if the IP is used as a public proxy or not
   */
  isProxy: boolean;
  currency: Currency;
  /**
   * The language of the country e.g. English
   */
  language: string;
  /**
   * A list of Timezones related to the same country e.g. ["America/Detroit"]
   */
  timeZones: string[];
  /**
   * List of TLDs of the country e.g. [".us"]
   */
  tlds: string[];
};
