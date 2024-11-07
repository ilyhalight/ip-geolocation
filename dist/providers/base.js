import config from "../config/config.js";
import { NotSupportMethodError } from "../errors.js";
import { fetchWithTimeout } from "../utils/utils.js";
export default class BaseProvider {
    apiUrl;
    apiKey;
    apiUrlPlaceholder = config.apiUrlPlaceholder;
    fetch;
    headers = {};
    fetchOpts;
    constructor({ fetchFn = fetchWithTimeout, fetchOpts = {}, apiUrl = this.apiUrlPlaceholder, apiKey, headers = {}, } = {}) {
        this.fetch = fetchFn;
        this.fetchOpts = fetchOpts;
        this.apiKey = apiKey;
        this.updateData({ apiUrl, headers });
    }
    updateData({ apiUrl, headers } = {}) {
        this.apiUrl = this.isValidUrl(apiUrl) ? apiUrl : this.apiUrlPlaceholder;
        this.headers = {
            ...this.headers,
            ...headers,
        };
    }
    isValidUrl(url) {
        return /^(http(s)?):\/\//.test(String(url));
    }
    getOpts(body = undefined, headers = {}, method = "GET") {
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
    async request(path, body = undefined, headers = {}, method = "GET") {
        const options = this.getOpts(body, headers, method);
        try {
            const res = await this.fetch(`${this.apiUrl}${path}`, options);
            const data = (await res.json());
            return {
                success: res.status === 200,
                data,
            };
        }
        catch (err) {
            return {
                success: false,
                data: err?.message,
            };
        }
    }
    async lookup(ipAddress) {
        throw new NotSupportMethodError();
    }
}
