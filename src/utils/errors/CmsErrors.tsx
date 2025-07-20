export class CmsFetchError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CmsFetchError";
    }
}

export class CmsParseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CmsParseError";
    }
}
