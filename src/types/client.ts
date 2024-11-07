export type FetchFunction = (
  input: string | URL | Request,
  init?: any,
) => Promise<Response>;

export enum IPGeolocationService {
  /**
   * The total limit is 60 req/min on free tier
   *
   * For unlimited requests set your API Token
   */
  freeipapi = "freeipapi",
  /**
   * The total limit is 45 req/min on free tier
   *
   * Support paid API
   */
  ipapicom = "ipapicom",
}

export type IPGeolocationOpts = {
  service?: IPGeolocationService;
  /**
   * e.g. GM_fetch, ofetch.native and etc
   */
  fetchFn?: FetchFunction;
  /**
   * e.g. { dispatcher: ... }
   */
  fetchOpts?: Record<string, unknown>;
  apiUrl?: string;
  /**
   * API key/token for access to paid APIs
   */
  apiKey?: string;
  headers?: Record<string, unknown>;
};
