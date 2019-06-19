import { SchemasModel } from 'schemas-model';
import { Service } from 'service';

export class ObjectEditor {
    constructor() {
        this.schemasModel = new SchemasModel();
        this.service = new Service();
        $('#edit-object-form-save').click(this.handleObjectEditorSave());
        $('#edit-object-form-cancel').click(this.handleObjectEditorCancel());
        $('#edit-object-form-close').click(this.handleObjectEditorCancel());
        this.currentObjectData = {};
        this.schemaId = null;
        this.editObjectSaveFunction = null;
        this.editObjectCancelFunction = null;
        this.editObjectForm = null;

        $('#objectEditorSchema').change(() => {
            this.schemaId = $(this).val();
            this.generateForm(this.schemasModel.getSchema(parent.schemaId).schema);
        });
    }

    showObjectEditor(data, schemaId, saveFunction, cancelFunction) {
        this.schemaId = schemaId;
        if (data && typeof data === 'string' && data.trim().length > 0) {
            this.currentObjectData = JSON.parse(data);
        } else if (data && typeof data === 'object') {
            this.currentObjectData = data;
        } else {
            this.currentObjectData = {};
        }
        this.editObjectSaveFunction = saveFunction;
        this.editObjectCancelFunction = cancelFunction;

        const schema = this.schemasModel.getSchema(this.schemaId);
        if (schema) {
            $('#objectEditorSchema').val(this.schemaId).change();
            this.generateForm(schema.schema);
        }
        $('#object-validation-errors').empty();
        $('#edit-object-form').modal('show');
    }

    generateForm(schema) {
        const form = $('#json-object-editor');
        form.alpaca('destroy');
        form.empty();
        const formSchema = JSON.parse(JSON.stringify(schema));
        const data = {};
        const options = this.generateOptions(formSchema, {fields: {}}, this.currentObjectData, data);
        this.editObjectForm = form.alpaca({
            'schema': formSchema,
            data: data,
            options: options
        });
    }

    generateOptions(schema, options, sourceData, targetData) {
        let obj;
        if (!sourceData) sourceData = {};
        if (!targetData) targetData = {};
        schema.properties.forEach((property, key) => {
            obj = {
                label: key
            };
            switch (property.type) {
            case 'boolean':
                obj.type = 'checkbox';
                targetData[key] = sourceData[key];
                break;
            case 'integer':
                obj.type = 'integer';
                argetData[key] = sourceData[key];
                break;
            case 'array':
                if (schema.properties[key].items.type === 'string') {
                    obj.type = 'token';
                    obj.id = key;
                    obj.tokenfield = {
                        tokens: sourceData[key]
                    };
                    targetData[key] = sourceData[key] ? sourceData[key].join() : '';
                } else {
                    obj.type = 'array';
                    obj.items = {fields: {}};
                    targetData[key] = [];
                    let el;
                    sourceData[key].forEach(sourceEl => {
                        el = {};
                        targetData[key].push(el);
                        this.generateOptions(schema.properties[key].items, obj.items, sourceEl, el);
                    });
                }
                break;
            case 'object':
                obj.type = 'object';
                if (schema.properties[key].properties) {
                    obj.fields = {};
                    targetData[key] = {};
                    this.generateOptions(schema.properties[key], obj, sourceData[key], targetData[key]);
                } else {
                    targetData[key] = [];
                    for (let data in sourceData[key]) {
                        if (sourceData[key].hasOwnProperty(data)) {
                            targetData[key].push({name: data, value: sourceData[key][data]})
                        }
                    }
                    schema.properties[key].type = 'array';
                    schema.properties[key].items = {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string'
                            },
                            value: {
                                type: 'string'
                            }
                        }
                    };
                    obj.type = "array";
                    obj.items = {
                        fields: {
                            name: {
                                type: 'text',
                                label: 'Name'
                            },
                            value: {
                                type: 'text',
                                label: 'Value'
                            }
                        }
                    };
                }
                break;
            default:
                obj.type = 'text';
                targetData[key] = sourceData[key];
                break;
            }
            options.fields[key] = obj;
        });
        return options;
    }

    updateSchemas() {
        const schemas = $('#objectEditorSchema');
        schemas.empty();
        $('<option value="none">').appendTo(schemas);
        this.schemasModel.getSchemas().forEach(schema => {
            $('<option value="' + schema.id + '">' + schema.id + '</option>').appendTo(schemas);
        });
        schemas.change(this.handleSchemaChange);
    }

    handleSchemaChange() {
        return () => {
            this.schemaId = $(this).val();
            const schema = this.schemasModel.getSchema(this.schemaId);
            if (schema) {
                this.generateForm(schema.schema);
            }
        };
    }

    handleObjectEditorSave() {
        return function () {
            const formData = parent.convertFormToJson();
            this.service.validateObject(this.schemaId, formData, err => {
                if (err && err.length > 0) {
                    const validations = $('#object-validation-errors');
                    validations.empty();
                    // These are the failed validations
                    const list = $('<ul>');
                    list.appendTo(validations);
                    err.forEach(validation => {
                        $('<li>' + validation.message + '</li>').appendTo(list);
                    });
                } else {
                    if (this.editObjectSaveFunction) {
                        this.editObjectSaveFunction(formData, this.schemaId);
                    }
                    $('#edit-object-form').modal('hide');
                }
            });
        };
    }

    handleObjectEditorCancel() {
        return () => {
            if (this.editObjectCancelFunction) {
                this.editObjectCancelFunction();
            }
            $('#edit-object-form').modal('hide');
        };
    }

    convertFormToJson() {
        const formData = this.editObjectForm.alpaca().getValue();
        const schema = this.schemasModel.getSchema(this.schemaId);
        const jsonData = {};
        // Perform conversions
        ObjectEditor.convertData(formData, jsonData, schema.schema);
        return jsonData;
    }

    static convertData(sourceData, targetData, schema) {
        schema.properties.forEach((property, key) => {
            switch (property.type) {
            case 'boolean':
                if (typeof sourceData[key] === 'boolean') {
                    targetData[key] = sourceData[key];
                } else if (typeof sourceData[key] === 'string') {
                    targetData[key] = sourceData[key] === 'true';
                } else {
                    targetData[key] = sourceData[key];
                }
                break;
            case 'integer':
                if (typeof sourceData[key] === 'number') {
                    targetData[key] = sourceData[key];
                } else if (typeof sourceData[key] === 'string') {
                    targetData[key] = parseInt(sourceData[key], 10);
                } else {
                    targetData[key] = sourceData[key];
                }
                break;
            case 'array':
                targetData[key] = [];
                if (typeof sourceData[key] === 'string') {
                    targetData[key] = sourceData[key].split(',').map(key => key.trim());
                } else {
                    let obj;
                    sourceData[key].forEach(data => {
                        obj = {};
                        targetData[key].push(obj);
                        ObjectEditor.convertData(data, obj, schema.properties[key].items);
                    });
                }
                break;
            case 'object':
                targetData[key] = {};
                if (Array.isArray(sourceData[key])) {
                    sourceData[key].forEach(data => {
                        targetData[key][data.name] = data.value;
                    });
                } else {
                    ObjectEditor.convertData(sourceData[key], targetData[key], schema.properties[key]);
                }
                break;
            default:
                targetData[key] = sourceData[key];
            }
        });
    }
}
