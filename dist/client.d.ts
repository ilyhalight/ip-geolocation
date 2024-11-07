import { FetchFunction, IPGeolocationOpts, IPGeolocationService } from "./types/client.js";
import BaseProvider from "./providers/base.js";
export default class IPGeolocationClient {
    service: IPGeolocationService;
    fetch: FetchFunction;
    fetchOpts: Record<string, unknown>;
    provider: BaseProvider;
    apiUrl?: string;
    apiKey?: string;
    headers: Record<string, unknown>;
    constructor({ service, fetchFn, fetchOpts, apiUrl, apiKey, headers, }?: IPGeolocationOpts);
    changeService({ service, fetchFn, fetchOpts, apiUrl, apiKey, headers, }?: IPGeolocationOpts): void;
    lookup(ipAddress: string): Promise<import("./types/providers/base.js").IPGeolocationInfo>;
}
//# sourceMappingURL=client.d.ts.map