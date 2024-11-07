export class ProviderError extends Error {
    constructor(message) {
        super(message);
        this.name = "ProviderError";
        this.message = message;
    }
}
export class NotSupportMethodError extends ProviderError {
    constructor() {
        super("This provider doesn't support selected method");
    }
}
export class LookupError extends ProviderError {
    constructor(message) {
        super(`Unable to retrieve geolocation information for this IP address, because ${message}`);
    }
}
