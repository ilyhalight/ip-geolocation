import {
  BaseProviderOpts,
  IPGeolocationInfo,
  ProviderResponse,
  ProviderSuccessResponse,
} from "@/types/providers/base";
import BaseProvider from "./base";
import { LookupSuccessResponse } from "@/types/providers/freeipapi";
import { LookupError } from "@/errors";

/**
 * The total limit is 60 req/min on free tier
 *
 * For unlimited requests set your API Token
 */
export default class FreeIPAPIProvider extends BaseProvider {
  apiUrlPlaceholder = "https://freeipapi.com";
  constructor(options: BaseProviderOpts = {}) {
    super(options);
    this.updateData(options);
  }

  isSuccessProviderRes<T>(
    res: ProviderResponse<T>,
  ): res is ProviderSuccessResponse<T> {
    return res.success;
  }

  async rawLookup(ipAddress: string): Promise<LookupSuccessResponse> {
    const headers = this.apiKey
      ? {
          Authorization: `Bearer ${this.apiKey}`,
        }
      : undefined;
    const res = await this.request<LookupSuccessResponse>(
      `/api/json/${ipAddress}`,
      undefined,
      headers,
    );
    if (!this.isSuccessProviderRes<LookupSuccessResponse>(res)) {
      throw new LookupError(res.data);
    }

    const data = res.data;

    if (
      data.continent === "-" &&
      data.countryName === "" &&
      data.cityName === "" &&
      data.ipAddress === ""
    ) {
      throw new LookupError("api returned an empty result");
    }

    return data;
  }

  async lookup(ipAddress: string): Promise<IPGeolocationInfo> {
    const data = await this.rawLookup(ipAddress);

    const {
      continent,
      continentCode,
      countryName: country,
      countryCode,
      cityName: city,
      regionName: region,
      latitude: lat,
      longitude: lon,
      timeZones: [timezone],
      isProxy,
    } = data;

    return {
      continent,
      continentCode,
      country,
      countryCode,
      city,
      region,
      lat,
      lon,
      timezone,
      isProxy,
    };
  }
}
