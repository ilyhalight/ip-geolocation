import { fetchWithTimeout } from "./utils/utils.js";
import { IPGeolocationService, } from "./types/client.js";
import IPGeolocationProvider from "./providers/index.js";
export default class IPGeolocationClient {
    service;
    fetch;
    fetchOpts;
    provider;
    apiUrl;
    apiKey;
    headers = {};
    constructor({ service = IPGeolocationService.freeipapi, fetchFn = fetchWithTimeout, fetchOpts = {}, apiUrl = undefined, apiKey = undefined, headers = {}, } = {}) {
        this.changeService({
            service,
            fetchFn,
            fetchOpts,
            apiUrl,
            apiKey,
            headers,
        });
    }
    changeService({ service = this.service, fetchFn = this.fetch, fetchOpts = this.fetchOpts, apiUrl = this.apiUrl, apiKey = this.apiKey, headers = this.headers, } = {}) {
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
    async lookup(ipAddress) {
        return await this.provider.lookup(ipAddress);
    }
}
