
export class SchemasModel {
    constructor(schemas) {
        this.setSchemas(schemas);
    }

    setSchemas(schemas) {
        this.schemas = schemas.map((schema) => {
            delete schema._id;
            if (typeof schema.schema === 'string') {
                schema.schema = JSON.parse(schema.schema);
            }
            return schema;
        });
    }

    getSchemas() {
        return JSON.parse(JSON.stringify(this.schemas));
    }

    getSchema(name) {
        const schema = this.schemas.find(s => s.id === name);
        return JSON.parse(JSON.stringify(schema));
    }

    count() {
        return this.schemas.length;
    }
}
