import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'spui-spark-pipeline-ui-lib',
  templateUrl: './spark-pipeline-ui-lib.component.html',
  styleUrls: [
            '../public/css/joint.css',
            '../public/css/bootstrap.min.css',
            '../public/css/bootstrap-drawer.min.css',
            '../public/css/bootstrap-tokenfield.css',
            '../public/css/alpaca.min.css',
            '../public/css/app.css'
          ]
})
export class SparkPipelineUiLibComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    this.appendScriptTags();
  }

  appendScriptTags() {
    const paths = [
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/jquery-3.3.1.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/jquery.fittext.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/lodash/4.17.11/lodash.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/backbone/1.3.3/backbone.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/dagre/latest/dagre.min.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/graphlib/latest/graphlib.min.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/joint/2.2.1/joint.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/handlebars/4.0.5/handlebars.min.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/bootstrap/3.4.1/bootstrap.min.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/bootstrap/typeahead/typeahead.bundle.min.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/bootstrap/drawer/drawer.min.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/bootstrap/tokenfield/0.12.1/bootstrap-tokenfield.min.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/alpacajs/1.5.24/alpaca.min.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/applications-model.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/steps-model.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/pipelines-model.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/schemas-model.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/services.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/add-step-dialog.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/alert-dialog.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/clear-form-dialog.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/code-editor-dialog.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/copy-pipeline-dialog.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/new-dialog.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/object-editor-dialog.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/validation-error-dialog.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/steps-editor.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/pipeline-editor.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/globals-editor.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/class-override-editor.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/graph-editor.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/application-editor.js',
      'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/app.js',
    ];
    const sTag = this.renderer2.createElement('script');
    sTag.type = 'text/javascript';
    sTag.charset = 'utf-8';
    sTag.src = 'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080/libraries/aceeditor/1.4.3/ace.js';
    this.document.body.appendChild(sTag);
    console.log('Renderer:', this.renderer2);
    paths.forEach(path => {
      const tag = this.renderer2.createElement('script');
      tag.src = path;
      this.document.body.appendChild(tag);
    });
  }
}
