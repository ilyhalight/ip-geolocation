import { BaseProviderOpts, IPGeolocationInfo, ProviderResponse, ProviderSuccessResponse } from "../types/providers/base.js";
import BaseProvider from "./base.js";
import { RawLookupSuccessResponse, ResponseLang } from "../types/providers/ipapicom.js";
export default class IPAPIComProvider extends BaseProvider {
    apiUrlPlaceholder: string;
    constructor(options?: BaseProviderOpts);
    isSuccessProviderRes<T>(res: ProviderResponse<T>): res is ProviderSuccessResponse<T>;
    rawLookup<T extends RawLookupSuccessResponse = RawLookupSuccessResponse>(ipAddress: string, fields?: string, lang?: ResponseLang): Promise<T>;
    lookup(ipAddress: string): Promise<IPGeolocationInfo>;
}
//# sourceMappingURL=ipapicom.d.ts.map