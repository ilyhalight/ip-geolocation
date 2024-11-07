export declare class ProviderError extends Error {
    constructor(message: string);
}
export declare class NotSupportMethodError extends ProviderError {
    constructor();
}
export declare class LookupError extends ProviderError {
    constructor(message: string | null);
}
//# sourceMappingURL=errors.d.ts.map