import BaseProvider from "./base.js";
import { LookupError } from "../errors.js";
export default class IPAPIComProvider extends BaseProvider {
    apiUrlPlaceholder = "http://ip-api.com";
    constructor(options = {}) {
        super(options);
        this.updateData(options);
    }
    isSuccessProviderRes(res) {
        return res.success;
    }
    async rawLookup(ipAddress, fields = "66842623", lang = "en") {
        const params = new URLSearchParams({
            fields,
            lang,
        });
        if (this.apiKey) {
            params.append("key", this.apiKey);
        }
        const res = await this.request(`/json/${ipAddress}?${params.toString()}`, undefined);
        if (!this.isSuccessProviderRes(res)) {
            throw new LookupError(res.data);
        }
        const data = res.data;
        if (data.status === "fail" || data.message) {
            throw new LookupError(data.message ?? "the API returned an error without any message");
        }
        return data;
    }
    async lookup(ipAddress) {
        const data = await this.rawLookup(ipAddress, "20169179");
        const { continent, continentCode, country, countryCode, city, regionName: region, lat, lon, timezone, mobile: isMobile, proxy: isProxy, hosting: isHosting, } = data;
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
