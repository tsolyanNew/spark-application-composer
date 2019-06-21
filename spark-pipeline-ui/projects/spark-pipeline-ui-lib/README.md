# Spark Pipeline Ui (spui)

Angular2 based application mainly used to create, update, delete Spark Pipelines visually.

For more information about Spark Pipelines go to [Spark-Application-Composer](https://github.com/dafreels/spark-application-composer/blob/master/README.md)

## Installation

The latest release of spui can be installed from npm

`npm install --save ng-spui`

### Getting started

Setup `Spark Pipelines UI` in your project

```ts
// can always find spui in node_modules
// ====================================

'node_modules/ng-spui'

// How to embeed in Latest Angular Apps
// =====================================

// app.module.ts
import { SparkPipelineUiLibModule }  from 'ng-spui';
@NgModule({
  imports: [
    ...,
    SparkPipelineUiLibModule,
  ],
  ...
})
export class AppModule { }

// Use spui-spark-pipeline-ui-lib tag to inject inside template(.html)
`<spui-spark-pipeline-ui-lib></spui-spark-pipeline-ui-lib>`

```
