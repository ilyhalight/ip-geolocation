import { BaseProviderOpts, IPGeolocationInfo, ProviderResponse, ProviderSuccessResponse } from "../types/providers/base.js";
import BaseProvider from "./base.js";
import { LookupSuccessResponse } from "../types/providers/freeipapi.js";
export default class FreeIPAPIProvider extends BaseProvider {
    apiUrlPlaceholder: string;
    constructor(options?: BaseProviderOpts);
    isSuccessProviderRes<T>(res: ProviderResponse<T>): res is ProviderSuccessResponse<T>;
    rawLookup(ipAddress: string): Promise<LookupSuccessResponse>;
    lookup(ipAddress: string): Promise<IPGeolocationInfo>;
}
//# sourceMappingURL=freeipapi.d.ts.map