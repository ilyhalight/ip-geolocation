import { IPGeolocationService } from "../types/client.js";
import FreeIPAPIProvider from "./freeipapi.js";
import IPAPIComProvider from "./ipapicom.js";
export { default as BaseProvider } from "./base.js";
export { default as FreeIPAPIProvider } from "./freeipapi.js";
export { default as IPAPIComProvider } from "./ipapicom.js";
export const availableProviders = {
    [IPGeolocationService.freeipapi]: FreeIPAPIProvider,
    [IPGeolocationService.ipapicom]: IPAPIComProvider,
};
export default class IPGeolocationProvider {
    providersData;
    constructor(providersData = {}) {
        this.providersData = providersData;
    }
    getProvider(service) {
        return new availableProviders[service](this.providersData);
    }
}
