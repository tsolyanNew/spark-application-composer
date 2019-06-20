import { NgModule } from '@angular/core';
import { SparkPipelineUiLibComponent } from './spark-pipeline-ui-lib.component';
import { StepEditorComponent } from './step-editor/step-editor.component';
import { StepDetailsComponent } from './step-editor/step-details/step-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SparkPipelineUiLibComponent, StepEditorComponent, StepDetailsComponent],
  imports: [ HttpClientModule ],
  exports: [SparkPipelineUiLibComponent, HttpClientModule]
})
export class SparkPipelineUiLibModule { }
