import { FetchFunction } from "../types/client.js";
import { BaseProviderOpts, IPGeolocationInfo, ProviderResponse, RequestMethod } from "../types/providers/base.js";
export default class BaseProvider {
    apiUrl: string;
    apiKey?: string;
    apiUrlPlaceholder: string;
    fetch: FetchFunction;
    headers: Record<string, unknown>;
    fetchOpts: Record<string, unknown>;
    constructor({ fetchFn, fetchOpts, apiUrl, apiKey, headers, }?: BaseProviderOpts);
    updateData({ apiUrl, headers }?: Partial<BaseProviderOpts>): void;
    isValidUrl(url: string | undefined): url is string;
    getOpts(body?: unknown, headers?: Record<string, string>, method?: RequestMethod): {
        method: RequestMethod;
        headers: {
            [x: string]: unknown;
        };
        body: unknown;
    };
    request<T = unknown>(path: string, body?: unknown, headers?: Record<string, string>, method?: RequestMethod): Promise<ProviderResponse<T>>;
    lookup(ipAddress: string): Promise<IPGeolocationInfo>;
}
//# sourceMappingURL=base.d.ts.map