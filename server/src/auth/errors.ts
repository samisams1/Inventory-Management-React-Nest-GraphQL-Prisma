  class DuplicationError extends Error {
    fields: string[];
  
    constructor(fields: string[]) {
      const message = `Fields already exist: ${fields.join(', ')}`;
      super(message);
      this.name = 'DuplicationError';
      this.fields = fields;
    }
  }