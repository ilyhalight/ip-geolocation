import { BaseProviderOpts } from "@/types/providers/base";
import { IPGeolocationService } from "@/types/client";

import FreeIPAPIProvider from "./freeipapi";
import IPAPIComProvider from "./ipapicom";

export { default as BaseProvider } from "./base";
export { default as FreeIPAPIProvider } from "./freeipapi";
export { default as IPAPIComProvider } from "./ipapicom";

export const availableProviders = {
  [IPGeolocationService.freeipapi]: FreeIPAPIProvider,
  [IPGeolocationService.ipapicom]: IPAPIComProvider,
};

export type AvailableIPGeolocationProviders = typeof availableProviders;

/**
 * A convenient wrapper over the rest of the providers
 */
export default class IPGeolocationProvider {
  providersData: BaseProviderOpts;

  constructor(providersData: BaseProviderOpts = {}) {
    this.providersData = providersData;
  }

  getProvider<K extends keyof AvailableIPGeolocationProviders>(
    service: K,
  ): AvailableIPGeolocationProviders[K]["prototype"] {
    return new availableProviders[service](this.providersData);
  }
}
