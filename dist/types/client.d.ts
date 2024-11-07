export type FetchFunction = (input: string | URL | Request, init?: any) => Promise<Response>;
export declare enum IPGeolocationService {
    freeipapi = "freeipapi",
    ipapicom = "ipapicom"
}
export type IPGeolocationOpts = {
    service?: IPGeolocationService;
    fetchFn?: FetchFunction;
    fetchOpts?: Record<string, unknown>;
    apiUrl?: string;
    apiKey?: string;
    headers?: Record<string, unknown>;
};
//# sourceMappingURL=client.d.ts.map