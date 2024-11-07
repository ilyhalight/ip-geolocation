import {
  BaseProviderOpts,
  IPGeolocationInfo,
  ProviderResponse,
  ProviderSuccessResponse,
} from "@/types/providers/base";
import BaseProvider from "./base";
import {
  LookupSuccessResponse,
  RawLookupSuccessResponse,
  ResponseLang,
} from "@/types/providers/ipapicom";
import { LookupError } from "@/errors";

/**
 * The total limit is 45 req/min on free tier
 *
 * To increase the limit, get a paid token and change the api address
 */
export default class IPAPIComProvider extends BaseProvider {
  // https only in pro subs
  apiUrlPlaceholder = "http://ip-api.com";
  constructor(options: BaseProviderOpts = {}) {
    super(options);
    this.updateData(options);
  }

  isSuccessProviderRes<T>(
    res: ProviderResponse<T>,
  ): res is ProviderSuccessResponse<T> {
    return res.success;
  }

  /**
   * By default enabled return all fields except reverse
   */
  async rawLookup<
    T extends RawLookupSuccessResponse = RawLookupSuccessResponse,
  >(
    ipAddress: string,
    fields = "66842623",
    lang: ResponseLang = "en",
  ): Promise<T> {
    const params = new URLSearchParams({
      fields,
      lang,
    });
    if (this.apiKey) {
      params.append("key", this.apiKey);
    }

    const res = await this.request<T>(
      `/json/${ipAddress}?${params.toString()}`,
      undefined,
    );
    if (!this.isSuccessProviderRes<T>(res)) {
      throw new LookupError(res.data);
    }

    const data = res.data;
    if (data.status === "fail" || data.message) {
      throw new LookupError(
        data.message ?? "the API returned an error without any message",
      );
    }

    return data;
  }

  async lookup(ipAddress: string): Promise<IPGeolocationInfo> {
    const data = await this.rawLookup<LookupSuccessResponse>(
      ipAddress,
      "20169179",
    );

    const {
      continent,
      continentCode,
      country,
      countryCode,
      city,
      regionName: region,
      lat,
      lon,
      timezone,
      mobile: isMobile,
      proxy: isProxy,
      hosting: isHosting,
    } = data;

    return {
      continent,
      continentCode,
      country,
      countryCode,
      city,
      lat,
      lon,
      region,
      timezone,
      isMobile,
      isProxy,
      isHosting,
    };
  }
}
