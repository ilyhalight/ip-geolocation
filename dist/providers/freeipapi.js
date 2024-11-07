import BaseProvider from "./base.js";
import { LookupError } from "../errors.js";
export default class FreeIPAPIProvider extends BaseProvider {
    apiUrlPlaceholder = "https://freeipapi.com";
    constructor(options = {}) {
        super(options);
        this.updateData(options);
    }
    isSuccessProviderRes(res) {
        return res.success;
    }
    async rawLookup(ipAddress) {
        const headers = this.apiKey
            ? {
                Authorization: `Bearer ${this.apiKey}`,
            }
            : undefined;
        const res = await this.request(`/api/json/${ipAddress}`, undefined, headers);
        if (!this.isSuccessProviderRes(res)) {
            throw new LookupError(res.data);
        }
        const data = res.data;
        if (data.continent === "-" &&
            data.countryName === "" &&
            data.cityName === "" &&
            data.ipAddress === "") {
            throw new LookupError("api returned an empty result");
        }
        return data;
    }
    async lookup(ipAddress) {
        const data = await this.rawLookup(ipAddress);
        const { continent, continentCode, countryName: country, countryCode, cityName: city, regionName: region, latitude: lat, longitude: lon, timeZones: [timezone], isProxy, } = data;
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
