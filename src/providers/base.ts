/* eslint-disable @typescript-eslint/require-await */

import config from "@/config/config";
import { NotSupportMethodError } from "@/errors";
import { FetchFunction } from "@/types/client";
import {
  BaseProviderOpts,
  IPGeolocationInfo,
  ProviderResponse,
  RequestMethod,
} from "@/types/providers/base";
import { fetchWithTimeout } from "@/utils/utils";

export default class BaseProvider {
  apiUrl!: string;
  apiKey?: string;
  apiUrlPlaceholder = config.apiUrlPlaceholder;
  fetch: FetchFunction;
  headers: Record<string, unknown> = {};
  fetchOpts: Record<string, unknown>;

  constructor({
    fetchFn = fetchWithTimeout,
    fetchOpts = {},
    apiUrl = this.apiUrlPlaceholder,
    apiKey,
    headers = {},
  }: BaseProviderOpts = {}) {
    this.fetch = fetchFn;
    this.fetchOpts = fetchOpts;
    this.apiKey = apiKey;
    this.updateData({ apiUrl, headers });
  }

  updateData({ apiUrl, headers }: Partial<BaseProviderOpts> = {}) {
    this.apiUrl = this.isValidUrl(apiUrl) ? apiUrl : this.apiUrlPlaceholder;
    this.headers = {
      ...this.headers,
      ...headers,
    };
  }

  isValidUrl(url: string | undefined): url is string {
    return /^(http(s)?):\/\//.test(String(url));
  }

  getOpts(
    body: unknown = undefined,
    headers: Record<string, string> = {},
    method: RequestMethod = "GET",
  ) {
    return {
      method,
      headers: {
        ...this.headers,
        ...headers,
      },
      body,
      ...this.fetchOpts,
    };
  }

  /**
   * The standard method for requesting the API, if necessary, you can override how it is done in the example
   */
  async request<T = unknown>(
    path: string,
    body: unknown = undefined,
    headers: Record<string, string> = {},
    method: RequestMethod = "GET",
  ): Promise<ProviderResponse<T>> {
    const options = this.getOpts(body, headers, method);

    try {
      const res = await this.fetch(`${this.apiUrl}${path}`, options);
      const data = (await res.json()) as T;
      return {
        success: res.status === 200,
        data,
      };
    } catch (err) {
      return {
        success: false,
        data: (err as Error)?.message,
      };
    }
  }

  async lookup(ipAddress: string): Promise<IPGeolocationInfo> {
    throw new NotSupportMethodError();
  }
}
