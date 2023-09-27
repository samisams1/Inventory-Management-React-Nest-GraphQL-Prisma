declare class DuplicationError extends Error {
    fields: string[];
    constructor(fields: string[]);
}
