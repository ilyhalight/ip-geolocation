import { BaseProviderOpts } from "../types/providers/base.js";
import FreeIPAPIProvider from "./freeipapi.js";
import IPAPIComProvider from "./ipapicom.js";
export { default as BaseProvider } from "./base.js";
export { default as FreeIPAPIProvider } from "./freeipapi.js";
export { default as IPAPIComProvider } from "./ipapicom.js";
export declare const availableProviders: {
    freeipapi: typeof FreeIPAPIProvider;
    ipapicom: typeof IPAPIComProvider;
};
export type AvailableIPGeolocationProviders = typeof availableProviders;
export default class IPGeolocationProvider {
    providersData: BaseProviderOpts;
    constructor(providersData?: BaseProviderOpts);
    getProvider<K extends keyof AvailableIPGeolocationProviders>(service: K): AvailableIPGeolocationProviders[K]["prototype"];
}
//# sourceMappingURL=index.d.ts.map