import { fetchWithTimeout } from "@/utils/utils";
import {
  FetchFunction,
  IPGeolocationOpts,
  IPGeolocationService,
} from "@/types/client";
import IPGeolocationProvider from "@/providers";
import BaseProvider from "@/providers/base";

export default class IPGeolocationClient {
  /**
   * The service used for ip geolocation
   */
  service!: IPGeolocationService;

  /**
   * If you don't want to use the classic fetch
   * @includeExample examples/with_ofetch.ts:1-14
   */
  fetch!: FetchFunction;

  /**
   * Allows you to set specific values (e.g. proxy). When changing headers/body through this parameter, it is replaced entirely
   */
  fetchOpts!: Record<string, unknown>;

  provider!: BaseProvider;

  apiUrl?: string;
  apiKey?: string;

  /**
   * Adds headers to the list of headers
   */
  headers: Record<string, unknown> = {};

  constructor({
    service = IPGeolocationService.freeipapi,
    fetchFn = fetchWithTimeout,
    fetchOpts = {},
    apiUrl = undefined,
    apiKey = undefined,
    headers = {},
  }: IPGeolocationOpts = {}) {
    this.changeService({
      service,
      fetchFn,
      fetchOpts,
      apiUrl,
      apiKey,
      headers,
    });
  }

  /**
   * Change selected service to one of other
   */
  changeService({
    service = this.service,
    fetchFn = this.fetch,
    fetchOpts = this.fetchOpts,
    apiUrl = this.apiUrl,
    apiKey = this.apiKey,
    headers = this.headers,
  }: IPGeolocationOpts = {}) {
    this.service = service;
    this.fetch = fetchFn;
    this.fetchOpts = fetchOpts;
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.headers = headers;
    this.provider = new IPGeolocationProvider({
      fetchFn: this.fetch,
      fetchOpts: this.fetchOpts,
      apiKey: this.apiKey ?? undefined,
      headers: this.headers,
    }).getProvider(this.service);
  }

  async lookup(ipAddress: string) {
    return await this.provider.lookup(ipAddress);
  }
}
