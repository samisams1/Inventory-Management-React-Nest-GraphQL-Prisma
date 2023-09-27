class DuplicationError extends Error {
    constructor(fields) {
        const message = `Fields already exist: ${fields.join(', ')}`;
        super(message);
        this.name = 'DuplicationError';
        this.fields = fields;
    }
}
//# sourceMappingURL=errors.js.map