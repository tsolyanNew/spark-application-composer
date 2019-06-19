import { StepsModel } from 'steps-model';
import { PipelinesModel } from 'pipelines-model';
import { ApplicationsModel } from 'applications-model';
import { SchemasModel } from 'schemas-model';

export class Service {
    constructor(){
        this.stepsModel = new StepsModel();
        this.pipelinesModel = new PipelinesModel();
        this.applicationsModel = new ApplicationsModel();
        this.schemasModel = new SchemasModel();
    }

    loadSteps(callback) {
        $.getJSON('/api/v1/steps')
            .done(data => {
                const steps = [];
                data.steps.forEach(step => {
                    delete step._id;
                    steps.push(step);
                });
                this.stepsModel.setSteps(steps);
                callback(data.steps);
            });
    }

    loadPipelines(callback) {
        $.getJSON('/api/v1/pipelines')
            .done(data => {
                this.pipelinesModel.setPipelines(data.pipelines);
                callback(data.pipelines);
            });
    }

    loadApplications(callback) {
        $.getJSON('/api/v1/applications')
            .done(data => {
                this.applicationsModel.setApplications(data.applications);
                callback(data.applications);
            });
    }

    saveApplication(application, callback) {
        let type = 'POST';
        let url = '/api/v1/applications/';
        if (application.id) {
            type = 'PUT';
            url = '/api/v1/applications/' + application.id;
        }
        $.ajax({
            type: type,
            url: url,
            contentType: 'application/json',
            data: JSON.stringify(application),
            success: data => {
                callback(null, data);
            },
            error: (req, status, error) => {
                callback({status: status, error: error, response: req.responseJSON});
            }
        });
    }

    savePipeline(pipeline, callback) {
        let type = 'POST';
        let url = '/api/v1/pipelines/';
        if (pipeline.id) {
            type = 'PUT';
            url = '/api/v1/pipelines/' + pipeline.id;
        }
        $.ajax({
            type: type,
            url: url,
            contentType: 'application/json',
            data: JSON.stringify(pipeline),
            success: data => {
                callback(null, data);
            },
            error: (req, status, error) => {
                callback({status: status, error: error, response: req.responseJSON});
            }
        });
    }

    deletePipeline(id, callback) {
        $.ajax({
            type: 'DELETE',
            url: '/api/v1/pipelines/' + id,
            success: data => {
                callback(null, data);
            },
            error: (req, status, error) => {
                callback({status: status, error: error, response: req.responseJSON});
            }
        });
    }

    saveBulkSteps(steps, callback) {
        if (steps && typeof steps === 'object') {
            steps = JSON.stringify(steps);
        }
        $.ajax({
            type: 'POST',
            url: '/api/v1/steps/',
            contentType: 'application/json',
            data: steps,
            success: data => {
                callback(null, data);
            },
            error: (req, status, error) => {
                callback({status: status, error: error, response: req.responseJSON});
            }
        });
    }

    saveStep(step, callback) {
        let type = 'POST';
        let url = '/api/v1/steps/';
        if (step.id) {
            type = 'PUT';
            url = '/api/v1/steps/' + step.id;
        }
        $.ajax({
            type: type,
            url: url,
            contentType: 'application/json',
            data: JSON.stringify(step),
            success: data => {
                callback(null, data);
            },
            error: (req, status, error) => {
                callback({status: status, error: error, response: req.responseJSON});
            }
        });
    }

    loadSchemas(callback) {
        $.getJSON('/api/v1/package-objects')
            .done(data => {
                this.schemasModel.setSchemas(data['package-objects']);
                if (callback) {
                    callback();
                }
            });
    }

    saveSchemas(schemas, callback) {
        if (schemas && typeof schemas === 'object') {
            schemas = JSON.stringify(schemas);
        }
        $.ajax({
            type: 'POST',
            url: '/api/v1/package-objects/',
            contentType: 'application/json',
            data: schemas,
            success: data =>  {
                callback(null, data);
            },
            error: (req, status, error) => {
                callback({status: status, error: error, response: req.responseJSON});
            }
        });
    }

    validateObject(schemaId, obj, callback) {
        if (obj && typeof obj === 'object') {
            obj = JSON.stringify(obj);
        }
        $.ajax({
            type: 'PATCH',
            url: '/api/v1/package-objects/' + schemaId + '/validate-object',
            contentType: 'application/json',
            data: obj,
            success: data => {
                callback(null, data);
            },
            error: req => {
                callback(req.responseJSON.error);
            }
        });
    }

}
