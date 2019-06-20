export const steps = {
    "steps": [
      {
        "_id": "5ca61396162b3a9e8433ca3c",
        "id": "3806f23b-478c-4054-b6c1-37f11db58d38",
        "displayName": "Read a DataFrame from Hive",
        "description": "This step will read a dataFrame in a given format from Hive",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "table",
            "required": false
          },
          {
            "type": "object",
            "name": "options",
            "required": false,
            "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
          }
        ],
        "engineMeta": {
          "spark": "HiveSteps.readDataFrame",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.857Z",
        "modifiedDate": "2019-06-19T14:22:44.912Z"
      },
      {
        "_id": "5ca61396162b3a331133ca3d",
        "id": "e2b4c011-e71b-46f9-a8be-cf937abc2ec4",
        "displayName": "Write DataFrame to Hive",
        "description": "This step will write a dataFrame in a given format to Hive",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "table",
            "required": false
          },
          {
            "type": "object",
            "name": "options",
            "required": false,
            "className": "com.acxiom.pipeline.steps.DataFrameWriterOptions"
          }
        ],
        "engineMeta": {
          "spark": "HiveSteps.writeDataFrame",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.869Z",
        "modifiedDate": "2019-06-19T14:22:44.918Z"
      },
      {
        "_id": "5ca61396162b3abdd433ca3e",
        "id": "87db259d-606e-46eb-b723-82923349640f",
        "displayName": "Load DataFrame from HDFS path",
        "description": "This step will read a dataFrame from the given HDFS path",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "path",
            "required": false
          },
          {
            "type": "object",
            "name": "options",
            "required": false,
            "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
          }
        ],
        "engineMeta": {
          "spark": "HDFSSteps.readFromPath",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.875Z",
        "modifiedDate": "2019-06-19T14:22:44.923Z"
      },
      {
        "_id": "5ca61396162b3a7d6b33ca3f",
        "id": "8daea683-ecde-44ce-988e-41630d251cb8",
        "displayName": "Load DataFrame from HDFS paths",
        "description": "This step will read a dataFrame from the given HDFS paths",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "paths",
            "required": false
          },
          {
            "type": "object",
            "name": "options",
            "required": false,
            "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
          }
        ],
        "engineMeta": {
          "spark": "HDFSSteps.readFromPaths",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.882Z",
        "modifiedDate": "2019-06-19T14:22:44.928Z"
      },
      {
        "_id": "5ca61396162b3a083833ca40",
        "id": "0a296858-e8b7-43dd-9f55-88d00a7cd8fa",
        "displayName": "Write DataFrame to HDFS",
        "description": "This step will write a dataFrame in a given format to HDFS",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "path",
            "required": false
          },
          {
            "type": "object",
            "name": "options",
            "required": false,
            "className": "com.acxiom.pipeline.steps.DataFrameWriterOptions"
          }
        ],
        "engineMeta": {
          "spark": "HDFSSteps.writeToPath",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.889Z",
        "modifiedDate": "2019-06-19T14:22:44.934Z"
      },
      {
        "_id": "5ca61396162b3ab36933ca41",
        "id": "a7e17c9d-6956-4be0-a602-5b5db4d1c08b",
        "displayName": "Scala script Step",
        "description": "Executes a script and returns the result",
        "type": "Pipeline",
        "category": "Scripting",
        "params": [
          {
            "type": "script",
            "name": "script",
            "required": false,
            "language": "scala"
          }
        ],
        "engineMeta": {
          "spark": "ScalaSteps.processScript",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.895Z",
        "modifiedDate": "2019-06-19T14:22:44.944Z"
      },
      {
        "_id": "5ca61396162b3ab0cd33ca42",
        "id": "8bf8cef6-cf32-4d85-99f4-e4687a142f84",
        "displayName": "Scala script Step with additional object provided",
        "description": "Executes a script with the provided object and returns the result",
        "type": "Pipeline",
        "category": "Scripting",
        "params": [
          {
            "type": "script",
            "name": "script",
            "required": false,
            "language": "scala"
          },
          {
            "type": "text",
            "name": "value",
            "required": false
          },
          {
            "type": "text",
            "name": "type",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "ScalaSteps.processScriptWithValue",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.901Z",
        "modifiedDate": "2019-06-19T14:22:44.951Z"
      },
      {
        "_id": "5ca61396162b3a6a9533ca43",
        "id": "cdb332e3-9ea4-4c96-8b29-c1d74287656c",
        "displayName": "Load table as DataFrame using JDBCOptions",
        "description": "This step will load a table from the provided JDBCOptions",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "jdbcOptions",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "JDBCSteps.readWithJDBCOptions",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.908Z",
        "modifiedDate": "2019-06-19T14:22:44.956Z"
      },
      {
        "_id": "5ca61396162b3a4ab533ca44",
        "id": "72dbbfc8-bd1d-4ce4-ab35-28fa8385ea54",
        "displayName": "Load table as DataFrame using StepOptions",
        "description": "This step will load a table from the provided JDBCDataFrameReaderOptions",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "object",
            "name": "jDBCStepsOptions",
            "required": false,
            "className": "com.acxiom.pipeline.steps.JDBCDataFrameReaderOptions"
          }
        ],
        "engineMeta": {
          "spark": "JDBCSteps.readWithStepOptions",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.915Z",
        "modifiedDate": "2019-06-19T14:22:44.960Z"
      },
      {
        "_id": "5ca61396162b3a7ef033ca45",
        "id": "dcc57409-eb91-48c0-975b-ca109ba30195",
        "displayName": "Load table as DataFrame",
        "description": "This step will load a table from the provided jdbc information",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "url",
            "required": false
          },
          {
            "type": "text",
            "name": "table",
            "required": false
          },
          {
            "type": "text",
            "name": "predicates",
            "required": false
          },
          {
            "type": "text",
            "name": "connectionProperties",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "JDBCSteps.readWithProperties",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.921Z",
        "modifiedDate": "2019-06-19T14:22:44.965Z"
      },
      {
        "_id": "5ca61396162b3a7ea833ca46",
        "id": "c9fddf52-34b1-4216-a049-10c33ccd24ab",
        "displayName": "Write DataFrame to table using JDBCOptions",
        "description": "This step will write a DataFrame as a table using JDBCOptions",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "jdbcOptions",
            "required": false
          },
          {
            "type": "text",
            "name": "saveMode",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "JDBCSteps.writeWithJDBCOptions",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.929Z",
        "modifiedDate": "2019-06-19T14:22:44.970Z"
      },
      {
        "_id": "5ca61396162b3a0f7a33ca47",
        "id": "77ffcd02-fbd0-4f79-9b35-ac9dc5fb7190",
        "displayName": "Write DataFrame to table",
        "description": "This step will write a DataFrame to a table using the provided properties",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "url",
            "required": false
          },
          {
            "type": "text",
            "name": "table",
            "required": false
          },
          {
            "type": "text",
            "name": "connectionProperties",
            "required": false
          },
          {
            "type": "text",
            "name": "saveMode",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "JDBCSteps.writeWithProperties",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.935Z",
        "modifiedDate": "2019-06-19T14:22:44.974Z"
      },
      {
        "_id": "5ca61396162b3a056333ca48",
        "id": "3d6b77a1-52c2-49ba-99a0-7ec773dac696",
        "displayName": "Write DataFrame to JDBC table",
        "description": "This step will write a DataFrame to a table using the provided JDBCDataFrameWriterOptions",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "jDBCStepsOptions",
            "required": false,
            "className": "com.acxiom.pipeline.steps.JDBCDataFrameWriterOptions"
          }
        ],
        "engineMeta": {
          "spark": "JDBCSteps.writeWithStepOptions",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.943Z",
        "modifiedDate": "2019-06-19T14:22:44.979Z"
      },
      {
        "_id": "5ca61396162b3aa2c333ca49",
        "id": "219c787a-f502-4efc-b15d-5beeff661fc0",
        "displayName": "Map a DataFrame to an existing DataFrame",
        "description": "This step maps a new dataframe to an existing dataframe to make them compatible",
        "type": "Pipeline",
        "category": "Transforms",
        "params": [
          {
            "type": "text",
            "name": "inputDataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "destinationDataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "transforms",
            "required": false,
            "className": "com.acxiom.pipeline.steps.Transformations"
          },
          {
            "type": "boolean",
            "name": "addNewColumns",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "TransformationSteps.mapToDestinationDataFrame",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.950Z",
        "modifiedDate": "2019-06-19T14:22:44.983Z"
      },
      {
        "_id": "5ca61396162b3a289b33ca4a",
        "id": "8f9c08ea-4882-4265-bac7-2da3e942758f",
        "displayName": "Map a DataFrame to a pre-defined Schema",
        "description": "This step maps a new dataframe to a pre-defined spark schema",
        "type": "Pipeline",
        "category": "Transforms",
        "params": [
          {
            "type": "text",
            "name": "inputDataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "destinationSchema",
            "required": false,
            "className": "com.acxiom.pipeline.steps.Schema"
          },
          {
            "type": "object",
            "name": "transforms",
            "required": false,
            "className": "com.acxiom.pipeline.steps.Transformations"
          },
          {
            "type": "boolean",
            "name": "addNewColumns",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "TransformationSteps.mapDataFrameToSchema",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.956Z",
        "modifiedDate": "2019-06-19T14:22:44.988Z"
      },
      {
        "_id": "5ca61396162b3a25db33ca4b",
        "id": "3ee74590-9131-43e1-8ee8-ad320482a592",
        "displayName": "Merge a DataFrame to an existing DataFrame",
        "description": "This step merges two dataframes to create a single dataframe",
        "type": "Pipeline",
        "category": "Transforms",
        "params": [
          {
            "type": "text",
            "name": "inputDataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "destinationDataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "transforms",
            "required": false,
            "className": "com.acxiom.pipeline.steps.Transformations"
          },
          {
            "type": "boolean",
            "name": "addNewColumns",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "TransformationSteps.mergeDataFrames",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.963Z",
        "modifiedDate": "2019-06-19T14:22:44.994Z"
      },
      {
        "_id": "5ca61396162b3adc5e33ca4c",
        "id": "ac3dafe4-e6ee-45c9-8fc6-fa7f918cf4f2",
        "displayName": "Modify or Create Columns using Transforms Provided",
        "description": "This step transforms existing columns and/or adds new columns to an existing dataframe using expressions provided",
        "type": "Pipeline",
        "category": "Transforms",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "transforms",
            "required": false,
            "className": "com.acxiom.pipeline.steps.Transformations"
          }
        ],
        "engineMeta": {
          "spark": "TransformationSteps.applyTransforms",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.969Z",
        "modifiedDate": "2019-06-19T14:22:44.998Z"
      },
      {
        "_id": "5ca61396162b3a496933ca4d",
        "id": "fa0fcabb-d000-4a5e-9144-692bca618ddb",
        "displayName": "Filter a DataFrame",
        "description": "This step will filter a dataframe based on the where expression provided",
        "type": "Pipeline",
        "category": "Transforms",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "expression",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "TransformationSteps.applyFilter",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.976Z",
        "modifiedDate": "2019-06-19T14:22:45.003Z"
      },
      {
        "_id": "5ca61396162b3a47f333ca4e",
        "id": "a981080d-714c-4d36-8b09-d95842ec5655",
        "displayName": "Standardize Column Names on a DataFrame",
        "description": "This step will standardize columns names on existing dataframe",
        "type": "Pipeline",
        "category": "Transforms",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "TransformationSteps.standardizeColumnNames",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.983Z",
        "modifiedDate": "2019-06-19T14:22:45.007Z"
      },
      {
        "_id": "5ca61396162b3aaa0533ca4f",
        "id": "541c4f7d-3524-4d53-bbd9-9f2cfd9d1bd1",
        "displayName": "Save a Dataframe to a TempView",
        "description": "This step stores an existing dataframe to a TempView to be used in future queries in the session",
        "type": "Pipeline",
        "category": "Query",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "viewName",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "QuerySteps.dataFrameToTempView",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.989Z",
        "modifiedDate": "2019-06-19T14:22:45.012Z"
      },
      {
        "_id": "5ca61396162b3a38ec33ca50",
        "id": "71b71ef3-eaa7-4a1f-b3f3-603a1a54846d",
        "displayName": "Create a TempView from a Query",
        "description": "This step runs a SQL statement against existing TempViews from this session and returns a new TempView",
        "type": "Pipeline",
        "category": "Query",
        "params": [
          {
            "type": "script",
            "name": "query",
            "required": false,
            "language": "sql"
          },
          {
            "type": "text",
            "name": "variableMap",
            "required": false
          },
          {
            "type": "text",
            "name": "viewName",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "QuerySteps.queryToTempView",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:22.996Z",
        "modifiedDate": "2019-06-19T14:22:45.016Z"
      },
      {
        "_id": "5ca61397162b3ac12233ca51",
        "id": "61378ed6-8a4f-4e6d-9c92-6863c9503a54",
        "displayName": "Create a DataFrame from a Query",
        "description": "This step runs a SQL statement against existing TempViews from this session and returns a new DataFrame",
        "type": "Pipeline",
        "category": "Query",
        "params": [
          {
            "type": "script",
            "name": "query",
            "required": false,
            "language": "sql"
          },
          {
            "type": "text",
            "name": "variableMap",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "QuerySteps.queryToDataFrame",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:23.002Z",
        "modifiedDate": "2019-06-19T14:22:45.021Z"
      },
      {
        "_id": "5ca61397162b3ab1b333ca52",
        "id": "57b0e491-e09b-4428-aab2-cebe1f217eda",
        "displayName": "Create a DataFrame from an Existing TempView",
        "description": "This step pulls an existing TempView from this session into a new DataFrame",
        "type": "Pipeline",
        "category": "Query",
        "params": [
          {
            "type": "text",
            "name": "viewName",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "QuerySteps.tempViewToDataFrame",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:23.009Z",
        "modifiedDate": "2019-06-19T14:22:45.025Z"
      },
      {
        "_id": "5ca61397162b3ada9033ca53",
        "id": "648f27aa-6e3b-44ed-a093-bc284783731b",
        "displayName": "Create a TempView from a DataFrame Query",
        "description": "This step runs a SQL statement against an existing DataFrame from this session and returns a new TempView",
        "type": "Pipeline",
        "category": "Query",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "script",
            "name": "query",
            "required": false,
            "language": "sql"
          },
          {
            "type": "text",
            "name": "variableMap",
            "required": false
          },
          {
            "type": "text",
            "name": "inputViewName",
            "required": false
          },
          {
            "type": "text",
            "name": "outputViewName",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "QuerySteps.dataFrameQueryToTempView",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:23.017Z",
        "modifiedDate": "2019-06-19T14:22:45.029Z"
      },
      {
        "_id": "5ca61397162b3a508c33ca54",
        "id": "dfb8a387-6245-4b1c-ae6c-94067eb83962",
        "displayName": "Create a DataFrame from a DataFrame Query",
        "description": "This step runs a SQL statement against an existing DataFrame from this session and returns a new DataFrame",
        "type": "Pipeline",
        "category": "Query",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "script",
            "name": "query",
            "required": false,
            "language": "sql"
          },
          {
            "type": "text",
            "name": "variableMap",
            "required": false
          },
          {
            "type": "text",
            "name": "inputViewName",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "QuerySteps.dataFrameQueryToDataFrame",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:23.027Z",
        "modifiedDate": "2019-06-19T14:22:45.034Z"
      },
      {
        "_id": "5ca61397162b3a5fd433ca55",
        "id": "c88de095-14e0-4c67-8537-0325127e2bd2",
        "displayName": "Cache an exising TempView",
        "description": "This step will cache an existing TempView",
        "type": "Pipeline",
        "category": "Query",
        "params": [
          {
            "type": "text",
            "name": "viewName",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "QuerySteps.cacheTempView",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:23.033Z",
        "modifiedDate": "2019-06-19T14:22:45.038Z"
      },
      {
        "_id": "5ca61397162b3a450433ca56",
        "id": "22fcc0e7-0190-461c-a999-9116b77d5919",
        "displayName": "Build a DataFrameReader Object",
        "description": "This step will build a DataFrameReader object that can be used to read a file into a dataframe",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "object",
            "name": "dataFrameReaderOptions",
            "required": false,
            "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
          }
        ],
        "engineMeta": {
          "spark": "DataFrameSteps.getDataFrameReader",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:23.040Z",
        "modifiedDate": "2019-06-19T14:22:45.076Z"
      },
      {
        "_id": "5ca61397162b3afcaa33ca57",
        "id": "e023fc14-6cb7-44cb-afce-7de01d5cdf00",
        "displayName": "Build a DataFrameWriter Object",
        "description": "This step will build a DataFrameWriter object that can be used to write a file into a dataframe",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "options",
            "required": false,
            "className": "com.acxiom.pipeline.steps.DataFrameWriterOptions"
          }
        ],
        "engineMeta": {
          "spark": "DataFrameSteps.getDataFrameWriter",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:23.046Z",
        "modifiedDate": "2019-06-19T14:22:45.081Z"
      },
      {
        "_id": "5ca61397162b3a195233ca58",
        "id": "5e0358a0-d567-5508-af61-c35a69286e4e",
        "displayName": "Javascript Step",
        "description": "Executes a script and returns the result",
        "type": "Pipeline",
        "category": "Scripting",
        "params": [
          {
            "type": "script",
            "name": "script",
            "required": false,
            "language": "javascript"
          }
        ],
        "engineMeta": {
          "spark": "JavascriptSteps.processScript",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:23.818Z",
        "modifiedDate": "2019-06-19T14:22:45.086Z"
      },
      {
        "_id": "5ca61397162b3aa5ed33ca59",
        "id": "570c9a80-8bd1-5f0c-9ae0-605921fe51e2",
        "displayName": "Javascript Step with additional object provided",
        "description": "Executes a script and returns the result",
        "type": "Pipeline",
        "category": "Scripting",
        "params": [
          {
            "type": "script",
            "name": "script",
            "required": false,
            "language": "javascript"
          },
          {
            "type": "text",
            "name": "value",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "JavascriptSteps.processScriptWithValue",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-04-04T14:24:23.824Z",
        "modifiedDate": "2019-06-19T14:22:45.091Z"
      },
      {
        "_id": "5ced83f48c5e447861933eb3",
        "id": "e4dad367-a506-5afd-86c0-82c2cf5cd15c",
        "displayName": "Create HDFS FileManager",
        "description": "Simple function to generate the HDFSFileManager for the local HDFS file system",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          
        ],
        "engineMeta": {
          "spark": "HDFSSteps.createFileManager",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-05-28T18:54:44.836Z",
        "modifiedDate": "2019-06-19T14:22:44.938Z"
      },
      {
        "_id": "5ced83f48c5e44b787933eb4",
        "id": "0342654c-2722-56fe-ba22-e342169545af",
        "displayName": "Copy source contents to destination",
        "description": "Copy the contents of the source path to the destination path. This function will call connect on both FileManagers.",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "srcFS",
            "required": false
          },
          {
            "type": "text",
            "name": "srcPath",
            "required": false
          },
          {
            "type": "text",
            "name": "destFS",
            "required": false
          },
          {
            "type": "text",
            "name": "destPath",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileManagerSteps.copy",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-05-28T18:54:44.874Z",
        "modifiedDate": "2019-06-19T14:22:45.043Z"
      },
      {
        "_id": "5ced83f48c5e442d11933eb5",
        "id": "c40169a3-1e77-51ab-9e0a-3f24fb98beef",
        "displayName": "Copy source contents to destination with buffering",
        "description": "Copy the contents of the source path to the destination path using buffer sizes. This function will call connect on both FileManagers.",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "srcFS",
            "required": false
          },
          {
            "type": "text",
            "name": "srcPath",
            "required": false
          },
          {
            "type": "text",
            "name": "destFS",
            "required": false
          },
          {
            "type": "text",
            "name": "destPath",
            "required": false
          },
          {
            "type": "text",
            "name": "inputBufferSize",
            "required": false
          },
          {
            "type": "text",
            "name": "outputBufferSize",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileManagerSteps.copy",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-05-28T18:54:44.879Z",
        "modifiedDate": "2019-06-19T14:22:45.054Z"
      },
      {
        "_id": "5ced83f48c5e445458933eb6",
        "id": "f5a24db0-e91b-5c88-8e67-ab5cff09c883",
        "displayName": "Buffered file copy",
        "description": "Copy the contents of the source path to the destination path using full buffer sizes. This function will call connect on both FileManagers.",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "srcFS",
            "required": false
          },
          {
            "type": "text",
            "name": "srcPath",
            "required": false
          },
          {
            "type": "text",
            "name": "destFS",
            "required": false
          },
          {
            "type": "text",
            "name": "destPath",
            "required": false
          },
          {
            "type": "text",
            "name": "inputBufferSize",
            "required": false
          },
          {
            "type": "text",
            "name": "outputBufferSize",
            "required": false
          },
          {
            "type": "text",
            "name": "copyBufferSize",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileManagerSteps.copy",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-05-28T18:54:44.883Z",
        "modifiedDate": "2019-06-19T14:22:45.060Z"
      },
      {
        "_id": "5ced83f48c5e44c858933eb7",
        "id": "3d1e8519-690c-55f0-bd05-1e7b97fb6633",
        "displayName": "Disconnect a FileManager",
        "description": "Disconnects a FileManager from the underlying file system",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "fileManager",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileManagerSteps.disconnectFileManager",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-05-28T18:54:44.887Z",
        "modifiedDate": "2019-06-19T14:22:45.065Z"
      },
      {
        "_id": "5ced87c37b60af0d9e1ffd3d",
        "id": "9d467cb0-8b3d-40a0-9ccd-9cf8c5b6cb38",
        "displayName": "Create SFTP FileManager",
        "description": "Simple function to generate the SFTPFileManager for the remote SFTP file system",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "hostName",
            "required": false
          },
          {
            "type": "text",
            "name": "username",
            "required": false
          },
          {
            "type": "text",
            "name": "password",
            "required": false
          },
          {
            "type": "text",
            "name": "port",
            "required": false
          },
          {
            "type": "boolean",
            "name": "strictHostChecking",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "SFTPSteps.createFileManager",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-05-28T19:10:59.281Z",
        "modifiedDate": "2019-06-19T14:22:45.070Z"
      },
      {
        "_id": "5cf144e47b60af6d9d1ffd3f",
        "id": "52bc0c90-64cc-4a2e-b389-350e08c3aadc",
        "displayName": "Custom Step to Compile Research Results",
        "description": "This step compiles results from a copy step to be enhanced and written to disk",
        "type": "Pipeline",
        "category": "EdsStuff",
        "params": [
          {
            "type": "object",
            "name": "results",
            "required": false,
            "className": "com.acxiom.pipeline.steps.CopyResults"
          }
        ],
        "engineMeta": {
          "spark": "EdSteps.writeResultsToFile",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-05-31T15:14:44.481Z",
        "modifiedDate": "2019-05-31T16:19:41.331Z"
      },
      {
        "_id": "5cf583ac8c5e442129933ebb",
        "id": "fa4803a1-e705-4cc8-988e-ba981f4335cd",
        "displayName": "Custom Step to Compile Parquet Research Results",
        "description": "This step compiles results from a copy step to be enhanced and written to disk",
        "type": "Pipeline",
        "category": "EdsStuff",
        "params": [
          {
            "type": "object",
            "name": "results",
            "required": false,
            "className": "com.acxiom.pipeline.steps.CopyResults"
          },
          {
            "type": "object",
            "name": "dlResults",
            "required": false,
            "className": "com.acxiom.pipeline.steps.CopyResults"
          }
        ],
        "engineMeta": {
          "spark": "EdSteps.writeParquetResultsToFile",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-06-03T20:31:40.563Z",
        "modifiedDate": "2019-06-07T00:03:22.701Z"
      },
      {
        "_id": "5cf583ac8c5e441c88933ebc",
        "id": "ea4ffd1e-0066-4bde-9c92-1e34db61b9b3",
        "displayName": "Custom Step to Split Dataframe Based on Input Size",
        "description": "This step re-splits dataframe based on file size to get close to 128M per split",
        "type": "Pipeline",
        "category": "EdsStuff",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "hdfsFM",
            "required": false
          },
          {
            "type": "text",
            "name": "path",
            "required": false
          },
          {
            "type": "text",
            "name": "splitMode",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "EdSteps.splitDataFrameOnFileSize",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-06-03T20:31:40.580Z",
        "modifiedDate": "2019-06-03T20:31:40.580Z"
      },
      {
        "_id": "5cf585368c5e44b091933ebd",
        "id": "6fefd9f0-4c20-47e7-a655-ad203683d9c3",
        "displayName": "Custom Write a DataFrame to Parquet DataStore with Metrics",
        "description": "This step will write a dataFrame to a Parquet data store and return run time metrics",
        "type": "Pipeline",
        "category": "EdsStuff",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "hdfsFileManager",
            "required": false
          },
          {
            "type": "text",
            "name": "path",
            "required": false
          },
          {
            "type": "text",
            "name": "splitMode",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "EdSteps.writeToParquet",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-06-03T20:38:14.661Z",
        "modifiedDate": "2019-06-03T20:39:02.547Z"
      },
      {
        "_id": "5cf6ca5a7b60afa0b91ffd40",
        "id": "37e10488-02c1-5c85-b47a-efecf681fdd4",
        "displayName": "Add a Column with a Static Value to All Rows in a DataFrame",
        "description": "This step will add a column with a static value to all rows in the provided data frame",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "columnName",
            "required": false
          },
          {
            "type": "text",
            "name": "columnValue",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.addStaticColumn",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.013Z",
        "modifiedDate": "2019-06-19T14:23:15.668Z"
      },
      {
        "_id": "5cf6ca5a7b60af222a1ffd41",
        "id": "9f7d84b0-ebab-57da-8b39-be4c47028242",
        "displayName": "Adds a Unique Identifier to a DataFrame",
        "description": "This step will add a new unique identifier to an existing data frame",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "idColumnName",
            "required": false
          },
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.prependUniqueId",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.021Z",
        "modifiedDate": "2019-06-19T14:23:15.672Z"
      },
      {
        "_id": "5cf6ca5a7b60af302e1ffd42",
        "id": "8df297f4-b7e5-4c8f-a0af-8ce31aa228c7",
        "displayName": "Combine Two Lists into One",
        "description": "This step will merge two lists creating a single list with all values",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "list1",
            "required": false
          },
          {
            "type": "text",
            "name": "list2",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.combineTwoLists",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.028Z",
        "modifiedDate": "2019-06-19T14:23:15.677Z"
      },
      {
        "_id": "5cf6ca5a7b60af45911ffd43",
        "id": "3afc232a-17da-5ad7-8d50-dc2c749fcae2",
        "displayName": "Drop a Column from an Existing DataFrame",
        "description": "This step will drop an existing column from the provided data frame",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "columnNamesToRemove",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.dropColumns",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.035Z",
        "modifiedDate": "2019-06-19T14:23:15.682Z"
      },
      {
        "_id": "5cf6ca5a7b60af9f151ffd44",
        "id": "3a61e495-09ed-4f3a-89f3-e77ad70079aa",
        "displayName": "Load a DataAsset and Filter by Collection Id",
        "description": "This step will create a data frame from a data asset selecting on the collection id provided",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "assetId",
            "required": false
          },
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.loadDataAssetByCollectionId",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.041Z",
        "modifiedDate": "2019-06-19T14:23:15.687Z"
      },
      {
        "_id": "5cf6ca5a7b60af25ae1ffd45",
        "id": "3b860e74-1c56-5019-905a-864b4afaa018",
        "displayName": "Load a DataAsset into a New DataFrame",
        "description": "This step will create a data frame from an existing data asset",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.loadDataFrameFromDataAsset",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.046Z",
        "modifiedDate": "2019-06-19T14:23:15.692Z"
      },
      {
        "_id": "5cf6ca5a7b60af50531ffd46",
        "id": "4c8cb4d9-51db-4b7f-b199-7b13559ecf8d",
        "displayName": "Writes a DataFrame to an Existing DataAsset",
        "description": "This step maps and writes a dataframe to an existing data asset",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "feed",
            "required": false
          },
          {
            "type": "integer",
            "name": "optimalSplitSizeMB",
            "required": false
          },
          {
            "type": "text",
            "name": "mergeStrategyOverride",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.writeDataFrameToDataAsset",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.052Z",
        "modifiedDate": "2019-06-19T14:23:15.696Z"
      },
      {
        "_id": "5cf6ca5a7b60af007e1ffd47",
        "id": "2fb0cd0d-eead-402c-843b-e88f489a10da",
        "displayName": "Dedup on Key Provided Prioritizing by Sort Rules Provided",
        "description": "This step will dedup an existing data frame on a set of key columns using sort rules to prioritize",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "keyColumns",
            "required": false
          },
          {
            "type": "text",
            "name": "sortRules",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.bestRecordBySort",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.057Z",
        "modifiedDate": "2019-06-19T14:23:15.701Z"
      },
      {
        "_id": "5cf6ca5a7b60af69461ffd48",
        "id": "8a5972ec-03cd-56d3-a97a-07e8e5749e32",
        "displayName": "Create or Modify Existing Schema with String Only Columns from Provided DataFrame",
        "description": "This step will create or modify a String only type schema from the provided data frame",
        "type": "Pipeline",
        "category": "Mapping",
        "params": [
          {
            "type": "text",
            "name": "schema",
            "required": false
          },
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.createNewStringOnlySchema",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.063Z",
        "modifiedDate": "2019-06-19T14:23:15.705Z"
      },
      {
        "_id": "5cf6ca5a7b60aff4aa1ffd49",
        "id": "dd5e07d6-43fa-4652-88ab-b87596db700a",
        "displayName": "Dedup on Key Provided Prioritizing by Sort Rules Provided",
        "description": "This step will dedup an existing data frame on a set of key columns using sort rules to prioritize",
        "type": "Pipeline",
        "category": "Mapping",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.createSchemaFromDataFrame",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.068Z",
        "modifiedDate": "2019-06-19T14:23:15.709Z"
      },
      {
        "_id": "5cf6ca5a7b60af15391ffd4a",
        "id": "521d36d5-83d4-4892-ab62-1a149e0aab52",
        "displayName": "Maps a DataFrame to an Existing Schema without Mappings",
        "description": "This step maps data frame from input schema to destination schema without mappings",
        "type": "Pipeline",
        "category": "Mapping",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "destinationSchema",
            "required": false,
            "className": "com.acxiom.msapi.schema.Schema"
          },
          {
            "type": "boolean",
            "name": "columnIdsOnOutput",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.mapDataToSchema",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.074Z",
        "modifiedDate": "2019-06-19T14:23:15.714Z"
      },
      {
        "_id": "5cf6ca5a7b60af4e0c1ffd4b",
        "id": "30e8bf20-098e-50ad-9975-375acdda9120",
        "displayName": "Maps a DataFrame to an Existing Schema with Mappings",
        "description": "This step maps data frame from input schema to destination schema with mappings/transforms included",
        "type": "Pipeline",
        "category": "Mapping",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "destinationSchema",
            "required": false,
            "className": "com.acxiom.msapi.schema.Schema"
          },
          {
            "type": "boolean",
            "name": "columnIdsOnOutput",
            "required": false
          },
          {
            "type": "text",
            "name": "mappings",
            "required": false
          },
          {
            "type": "text",
            "name": "sparkSteps",
            "required": false
          },
          {
            "type": "text",
            "name": "inputAliasMap",
            "required": false
          },
          {
            "type": "text",
            "name": "metaDataObjectsForMapping",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataSteps.mapData",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.079Z",
        "modifiedDate": "2019-06-19T14:23:15.718Z"
      },
      {
        "_id": "5cf6ca5a7b60af79431ffd4c",
        "id": "7f797630-753f-586d-8836-9b500b00c49f",
        "displayName": "Update Status of an Existing DataCollection",
        "description": "This step will update the status of a data collection by calling the data collection patch endpoint",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "text",
            "name": "status",
            "required": false
          },
          {
            "type": "text",
            "name": "detail",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataCollectionSteps.registerActivity",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.085Z",
        "modifiedDate": "2019-06-19T14:23:15.726Z"
      },
      {
        "_id": "5cf6ca5a7b60af73061ffd4d",
        "id": "1676f21e-f643-4ad7-9dc5-96b89d02338b",
        "displayName": "Retrieve a DataCollection from MS-API by Id",
        "description": "This step will pull a data collection from MS-API by the data asset id",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataCollectionSteps.getDataCollectionById",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.090Z",
        "modifiedDate": "2019-06-19T14:23:15.731Z"
      },
      {
        "_id": "5cf6ca5a7b60af76a21ffd4e",
        "id": "44f04f8e-ce9c-405b-8998-86be2708c76e",
        "displayName": "Update Validation Complete Flag on a DataCollection",
        "description": "This step will update the ValidationComplete flag of a DataCollection in MS-API with the state provided",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          },
          {
            "type": "boolean",
            "name": "completeFlag",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataCollectionSteps.updateValidationCompleteFlag",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.095Z",
        "modifiedDate": "2019-06-19T14:23:15.736Z"
      },
      {
        "_id": "5cf6ca5a7b60af97e51ffd4f",
        "id": "58fd53a1-518a-45ee-95b7-2ba0d6e03f0a",
        "displayName": "Check the Validation Complete Flag on a DataCollection",
        "description": "This step will check the ValidationComplete flag on a data collection in MS-API",
        "type": "Pipeline",
        "category": "Decision",
        "params": [
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          },
          {
            "type": "boolean",
            "name": "failWhenFalse",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataCollectionSteps.verifyValidationComplete",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.101Z",
        "modifiedDate": "2019-06-19T14:23:15.741Z"
      },
      {
        "_id": "5cf6ca5a7b60af22631ffd50",
        "id": "e5ccef51-510f-5a7e-9ed0-402a5808f2f5",
        "displayName": "Retrieve an oAuth Token for MS-API",
        "description": "This step will get an oAuth token that can be used for MS-API authentication",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          
        ],
        "engineMeta": {
          "spark": "ApiSteps.getOAuthToken",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.106Z",
        "modifiedDate": "2019-06-19T14:23:15.746Z"
      },
      {
        "_id": "5cf6ca5a7b60af021b1ffd51",
        "id": "4d6da56d-c891-580f-860b-bd25c4f77a07",
        "displayName": "Load a Feed from MS-API",
        "description": "This step will load a feed from MS-API",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "text",
            "name": "feedId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "ApiSteps.getFeed",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.111Z",
        "modifiedDate": "2019-06-19T14:23:15.751Z"
      },
      {
        "_id": "5cf6ca5a7b60af3bf41ffd52",
        "id": "ecd367d4-dca0-538e-8144-0651b6168462",
        "displayName": "Concatenates Two String into a Single String",
        "description": "This step will concatenate two strings into a single string with an optional separator",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "string1",
            "required": false
          },
          {
            "type": "text",
            "name": "string2",
            "required": false
          },
          {
            "type": "text",
            "name": "separator",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "UtilitySteps.concatStrings",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.117Z",
        "modifiedDate": "2019-06-19T14:23:15.755Z"
      },
      {
        "_id": "5cf6ca5a7b60af19701ffd53",
        "id": "c5f83034-c13d-57e2-9326-6033b32223a0",
        "displayName": "Converts a Delimited String to a Scala Sequence",
        "description": "This step converts a delimited string to a scala sequence; returns an empty seq if string is empty",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "value",
            "required": false
          },
          {
            "type": "text",
            "name": "delimiter",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "UtilitySteps.convertStringToSeq",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.122Z",
        "modifiedDate": "2019-06-19T14:23:15.762Z"
      },
      {
        "_id": "5cf6ca5a7b60afda011ffd54",
        "id": "4f6cf607-d3ce-4271-9c7a-c59dfe259022",
        "displayName": "Converts a Delimited String to a Scala List",
        "description": "This step converts a delimited string to a scala list; returns an empty list if string is empty",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "value",
            "required": false
          },
          {
            "type": "text",
            "name": "delimiter",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "UtilitySteps.convertStringToList",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.127Z",
        "modifiedDate": "2019-06-19T14:23:15.767Z"
      },
      {
        "_id": "5cf6ca5a7b60af55701ffd55",
        "id": "6b1b391f-2cf5-52ea-88d0-50c49c937dd6",
        "displayName": "Extracts Value Assigned to Field in an Object",
        "description": "This step will attempt to extract the value assigned to the field name from the given entity. The field can contain \\'.\\' character to denote sub objects. If the field does not exist or is empty a None object will be  returned. This function does not handle collections.",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "entity",
            "required": false
          },
          {
            "type": "text",
            "name": "fieldName",
            "required": false
          },
          {
            "type": "boolean",
            "name": "extractFromOption",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "UtilitySteps.extractField",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.133Z",
        "modifiedDate": "2019-06-19T14:23:15.771Z"
      },
      {
        "_id": "5cf6ca5a7b60afce841ffd56",
        "id": "614e3cc7-ab93-51f6-acf9-73e9c63f952b",
        "displayName": "Pulls Value from a Named Global Parameter",
        "description": "This step will return a named global parameter",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "fieldName",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "UtilitySteps.getGlobalParameter",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.138Z",
        "modifiedDate": "2019-06-19T14:23:15.776Z"
      },
      {
        "_id": "5cf6ca5a7b60af13461ffd57",
        "id": "ff982983-12fc-4020-a43b-93e8137b484a",
        "displayName": "Extracts Ingestion Date from File Name",
        "description": "This step will extract ingestion dt from file name ensuring it\\'s a valid date",
        "type": "Pipeline",
        "category": "Utilities",
        "params": [
          {
            "type": "text",
            "name": "dataCollection",
            "required": false
          },
          {
            "type": "text",
            "name": "regex",
            "required": false
          },
          {
            "type": "text",
            "name": "dateMask",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "UtilitySteps.extractDateFromSourcePath",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.143Z",
        "modifiedDate": "2019-06-19T14:23:15.780Z"
      },
      {
        "_id": "5cf6ca5a7b60af4d9c1ffd58",
        "id": "8d8e99b0-b2da-5f19-8e3d-78eefe614392",
        "displayName": "Downloads a File",
        "description": "This step downloads a file using the provided data asset and data collection objects",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "dataCollection",
            "required": false
          },
          {
            "type": "boolean",
            "name": "encryptOnWrite",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileSteps.downloadFile",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.150Z",
        "modifiedDate": "2019-06-19T14:23:15.784Z"
      },
      {
        "_id": "5cf6ca5a7b60af84ff1ffd59",
        "id": "d7296207-2367-58b7-9b3e-c8ef373ab91f",
        "displayName": "Loads a DataAsset to a DataFrame Using FileParsingOptions",
        "description": "This step loads a data asset to a data frame using file parsing options provided",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "parsingOptions",
            "required": false
          },
          {
            "type": "text",
            "name": "schema",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileSteps.loadInboundDataAsset",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.157Z",
        "modifiedDate": "2019-06-19T14:23:15.788Z"
      },
      {
        "_id": "5cf6ca5a7b60afc62c1ffd5a",
        "id": "5433f741-1f48-498f-a497-c1218866b7e3",
        "displayName": "Generate File Parsing Options for a DataAsset",
        "description": "This step evaluates data for a data asset to determine the file parsing options",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "recordDelimiter",
            "required": false
          },
          {
            "type": "text",
            "name": "fieldDelimiter",
            "required": false
          },
          {
            "type": "text",
            "name": "fieldEnclosing",
            "required": false
          },
          {
            "type": "text",
            "name": "characterSet",
            "required": false
          },
          {
            "type": "integer",
            "name": "skipRecords",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileSteps.generateFileParsingOptions",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.162Z",
        "modifiedDate": "2019-06-19T14:23:15.793Z"
      },
      {
        "_id": "5cf6ca5a7b60af0e2e1ffd5b",
        "id": "62c111e1-7115-4eed-8bd6-efb12614021e",
        "displayName": "Overrides FileParsingOptions from Feed if Exists",
        "description": "This step returns the FileParsingOptions from the feed if they exist otherwise returns the options passed in",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "object",
            "name": "feed",
            "required": false,
            "className": "com.acxiom.msapi.feed.Feed"
          },
          {
            "type": "text",
            "name": "parsingOptions",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileSteps.getFileParsingOptionsFromFeed",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.168Z",
        "modifiedDate": "2019-06-19T14:23:15.797Z"
      },
      {
        "_id": "5cf6ca5a7b60afad901ffd5c",
        "id": "4d828bd2-d8fe-5574-a374-202a28e8554d",
        "displayName": "Decrypts DataAsset",
        "description": "This step gets decrypted DataAsset and persists in on file system with encryption if not already encrypted",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "feed",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileSteps.decryptDataAsset",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.173Z",
        "modifiedDate": "2019-06-19T14:23:15.803Z"
      },
      {
        "_id": "5cf6ca5a7b60af224c1ffd5d",
        "id": "1db3ae12-9b30-5d42-a596-cae8df3302a9",
        "displayName": "Check for Potential Duplicate Collections",
        "description": "This step determines if the current data collection is a possible duplicate of another",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "encryptedDataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "unencryptedDataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "feed",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileSteps.checkDuplicateFile",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.178Z",
        "modifiedDate": "2019-06-19T14:23:15.808Z"
      },
      {
        "_id": "5cf6ca5a7b60af42d01ffd5e",
        "id": "7a4a2ce6-d485-5876-8714-be5cf193ae22",
        "displayName": "Detect Mime Type of a File DataAsset",
        "description": "This step determines the mime type of a file stored in a data asset",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileSteps.detectMimeType",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.183Z",
        "modifiedDate": "2019-06-19T14:23:15.812Z"
      },
      {
        "_id": "5cf6ca5a7b60afd9e31ffd5f",
        "id": "7663c5ce-a904-4d4f-aca5-5660317ec3af",
        "displayName": "Validate Mime Type of a File DataAsset",
        "description": "This step validates the mime type of a file stored in a data asset",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "supportedMimeTypes",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FileSteps.validateSupportedMimeType",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.188Z",
        "modifiedDate": "2019-06-19T14:23:15.816Z"
      },
      {
        "_id": "5cf6ca5a7b60af250f1ffd60",
        "id": "c4d16408-d7dc-5c38-b927-cb2d5dcac0a1",
        "displayName": "Create DataFrame with Record Level Validation Results",
        "description": "This step generates record level validations data frame using validations on existing schema",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "schema",
            "required": false,
            "className": "com.acxiom.msapi.schema.Schema"
          },
          {
            "type": "text",
            "name": "feed",
            "required": false
          },
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "RecordLevelValidationSteps.generateRecordLevelValidations",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.194Z",
        "modifiedDate": "2019-06-19T14:23:15.821Z"
      },
      {
        "_id": "5cf6ca5a7b60afc5cd1ffd61",
        "id": "b1ebe8cb-2d87-4daf-a982-2b6ed5fc21e",
        "displayName": "Create a Record Level Audit Object",
        "description": "This creates a record level audit object that contains details, messages, and a summary of record level validation results",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "text",
            "name": "inputDataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "validationDataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "schema",
            "required": false,
            "className": "com.acxiom.msapi.schema.Schema"
          },
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          },
          {
            "type": "integer",
            "name": "maxFlaggedRowsForAccuracy",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "RecordLevelValidationSteps.createRecordLevelAudit",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:30.199Z",
        "modifiedDate": "2019-06-19T14:23:15.825Z"
      },
      {
        "_id": "5cf6ca5b7b60afa9db1ffd62",
        "id": "ae017d7e-1be4-5680-a758-5b50283670fc",
        "displayName": "Stores RecordLevelValidation Results to Permanent Storage",
        "description": "This step stores record level validations from data frame to a data asset",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "parentZoneAssetId",
            "required": false
          },
          {
            "type": "text",
            "name": "validationAssetName",
            "required": false
          },
          {
            "type": "text",
            "name": "feed",
            "required": false
          },
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "RecordLevelValidationSteps.saveRecordLevelValidations",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.015Z",
        "modifiedDate": "2019-06-19T14:23:15.829Z"
      },
      {
        "_id": "5cf6ca5b7b60af973a1ffd63",
        "id": "974888a5-a22d-53f2-8360-23cbc1506b89",
        "displayName": "Create and Save Record Level Audit Records",
        "description": "This step combines the create and save record level audits steps into a single step",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "text",
            "name": "inputDataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "validationDataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "schema",
            "required": false,
            "className": "com.acxiom.msapi.schema.Schema"
          },
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          },
          {
            "type": "integer",
            "name": "maxFlaggedRowsForAccuracy",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "RecordLevelValidationSteps.createAndSaveRecordLevelAudit",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.020Z",
        "modifiedDate": "2019-06-19T14:23:15.835Z"
      },
      {
        "_id": "5cf6ca5b7b60af39201ffd64",
        "id": "18d25064-dda1-4cff-94b5-6d2a6166b27c",
        "displayName": "Compares Stored Audit with Recent Audit",
        "description": "This step compares two record level audit object return whether they are the same (optionally save the recent audit)",
        "type": "Pipeline",
        "category": "Decision",
        "params": [
          {
            "type": "object",
            "name": "storedAudit",
            "required": false,
            "className": "com.acxiom.msapi.audits.RecordLevelAudit"
          },
          {
            "type": "object",
            "name": "recentAudit",
            "required": false,
            "className": "com.acxiom.msapi.audits.RecordLevelAudit"
          },
          {
            "type": "boolean",
            "name": "saveChanges",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "RecordLevelValidationSteps.recordLevelAuditChanged",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.026Z",
        "modifiedDate": "2019-06-19T14:23:15.841Z"
      },
      {
        "_id": "5cf6ca5b7b60af6b101ffd65",
        "id": "e8d23a34-585e-5221-9fc1-7ca1e083306a",
        "displayName": "Evaluates Record Level Audit Thresholds",
        "description": "This step evaluates record level audit object logging warnings/error thresholds returns messages",
        "type": "Pipeline",
        "category": "Decision",
        "params": [
          {
            "type": "text",
            "name": "audit",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "RecordLevelValidationSteps.evaluateRecordLevelAudit",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.031Z",
        "modifiedDate": "2019-06-19T14:23:15.846Z"
      },
      {
        "_id": "5cf6ca5b7b60af3c901ffd66",
        "id": "1ae04d80-f495-4fb8-9a67-4e9ff19896db",
        "displayName": "Appends Validation Flag Reasons to an Existing DataFrame",
        "description": "This step creates a flagged record data frame that contains the original columns from the raw data withthe system columns and flagged reasons generated during ingestion",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "text",
            "name": "validationsDataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "rawDataFrame",
            "required": false
          },
          {
            "type": "integer",
            "name": "maxFlaggedRowsToSend",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "RecordLevelValidationSteps.createFlaggedRecordDataFrame",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.037Z",
        "modifiedDate": "2019-06-19T14:23:15.851Z"
      },
      {
        "_id": "5cf6ca5b7b60afe2c81ffd67",
        "id": "71aa97a1-7d5a-489c-9546-ce5ff9fff343",
        "displayName": "Write Flagged Records to an External Site",
        "description": "This step writes the flagged record data frame to an external site using input file options",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          },
          {
            "type": "object",
            "name": "feed",
            "required": false,
            "className": "com.acxiom.msapi.feed.Feed"
          },
          {
            "type": "text",
            "name": "parentAssetId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "RecordLevelValidationSteps.writeFlaggedRecordsToExternalSite",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.045Z",
        "modifiedDate": "2019-06-19T14:23:15.855Z"
      },
      {
        "_id": "5cf6ca5b7b60af2bf31ffd68",
        "id": "8ebfd810-ec03-4e67-80fa-7467b6a792df",
        "displayName": "Determines Whether Flagged File is to be Sent",
        "description": "Determines whether or not the feed is expecting the flagged file to be sent out",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "object",
            "name": "feed",
            "required": false,
            "className": "com.acxiom.msapi.feed.Feed"
          }
        ],
        "engineMeta": {
          "spark": "RecordLevelValidationSteps.sendFlaggedFileRequested",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.051Z",
        "modifiedDate": "2019-06-19T14:23:15.860Z"
      },
      {
        "_id": "5cf6ca5b7b60af064c1ffd69",
        "id": "199bf9c0-27fc-529f-91fb-dfc5920e20cd",
        "displayName": "Retrieve a DataAsset from MS-API by Id",
        "description": "This step will pull a data asset from MS-API by the data asset id",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "assetId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.getDataAssetById",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.056Z",
        "modifiedDate": "2019-06-19T14:23:15.866Z"
      },
      {
        "_id": "5cf6ca5b7b60af0e971ffd6a",
        "id": "2a08ea63-e274-4404-abd0-855904973a0c",
        "displayName": "Retrieve a DataAsset from MS-API by Name and Parent Id",
        "description": "This step will pull a data asset from MS-API by the data asset name and parent id",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "text",
            "name": "assetName",
            "required": false
          },
          {
            "type": "text",
            "name": "parentAssetId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.getDataAssetByNameAndParentId",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.063Z",
        "modifiedDate": "2019-06-19T14:23:15.872Z"
      },
      {
        "_id": "5cf6ca5b7b60af8d371ffd6b",
        "id": "83301fd4-55b9-4daf-85de-b1d2e7adb2d3",
        "displayName": "Acquire Read Lock on DataAsset",
        "description": "This step will attempt to acquire a Concurrent Read lock on an existing data asset",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "object",
            "name": "dataAsset",
            "required": false,
            "className": "com.acxiom.msapi.assets.DataAsset"
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.acquireReadLockOnDataAsset",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.068Z",
        "modifiedDate": "2019-06-19T14:23:15.876Z"
      },
      {
        "_id": "5cf6ca5b7b60af0bd21ffd6c",
        "id": "2a87f2c1-03c2-40a9-9761-dea26e7a37c2",
        "displayName": "Release Lock on DataAsset",
        "description": "This step will attempt to release a lock on an existing data asset",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "object",
            "name": "dataAsset",
            "required": false,
            "className": "com.acxiom.msapi.assets.DataAsset"
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.releaseLockOnDataAsset",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.074Z",
        "modifiedDate": "2019-06-19T14:23:15.880Z"
      },
      {
        "_id": "5cf6ca5b7b60af9aed1ffd6d",
        "id": "35014adb-2814-4874-8c27-5825c810ad3e",
        "displayName": "Load Existing Data from a DataAsset to a DataFrame",
        "description": "This step will load data from an existing data asset into a new data frame",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "filter",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.dataAssetToDataFrame",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.081Z",
        "modifiedDate": "2019-06-19T14:23:15.884Z"
      },
      {
        "_id": "5cf6ca5b7b60af710c1ffd6e",
        "id": "ea28ebc8-09b3-4a89-a670-92915bb8a8f4",
        "displayName": "Get or Create a DataAsset using Attributes",
        "description": "This step will get an asset by name and create a new one if it doesn\\'t exist, using individual attributes",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "assetName",
            "required": false
          },
          {
            "type": "text",
            "name": "parentAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "partitionKey",
            "required": false
          },
          {
            "type": "text",
            "name": "partitionStrategy",
            "required": false
          },
          {
            "type": "text",
            "name": "mergeStrategy",
            "required": false
          },
          {
            "type": "text",
            "name": "dataFormat",
            "required": false
          },
          {
            "type": "boolean",
            "name": "tempFlag",
            "required": false
          },
          {
            "type": "text",
            "name": "existingSchema",
            "required": false
          },
          {
            "type": "boolean",
            "name": "useAssetIdForName",
            "required": false
          },
          {
            "type": "boolean",
            "name": "useAttributeIdsForColumnNames",
            "required": false
          },
          {
            "type": "boolean",
            "name": "update",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.getOrCreateDataStoreAsset",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.086Z",
        "modifiedDate": "2019-06-19T14:23:15.888Z"
      },
      {
        "_id": "5cf6ca5b7b60af651a1ffd6f",
        "id": "cd84765e-4f2f-428e-b599-973624071825",
        "displayName": "Get or Create Data Asset using DataStore Parameters",
        "description": "This step will get an asset by name or create a new one if it doesn\\'t exist, using a DataStoreParameters object",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "assetName",
            "required": false
          },
          {
            "type": "text",
            "name": "parentAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "parameters",
            "required": false,
            "className": "com.acxiom.msapi.assets.DataStoreParameter"
          },
          {
            "type": "boolean",
            "name": "tempFlag",
            "required": false
          },
          {
            "type": "boolean",
            "name": "update",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.getOrCreateDataStoreAssetUsingParameters",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.096Z",
        "modifiedDate": "2019-06-19T14:23:15.893Z"
      },
      {
        "_id": "5cf6ca5b7b60af86ea1ffd70",
        "id": "5909de77-f338-565c-8d2d-c9dc65308743",
        "displayName": "Enable Querying on a Data Asset",
        "description": "This step will call the enable-for-query endpoint in MS-API for a data asset",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "object",
            "name": "dataAsset",
            "required": false,
            "className": "com.acxiom.msapi.assets.DataAsset"
          },
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          },
          {
            "type": "boolean",
            "name": "restartConnPool",
            "required": false
          },
          {
            "type": "boolean",
            "name": "recreateTables",
            "required": false
          },
          {
            "type": "boolean",
            "name": "enableSchemaCheck",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.enableForQuery",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.102Z",
        "modifiedDate": "2019-06-19T14:23:15.898Z"
      },
      {
        "_id": "5cf6ca5b7b60af498f1ffd71",
        "id": "56d3aaa1-013b-5e89-b613-c0ff9a328370",
        "displayName": "Updates First Hive Meta Entry with New Table Definitions",
        "description": "Take an existing data asset and update the FIRST hiveMeta entry to include new table definitions. Calls methodto update the mongo entry for this data asset, and returns the updated object",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "targetTable",
            "required": false
          },
          {
            "type": "text",
            "name": "targetDatabase",
            "required": false
          },
          {
            "type": "text",
            "name": "unMappedTable",
            "required": false
          },
          {
            "type": "text",
            "name": "unMappedDatabase",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.updateDataStoreAssetFirstHiveMetaEntry",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.107Z",
        "modifiedDate": "2019-06-19T14:23:15.902Z"
      },
      {
        "_id": "5cf6ca5b7b60af18ae1ffd72",
        "id": "04622d9c-7708-557e-b4c8-1268131d6f77",
        "displayName": "Apply DataGroup Tags to an existing DataAsset",
        "description": "This function will apply tags to the final asset.  Anything passed in will be added as \\'datagroup_$tag\\' with a value of 1",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "text",
            "name": "dataAsset",
            "required": false
          },
          {
            "type": "text",
            "name": "datagroups",
            "required": false
          },
          {
            "type": "boolean",
            "name": "tagZone",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.tagDataAssetWithDataGroups",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.112Z",
        "modifiedDate": "2019-06-19T14:23:15.906Z"
      },
      {
        "_id": "5cf6ca5b7b60af345d1ffd73",
        "id": "3ebf9f6c-3447-44d2-b7e8-21f651171548",
        "displayName": "Removes data records from a Data Asset by delete value list",
        "description": "This step will get an asset by name and delete all data records corresponding to values in a delete values list",
        "type": "Pipeline",
        "category": "InputOutput",
        "params": [
          {
            "type": "object",
            "name": "dataAsset",
            "required": false,
            "className": "com.acxiom.msapi.assets.DataAsset"
          },
          {
            "type": "text",
            "name": "deleteColumnName",
            "required": false
          },
          {
            "type": "text",
            "name": "deleteValues",
            "required": false
          },
          {
            "type": "text",
            "name": "feed",
            "required": false
          },
          {
            "type": "text",
            "name": "deleteAssetName",
            "required": false
          },
          {
            "type": "text",
            "name": "dataCollectionDf",
            "required": false
          },
          {
            "type": "boolean",
            "name": "forceDelete",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "DataAssetSteps.removeValuesFromAssetData",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.120Z",
        "modifiedDate": "2019-06-19T14:23:15.910Z"
      },
      {
        "_id": "5cf6ca5b7b60af8b3a1ffd74",
        "id": "d340a198-16ba-46aa-a07b-1e7c7fa58fe6",
        "displayName": "Get a Feed from MS-API by Id",
        "description": "This step retrieves a feed from MS-API by Id Provided",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "text",
            "name": "feedId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FeedSteps.getFeedById",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.128Z",
        "modifiedDate": "2019-06-19T14:23:15.915Z"
      },
      {
        "_id": "5cf6ca5b7b60af5fcf1ffd75",
        "id": "6ece9299-209b-5dc4-bf77-7dd3b70c9e4b",
        "displayName": "Map DataFrame to DataCategory Assets",
        "description": "This step maps existing dataFrame to one or more data categories and writes to appropriate dataAssetsbased on feed settings",
        "type": "Pipeline",
        "category": "Mapping",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "feed",
            "required": false,
            "className": "com.acxiom.msapi.feed.Feed"
          },
          {
            "type": "text",
            "name": "outputParentAssetId",
            "required": false
          },
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          },
          {
            "type": "integer",
            "name": "optimalSplitSizeMB",
            "required": false
          },
          {
            "type": "text",
            "name": "validationParentAssetId",
            "required": false
          },
          {
            "type": "text",
            "name": "validationAssetName",
            "required": false
          },
          {
            "type": "text",
            "name": "schema",
            "required": false
          },
          {
            "type": "boolean",
            "name": "buildSchemaFromMappings",
            "required": false
          },
          {
            "type": "text",
            "name": "mergeStrategy",
            "required": false
          },
          {
            "type": "text",
            "name": "partitionStrategy",
            "required": false
          },
          {
            "type": "text",
            "name": "partitionKey",
            "required": false
          },
          {
            "type": "text",
            "name": "assetName",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FeedSteps.mapAndWriteDataFrameForFeed",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.134Z",
        "modifiedDate": "2019-06-19T14:23:15.919Z"
      },
      {
        "_id": "5cf6ca5b7b60af3ff81ffd76",
        "id": "3a73042a-9322-468d-9f13-a2c6f5ef9264",
        "displayName": "Filters Reject Rows from DataFrame",
        "description": "This step creates a new dataframe that filters out reject rows from the provided validation asset",
        "type": "Pipeline",
        "category": "Mapping",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          },
          {
            "type": "object",
            "name": "inputSchema",
            "required": false,
            "className": "com.acxiom.msapi.schema.Schema"
          },
          {
            "type": "text",
            "name": "validationAssetName",
            "required": false
          },
          {
            "type": "text",
            "name": "validationParentAssetId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "FeedSteps.filterRejectRows",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.142Z",
        "modifiedDate": "2019-06-19T14:23:15.923Z"
      },
      {
        "_id": "5cf6ca5b7b60af0da51ffd77",
        "id": "2934946e-6fbe-4b60-9a1d-94fd45981043",
        "displayName": "Add System Attributes to an Schema",
        "description": "This step adds system columns record_id and data_collection_id to an existing schema",
        "type": "Pipeline",
        "category": "Mapping",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "object",
            "name": "feed",
            "required": false,
            "className": "com.acxiom.msapi.feed.Feed"
          },
          {
            "type": "object",
            "name": "schema",
            "required": false,
            "className": "com.acxiom.msapi.schema.Schema"
          }
        ],
        "engineMeta": {
          "spark": "FeedSteps.getInputSchemaWithSystemColumns",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.150Z",
        "modifiedDate": "2019-06-19T14:23:15.929Z"
      },
      {
        "_id": "5cf6ca5b7b60af48cb1ffd78",
        "id": "1ad834a7-4bb6-5563-88b2-141a3ec45b73",
        "displayName": "Validates Basic Characteristics to a Destination Schema",
        "description": "This step will validate basic/summary characteristics of a dataframe against a destination schema",
        "type": "branch",
        "category": "Decision",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "destinationSchema",
            "required": false
          },
          {
            "type": "text",
            "name": "feed",
            "required": false
          },
          {
            "type": "text",
            "name": "characteristics",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "ValidationSteps.basicCollectionValidation",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.159Z",
        "modifiedDate": "2019-06-19T14:23:15.933Z"
      },
      {
        "_id": "5cf6ca5b7b60af79331ffd79",
        "id": "7968203a-f721-5be4-92de-6bf3ed714e1a",
        "displayName": "Evaluates Validation Messages",
        "description": "This step will evaluate validation messages and throw an error if necessary",
        "type": "Pipeline",
        "category": "Decision",
        "params": [
          {
            "type": "text",
            "name": "messages",
            "required": false
          },
          {
            "type": "boolean",
            "name": "pauseOnFailure",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "ValidationSteps.evaluateValidationMessages",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.165Z",
        "modifiedDate": "2019-06-19T14:23:15.938Z"
      },
      {
        "_id": "5cf6ca5b7b60af38931ffd7a",
        "id": "604fa8d6-a11c-5bf3-904a-2cc3219161cb",
        "displayName": "Create a Validations Object with Messages and Characteristics",
        "description": "This step will combine validation messages and characteristics into a Validations object",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "text",
            "name": "messages",
            "required": false
          },
          {
            "type": "text",
            "name": "characteristics",
            "required": false
          },
          {
            "type": "text",
            "name": "predictions",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "ValidationSteps.createValidations",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.171Z",
        "modifiedDate": "2019-06-19T14:23:15.942Z"
      },
      {
        "_id": "5cf6ca5b7b60af75e21ffd7b",
        "id": "ac07244e-fb11-40f7-ac69-a05748afecb8",
        "displayName": "Validates Detailed Characteristics to a Destination Schema",
        "description": "This step will validate detailed/full file characteristics of a dataframe against a destination schema",
        "type": "Pipeline",
        "category": "Decision",
        "params": [
          {
            "type": "text",
            "name": "destinationSchema",
            "required": false
          },
          {
            "type": "text",
            "name": "characteristics",
            "required": false
          },
          {
            "type": "text",
            "name": "feed",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "ValidationSteps.detailedCollectionValidation",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.176Z",
        "modifiedDate": "2019-06-19T14:23:15.946Z"
      },
      {
        "_id": "5cf6ca5b7b60af4b761ffd7c",
        "id": "5c6df599-66de-49b4-a607-91df3079d8cb",
        "displayName": "Determines whether Initial Characteristics are Required",
        "description": "This step will look at specific settings on a Feed to determine if initial characteristics need to be run",
        "type": "branch",
        "category": "Decision",
        "params": [
          {
            "type": "text",
            "name": "feed",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "CharacteristicSteps.initialDetailedCharacteristicsRequired",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.183Z",
        "modifiedDate": "2019-06-19T14:23:15.950Z"
      },
      {
        "_id": "5cf6ca5b7b60af1fd31ffd7d",
        "id": "beebd914-ad3f-40c6-9bcb-688a5c9a2dd1",
        "displayName": "Generate Detailed Characteristics for a DataFrame",
        "description": "This step will generate detailed characteristics for a dataframe and append to an existing object",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "destinationSchema",
            "required": false
          },
          {
            "type": "text",
            "name": "characteristics",
            "required": false
          },
          {
            "type": "text",
            "name": "feed",
            "required": false
          },
          {
            "type": "boolean",
            "name": "runAll",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "CharacteristicSteps.generateDetailedCharacteristics",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.189Z",
        "modifiedDate": "2019-06-19T14:23:15.960Z"
      },
      {
        "_id": "5cf6ca5b7b60af47661ffd7e",
        "id": "ecc37f2b-fe77-5ce2-b6d9-439a5713c562",
        "displayName": "Create a Schema from a Characteristics Object",
        "description": "This step will create a default schema using the CollectionCharacteristics object creating previously",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "object",
            "name": "characteristics",
            "required": false,
            "className": "com.acxiom.msapi.audits.CollectionCharacteristics"
          }
        ],
        "engineMeta": {
          "spark": "CharacteristicSteps.createDefaultSchema",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.195Z",
        "modifiedDate": "2019-06-19T14:23:15.964Z"
      },
      {
        "_id": "5cf6ca5b7b60af5ce81ffd7f",
        "id": "de8bc659-1040-5b2f-a802-fec745c11f87",
        "displayName": "Create a Validation Audit Record",
        "description": "This step will create a validation audit record to track validation results during inbound processing",
        "type": "Pipeline",
        "category": "AuditGeneration",
        "params": [
          {
            "type": "text",
            "name": "validations",
            "required": false
          },
          {
            "type": "text",
            "name": "auditName",
            "required": false
          },
          {
            "type": "text",
            "name": "encryptionKeyId",
            "required": false
          },
          {
            "type": "text",
            "name": "encryptedMd5",
            "required": false
          },
          {
            "type": "text",
            "name": "unencryptedMd5",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "AuditSteps.createValidationAuditRecord",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.202Z",
        "modifiedDate": "2019-06-19T14:23:15.968Z"
      },
      {
        "_id": "5cf6ca5b7b60af3d821ffd80",
        "id": "becaa370-7c5b-4edf-8521-4af813d6e139",
        "displayName": "Pulls Latest Characteristics from Audits API",
        "description": "This step will pull the latest \\'Characteristics\\' audit for a data collection from an existing Audit object",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "AuditSteps.getLatestCharacteristicsForDataCollection",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.208Z",
        "modifiedDate": "2019-06-19T14:23:15.973Z"
      },
      {
        "_id": "5cf6ca5b7b60af79671ffd81",
        "id": "6f71e170-fec6-497b-8851-549edde906c4",
        "displayName": "Load the Latest Record Level Audit for a Collection",
        "description": "This step will load the latest \\'RecordLevel\\' audit for a data collection from MS-API",
        "type": "Pipeline",
        "category": "ApiInteraction",
        "params": [
          {
            "type": "text",
            "name": "dataCollectionId",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "AuditSteps.loadLatestRecordLevelAudit",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "creationDate": "2019-06-04T19:45:31.214Z",
        "modifiedDate": "2019-06-19T14:23:15.977Z"
      },
      {
        "_id": "5d000be07b60afd1fc1ffd84",
        "id": "39516534-cb78-4a62-80e9-93d6ba2da195",
        "displayName": "Generate Basic Characteristics (outside of Datalake)",
        "description": "This step generate and log characteristics",
        "type": "Pipeline",
        "category": "EdsStuff",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "EdSteps.generateBasicCharacteristics",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-06-11T20:15:28.957Z",
        "modifiedDate": "2019-06-11T20:16:00.368Z"
      },
      {
        "_id": "5d000be07b60aff92f1ffd85",
        "id": "be59e22c-cab3-4f36-b93f-8d54953374e3",
        "displayName": "Generate Detailed Characteristics (outside of Datalake)",
        "description": "This step will generate detailed characteristics for a dataframe and append to an existing object",
        "type": "Pipeline",
        "category": "EdsStuff",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "EdSteps.generateDetailedCharacteristics",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-06-11T20:15:28.964Z",
        "modifiedDate": "2019-06-11T20:15:28.964Z"
      },
      {
        "_id": "5d000be07b60afde301ffd86",
        "id": "a59957d4-05ba-4aab-bd17-b2a200f36e92",
        "displayName": "Create Report with Record Level Validation Results (outside of Datalake)",
        "description": "This step generates record level validations data frame using validations on existing schema",
        "type": "Pipeline",
        "category": "EdsStuff",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "text",
            "name": "schema",
            "required": false
          },
          {
            "type": "text",
            "name": "cache",
            "required": false
          }
        ],
        "engineMeta": {
          "spark": "EdSteps.generateRecordLevelValidations",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-06-11T20:15:28.970Z",
        "modifiedDate": "2019-06-11T20:15:28.970Z"
      },
      {
        "_id": "5d000e438c5e4437c6933ec4",
        "id": "62806029-9819-46ee-8a05-d43a70796e57",
        "displayName": "Custom Step to Compile Complete Research Results",
        "description": "This step compiles results from multiple copy steps to be enhanced and written to disk",
        "type": "Pipeline",
        "category": "EdsStuff",
        "params": [
          {
            "type": "object",
            "name": "dlResults",
            "required": false,
            "className": "com.acxiom.pipeline.steps.CopyResults"
          },
          {
            "type": "object",
            "name": "writeResults",
            "required": false,
            "className": "com.acxiom.pipeline.steps.CopyResults"
          },
          {
            "type": "object",
            "name": "basicResults",
            "required": false,
            "className": "com.acxiom.pipeline.steps.CopyResults"
          },
          {
            "type": "object",
            "name": "detailResults",
            "required": false,
            "className": "com.acxiom.pipeline.steps.CopyResults"
          },
          {
            "type": "object",
            "name": "validationResults",
            "required": false,
            "className": "com.acxiom.pipeline.steps.CopyResults"
          }
        ],
        "engineMeta": {
          "spark": "EdSteps.writeCompleteResultsToFile",
          "pkg": "com.acxiom.pipeline.steps"
        },
        "creationDate": "2019-06-11T20:25:39.001Z",
        "modifiedDate": "2019-06-11T20:25:39.001Z"
      },
      {
        "_id": "5d0a455314d882efe6085934",
        "id": "b001a8e5-11cd-52c2-be56-aea411350f05",
        "category": "AuditGeneration",
        "creationDate": "2019-06-19T14:23:15.954Z",
        "description": "This step will generate basic characteristics for each attribute on a dataframe",
        "displayName": "Generate Basic Characteristics for a DataFrame",
        "engineMeta": {
          "spark": "CharacteristicSteps.generateBasicCharacteristics",
          "pkg": "com.acxiom.datalake.pipeline.steps"
        },
        "modifiedDate": "2019-06-19T14:23:15.954Z",
        "params": [
          {
            "type": "text",
            "name": "dataFrame",
            "required": false
          },
          {
            "type": "integer",
            "name": "sampleSize",
            "required": false
          },
          {
            "type": "text",
            "name": "parsingOptions",
            "required": false
          },
          {
            "type": "text",
            "name": "headers",
            "required": false
          }
        ],
        "type": "Pipeline"
      }
    ]
};

export const pipelines = {
    "pipelines": [
      {
        "_id": "5ca7a01cab4f68476b49be6e",
        "name": "test",
        "steps": [
          {
            "id": "load test",
            "displayName": "Load DataFrame from HDFS path",
            "description": "This step will read a dataFrame from the given HDFS path",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "path",
                "required": false,
                "value": "!inFile"
              },
              {
                "type": "object",
                "name": "options",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.readFromPath"
            },
            "creationDate": "2019-04-04T14:24:22.875Z",
            "modifiedDate": "2019-04-04T14:24:22.875Z",
            "stepId": "87db259d-606e-46eb-b723-82923349640f"
          }
        ],
        "id": "b0318ed0-57d1-11e9-85d2-29bb75bc15e9",
        "creationDate": "2019-04-05T18:36:12.739Z",
        "modifiedDate": "2019-04-05T18:37:07.082Z"
      },
      {
        "_id": "5ca7ab6eab4f683c6849be6f",
        "name": "test2",
        "steps": [
          {
            "id": "test load",
            "displayName": "Load DataFrame from HDFS path",
            "description": "This step will read a dataFrame from the given HDFS path",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "path",
                "required": false,
                "value": "!inPath"
              },
              {
                "type": "object",
                "name": "options",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.readFromPath"
            },
            "creationDate": "2019-04-04T14:24:22.875Z",
            "modifiedDate": "2019-04-04T14:24:22.875Z",
            "stepId": "87db259d-606e-46eb-b723-82923349640f"
          }
        ],
        "id": "6f399d30-57d8-11e9-85d2-29bb75bc15e9",
        "creationDate": "2019-04-05T19:24:30.214Z",
        "modifiedDate": "2019-04-05T19:24:30.214Z"
      },
      {
        "_id": "5ca7ab9058d3deec0aefea2d",
        "name": "test3",
        "steps": [
          {
            "id": "test load",
            "displayName": "Load DataFrame from HDFS path",
            "description": "This step will read a dataFrame from the given HDFS path",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "path",
                "required": false,
                "value": "!inPath"
              },
              {
                "type": "object",
                "name": "options",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.readFromPath"
            },
            "creationDate": "2019-04-04T14:24:22.875Z",
            "modifiedDate": "2019-04-04T14:24:22.875Z",
            "stepId": "87db259d-606e-46eb-b723-82923349640f"
          }
        ],
        "id": "8376e370-57d8-11e9-afcb-8b3896b4a739",
        "creationDate": "2019-04-05T19:25:04.169Z",
        "modifiedDate": "2019-04-05T19:25:04.169Z"
      },
      {
        "_id": "5ca7ac1d58d3de36fcefea2e",
        "name": "dfssdf",
        "steps": [
          {
            "id": "sdfsdf",
            "displayName": "Load DataFrame from HDFS path",
            "description": "This step will read a dataFrame from the given HDFS path",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "path",
                "required": false
              },
              {
                "type": "object",
                "name": "options",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.readFromPath"
            },
            "creationDate": "2019-04-04T14:24:22.875Z",
            "modifiedDate": "2019-04-04T14:24:22.875Z",
            "stepId": "87db259d-606e-46eb-b723-82923349640f"
          }
        ],
        "id": "d7821610-57d8-11e9-afcb-8b3896b4a739",
        "creationDate": "2019-04-05T19:27:25.171Z",
        "modifiedDate": "2019-04-05T19:27:25.171Z"
      },
      {
        "_id": "5ca7ac9aab4f685e8e49be70",
        "name": "test4",
        "steps": [
          {
            "id": "test load",
            "displayName": "Load DataFrame from HDFS path",
            "description": "This step will read a dataFrame from the given HDFS path",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "path",
                "required": false
              },
              {
                "type": "object",
                "name": "options",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.readFromPath"
            },
            "creationDate": "2019-04-04T14:24:22.875Z",
            "modifiedDate": "2019-04-04T14:24:22.875Z",
            "stepId": "87db259d-606e-46eb-b723-82923349640f"
          }
        ],
        "id": "2217dde0-57d9-11e9-85d2-29bb75bc15e9",
        "creationDate": "2019-04-05T19:29:30.305Z",
        "modifiedDate": "2019-04-05T19:29:30.305Z"
      },
      {
        "_id": "5cb0a2a9607415226feb6229",
        "name": "Aggies",
        "steps": [
          {
            "id": "Load",
            "displayName": "Load DataFrame from HDFS path",
            "description": "This step will read a dataFrame from the given HDFS path",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "path",
                "type": "text",
                "value": "/landing/test.csv",
                "required": false
              },
              {
                "type": "object",
                "name": "options",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.readFromPath"
            },
            "creationDate": "2019-04-04T14:24:22.875Z",
            "modifiedDate": "2019-04-04T14:24:22.875Z",
            "stepId": "87db259d-606e-46eb-b723-82923349640f",
            "nextStepId": "Filter"
          },
          {
            "id": "Filter",
            "displayName": "Filter a DataFrame",
            "description": "This step will filter a dataframe based on the where expression provided",
            "type": "Pipeline",
            "category": "Transforms",
            "params": [
              {
                "type": "text",
                "name": "dataFrame",
                "required": false,
                "value": "@Load"
              },
              {
                "name": "expression",
                "type": "text",
                "value": "",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "TransformationSteps.applyFilter"
            },
            "creationDate": "2019-04-04T14:24:22.976Z",
            "modifiedDate": "2019-04-04T14:24:22.976Z",
            "stepId": "fa0fcabb-d000-4a5e-9144-692bca618ddb",
            "nextStepId": "Write"
          },
          {
            "id": "Write",
            "displayName": "Write DataFrame to HDFS",
            "description": "This step will write a dataFrame in a given format to HDFS",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@Filter",
                "required": false
              },
              {
                "name": "path",
                "type": "text",
                "value": "/raw/my_parquet",
                "required": false
              },
              {
                "name": "options",
                "type": "object",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameWriterOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.writeToPath"
            },
            "creationDate": "2019-04-04T14:24:22.889Z",
            "modifiedDate": "2019-04-04T14:24:22.889Z",
            "stepId": "0a296858-e8b7-43dd-9f55-88d00a7cd8fa"
          }
        ],
        "id": "7fef3fb0-5d30-11e9-b761-a9a8d6eac9c4",
        "creationDate": "2019-04-12T14:37:29.774Z",
        "modifiedDate": "2019-04-12T14:37:29.774Z"
      },
      {
        "_id": "5cb0a3156074150948eb622a",
        "name": "Aggies-1",
        "steps": [
          {
            "id": "Load",
            "displayName": "Load DataFrame from HDFS path",
            "description": "This step will read a dataFrame from the given HDFS path",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "path",
                "type": "text",
                "value": "/landing/test.csv",
                "required": false
              },
              {
                "type": "object",
                "name": "options",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.readFromPath"
            },
            "creationDate": "2019-04-04T14:24:22.875Z",
            "modifiedDate": "2019-04-04T14:24:22.875Z",
            "stepId": "87db259d-606e-46eb-b723-82923349640f",
            "nextStepId": "Write"
          },
          {
            "id": "Write",
            "displayName": "Write DataFrame to HDFS",
            "description": "This step will write a dataFrame in a given format to HDFS",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@Load",
                "required": false
              },
              {
                "name": "path",
                "type": "text",
                "value": "/raw/my_parquet",
                "required": false
              },
              {
                "name": "options",
                "type": "object",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameWriterOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.writeToPath"
            },
            "creationDate": "2019-04-04T14:24:22.889Z",
            "modifiedDate": "2019-04-04T14:24:22.889Z",
            "stepId": "0a296858-e8b7-43dd-9f55-88d00a7cd8fa"
          }
        ],
        "id": "c04dac40-5d30-11e9-b761-a9a8d6eac9c4",
        "creationDate": "2019-04-12T14:39:17.766Z",
        "modifiedDate": "2019-04-12T14:39:17.766Z"
      },
      {
        "_id": "5ced8ae58c5e44c596933eb8",
        "name": "ebalog1",
        "steps": [
          {
            "id": "SFTP_FileManager",
            "displayName": "Create SFTP FileManager",
            "description": "Simple function to generate the SFTPFileManager for the remote SFTP file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "hostName",
                "type": "text",
                "value": "!sftp_host",
                "required": false
              },
              {
                "name": "username",
                "type": "text",
                "value": "!sftp_user",
                "required": false
              },
              {
                "name": "password",
                "type": "text",
                "value": "!sftp_pass",
                "required": false
              },
              {
                "name": "port",
                "type": "text",
                "value": "!sftp_port",
                "required": false
              },
              {
                "name": "strictHostChecking",
                "type": "text",
                "required": false,
                "value": "false"
              }
            ],
            "engineMeta": {
              "spark": "SFTPSteps.createFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T19:10:59.281Z",
            "modifiedDate": "2019-05-28T19:10:59.281Z",
            "stepId": "9d467cb0-8b3d-40a0-9ccd-9cf8c5b6cb38",
            "executeIfEmpty": "",
            "nextStepId": "HDFS_FileManager"
          },
          {
            "id": "HDFS_FileManager",
            "displayName": "Create HDFS FileManager",
            "description": "Simple function to generate the HDFSFileManager for the local HDFS file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              
            ],
            "engineMeta": {
              "spark": "HDFSSteps.createFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.836Z",
            "modifiedDate": "2019-05-28T18:54:44.836Z",
            "stepId": "e4dad367-a506-5afd-86c0-82c2cf5cd15c",
            "nextStepId": "Download"
          },
          {
            "id": "Download",
            "displayName": "Buffered file copy",
            "description": "Copy the contents of the source path to the destination path using full buffer sizes. This function will call connect on both FileManagers.",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "srcFS",
                "type": "text",
                "value": "@SFTP_FileManager",
                "required": false
              },
              {
                "name": "srcPath",
                "type": "text",
                "value": "!sftp_input_path",
                "required": false
              },
              {
                "name": "destFS",
                "type": "text",
                "value": "@HDFS_FileManager",
                "required": false
              },
              {
                "name": "destPath",
                "type": "text",
                "value": "!landing_path",
                "required": false
              },
              {
                "name": "inputBufferSize",
                "type": "text",
                "value": "!input_buffer_size",
                "required": false
              },
              {
                "name": "outputBufferSize",
                "type": "text",
                "value": "!output_buffer_size",
                "required": false
              },
              {
                "name": "copyBufferSize",
                "type": "text",
                "value": "!read_buffer_size",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "FileManagerSteps.copy",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.883Z",
            "modifiedDate": "2019-05-28T18:54:44.883Z",
            "stepId": "f5a24db0-e91b-5c88-8e67-ab5cff09c883",
            "nextStepId": "Disconnect_SFTP"
          },
          {
            "id": "Disconnect_SFTP",
            "displayName": "Disconnect a FileManager",
            "description": "Disconnects a FileManager from the underlying file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "fileManager",
                "required": false,
                "value": "@SFTP_FileManager"
              }
            ],
            "engineMeta": {
              "spark": "FileManagerSteps.disconnectFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.887Z",
            "modifiedDate": "2019-05-28T18:54:44.887Z",
            "stepId": "3d1e8519-690c-55f0-bd05-1e7b97fb6633",
            "nextStepId": "CompileResults"
          },
          {
            "id": "CompileResults",
            "displayName": "Custom Step to Compile Research Results",
            "description": "This step compiles results from a copy step to be enhanced and written to disk",
            "type": "Pipeline",
            "category": "EdsStuff",
            "params": [
              {
                "name": "results",
                "type": "object",
                "value": "@Download",
                "required": false,
                "className": "com.acxiom.pipeline.steps.CopyResults"
              }
            ],
            "engineMeta": {
              "spark": "EdSteps.writeResultsToFile",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-31T15:14:44.481Z",
            "modifiedDate": "2019-05-31T16:19:41.331Z",
            "stepId": "52bc0c90-64cc-4a2e-b389-350e08c3aadc"
          }
        ],
        "id": "31a6fb00-817e-11e9-ac99-49159f6e60a9",
        "creationDate": "2019-05-28T19:24:21.043Z",
        "modifiedDate": "2019-05-31T18:52:10.495Z"
      },
      {
        "_id": "5cf5703b8c5e443e54933eba",
        "name": "ebalog_parquet",
        "steps": [
          {
            "id": "SFTP_Manager",
            "displayName": "Create SFTP FileManager",
            "description": "Simple function to generate the SFTPFileManager for the remote SFTP file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "hostName",
                "type": "text",
                "value": "!sftp_host",
                "required": false
              },
              {
                "name": "username",
                "type": "text",
                "value": "!sftp_user",
                "required": false
              },
              {
                "name": "password",
                "type": "text",
                "value": "!sftp_pass",
                "required": false
              },
              {
                "name": "port",
                "type": "integer",
                "value": "!sftp_port",
                "required": false
              },
              {
                "name": "strictHostChecking",
                "type": "boolean",
                "value": "false",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "SFTPSteps.createFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T19:10:59.281Z",
            "modifiedDate": "2019-06-07T00:10:31.084Z",
            "stepId": "9d467cb0-8b3d-40a0-9ccd-9cf8c5b6cb38",
            "nextStepId": "HDFS_Manager"
          },
          {
            "id": "HDFS_Manager",
            "displayName": "Create HDFS FileManager",
            "description": "Simple function to generate the HDFSFileManager for the local HDFS file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              
            ],
            "engineMeta": {
              "spark": "HDFSSteps.createFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.836Z",
            "modifiedDate": "2019-05-28T18:54:44.836Z",
            "stepId": "e4dad367-a506-5afd-86c0-82c2cf5cd15c",
            "nextStepId": "Download"
          },
          {
            "id": "Download",
            "displayName": "Buffered file copy",
            "description": "Copy the contents of the source path to the destination path using full buffer sizes. This function will call connect on both FileManagers.",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "srcFS",
                "type": "text",
                "value": "@SFTP_FileManager",
                "required": false
              },
              {
                "name": "srcPath",
                "type": "text",
                "value": "!sftp_input_path",
                "required": false
              },
              {
                "name": "destFS",
                "type": "text",
                "value": "@HDFS_FileManager",
                "required": false
              },
              {
                "name": "destPath",
                "type": "text",
                "value": "!landing_path",
                "required": false
              },
              {
                "type": "integer",
                "name": "inputBufferSize",
                "required": false,
                "value": "!input_buffer_size"
              },
              {
                "name": "outputBufferSize",
                "type": "integer",
                "value": "!output_buffer_size",
                "required": false
              },
              {
                "name": "copyBufferSize",
                "type": "integer",
                "value": "!read_buffer_size",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "FileManagerSteps.copy",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.883Z",
            "modifiedDate": "2019-06-07T00:11:00.761Z",
            "stepId": "f5a24db0-e91b-5c88-8e67-ab5cff09c883",
            "nextStepId": "DisconnectSFTP"
          },
          {
            "id": "DisconnectSFTP",
            "displayName": "Disconnect a FileManager",
            "description": "Disconnects a FileManager from the underlying file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "fileManager",
                "type": "text",
                "value": "@SFTP_FileManager",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "FileManagerSteps.disconnectFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.887Z",
            "modifiedDate": "2019-05-28T18:54:44.887Z",
            "stepId": "3d1e8519-690c-55f0-bd05-1e7b97fb6633",
            "nextStepId": "LoadLandingFile"
          },
          {
            "id": "LoadLandingFile",
            "displayName": "Load DataFrame from HDFS path",
            "description": "This step will read a dataFrame from the given HDFS path",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "path",
                "type": "text",
                "value": "!landing_path",
                "required": false
              },
              {
                "name": "options",
                "type": "object",
                "value": {
                  "format": "csv",
                  "options": {
                    "header": "true",
                    "delimiter": "|"
                  },
                  "schema": {
                    "attributes": [
                      
                    ]
                  }
                },
                "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.readFromPath"
            },
            "creationDate": "2019-04-04T14:24:22.875Z",
            "modifiedDate": "2019-04-04T14:24:22.875Z",
            "stepId": "87db259d-606e-46eb-b723-82923349640f",
            "executeIfEmpty": "",
            "nextStepId": "SplitDataFrame"
          },
          {
            "id": "SplitDataFrame",
            "displayName": "Custom Step to Split Dataframe Based on Input Size",
            "description": "This step re-splits dataframe based on file size to get close to 128M per split",
            "type": "Pipeline",
            "category": "EdsStuff",
            "params": [
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@LoadLandingFile",
                "required": false
              },
              {
                "name": "hdfsFM",
                "type": "text",
                "value": "@HDFSFileManager",
                "required": false
              },
              {
                "name": "path",
                "type": "text",
                "value": "!landing_path",
                "required": false
              },
              {
                "name": "splitMode",
                "type": "text",
                "value": "!split_mode",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "EdSteps.splitDataFrameOnFileSize",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-06-03T20:31:40.580Z",
            "modifiedDate": "2019-06-03T20:31:40.580Z",
            "stepId": "ea4ffd1e-0066-4bde-9c92-1e34db61b9b3",
            "nextStepId": "WriteToParquet"
          },
          {
            "id": "WriteToParquet",
            "displayName": "Custom Write a DataFrame to Parquet DataStore with Metrics",
            "description": "This step will write a dataFrame to a Parquet data store and return run time metrics",
            "type": "Pipeline",
            "category": "EdsStuff",
            "params": [
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@SplitDataFrame",
                "required": false
              },
              {
                "name": "hdfsFileManager",
                "type": "text",
                "value": "@HDFSFileManager",
                "required": false
              },
              {
                "name": "path",
                "type": "text",
                "value": "!parquet_path",
                "required": false
              },
              {
                "name": "splitMode",
                "type": "text",
                "value": "!split_mode",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "EdSteps.writeToParquet",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-06-03T20:38:14.661Z",
            "modifiedDate": "2019-06-03T20:39:02.547Z",
            "stepId": "6fefd9f0-4c20-47e7-a655-ad203683d9c3",
            "nextStepId": "basicCharacteristics"
          },
          {
            "id": "basicCharacteristics",
            "displayName": "Generate Basic Characteristics (outside of Datalake)",
            "description": "This step generate and log characteristics",
            "type": "Pipeline",
            "category": "EdsStuff",
            "params": [
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@SplitDataFrame",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "EdSteps.generateBasicCharacteristics",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-06-11T20:15:28.957Z",
            "modifiedDate": "2019-06-11T20:16:00.368Z",
            "stepId": "39516534-cb78-4a62-80e9-93d6ba2da195",
            "nextStepId": "detailedCharacteristics"
          },
          {
            "id": "detailedCharacteristics",
            "displayName": "Generate Detailed Characteristics (outside of Datalake)",
            "description": "This step will generate detailed characteristics for a dataframe and append to an existing object",
            "type": "Pipeline",
            "category": "EdsStuff",
            "params": [
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@SplitDataFrame",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "EdSteps.generateDetailedCharacteristics",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-06-11T20:15:28.964Z",
            "modifiedDate": "2019-06-11T20:15:28.964Z",
            "stepId": "be59e22c-cab3-4f36-b93f-8d54953374e3",
            "nextStepId": "RecordLevelValidations"
          },
          {
            "id": "RecordLevelValidations",
            "displayName": "Create Report with Record Level Validation Results (outside of Datalake)",
            "description": "This step generates record level validations data frame using validations on existing schema",
            "type": "Pipeline",
            "category": "EdsStuff",
            "params": [
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@SplitDataFrame",
                "required": false
              },
              {
                "name": "schema",
                "type": "text",
                "value": "#dataTypes",
                "required": false
              },
              {
                "name": "cache",
                "type": "text",
                "value": "true",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "EdSteps.generateRecordLevelValidations",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-06-11T20:15:28.970Z",
            "modifiedDate": "2019-06-11T20:15:28.970Z",
            "stepId": "a59957d4-05ba-4aab-bd17-b2a200f36e92",
            "nextStepId": "CompileResults"
          },
          {
            "id": "CompileResults",
            "displayName": "Custom Step to Compile Complete Research Results",
            "description": "This step compiles results from multiple copy steps to be enhanced and written to disk",
            "type": "Pipeline",
            "category": "EdsStuff",
            "params": [
              {
                "name": "dlResults",
                "type": "object",
                "value": "@Download",
                "required": false,
                "className": "com.acxiom.pipeline.steps.CopyResults"
              },
              {
                "name": "writeResults",
                "type": "object",
                "value": "@WriteToParquet",
                "required": false,
                "className": "com.acxiom.pipeline.steps.CopyResults"
              },
              {
                "type": "object",
                "name": "basicResults",
                "required": false,
                "value": "@basicCharacteristics",
                "className": "com.acxiom.pipeline.steps.CopyResults"
              },
              {
                "type": "object",
                "name": "detailResults",
                "required": false,
                "value": "@detailedCharacteristics",
                "className": "com.acxiom.pipeline.steps.CopyResults"
              },
              {
                "type": "object",
                "name": "validationResults",
                "required": false,
                "value": "@RecordLevelValidation",
                "className": "com.acxiom.pipeline.steps.CopyResults"
              }
            ],
            "engineMeta": {
              "spark": "EdSteps.writeCompleteResultsToFile",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-06-11T20:25:39.001Z",
            "modifiedDate": "2019-06-11T20:25:39.001Z",
            "stepId": "62806029-9819-46ee-8a05-d43a70796e57",
            "executeIfEmpty": ""
          }
        ],
        "id": "0129ee10-8633-11e9-ac99-49159f6e60a9",
        "creationDate": "2019-06-03T19:08:43.252Z",
        "modifiedDate": "2019-06-11T20:33:38.069Z"
      },
      {
        "_id": "5cf7cf8e7b60aff13a1ffd82",
        "name": "Ingest to Raw Zone",
        "steps": [
          {
            "id": "SetStatusForDownload",
            "displayName": "Update Status of an Existing DataCollection",
            "description": "This step will update the status of a data collection by calling the data collection patch endpoint",
            "type": "Pipeline",
            "category": "ApiInteraction",
            "params": [
              {
                "name": "status",
                "type": "text",
                "value": "\"Processing\"",
                "required": false
              },
              {
                "name": "detail",
                "type": "text",
                "value": "\"Begin Download from External Site\"",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "DataCollectionSteps.registerActivity",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.085Z",
            "modifiedDate": "2019-06-04T19:45:30.085Z",
            "stepId": "7f797630-753f-586d-8836-9b500b00c49f",
            "nextStepId": "DownloadFile"
          },
          {
            "id": "DownloadFile",
            "displayName": "Downloads a File",
            "description": "This step downloads a file using the provided data asset and data collection objects",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "dataAsset",
                "required": false,
                "value": "!landing_asset"
              },
              {
                "name": "dataCollection",
                "type": "text",
                "value": "!dataCollection",
                "required": false
              },
              {
                "name": "encryptOnWrite",
                "type": "text",
                "value": "$encryptOnWrite || false",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "FileSteps.downloadFile",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.150Z",
            "modifiedDate": "2019-06-04T19:45:30.150Z",
            "stepId": "8d8e99b0-b2da-5f19-8e3d-78eefe614392",
            "nextStepId": "SetStatusDecrypting"
          },
          {
            "id": "SetStatusDecrypting",
            "displayName": "Update Status of an Existing DataCollection",
            "description": "This step will update the status of a data collection by calling the data collection patch endpoint",
            "type": "Pipeline",
            "category": "ApiInteraction",
            "params": [
              {
                "name": "status",
                "type": "text",
                "value": "\"Processing\"",
                "required": false
              },
              {
                "name": "detail",
                "type": "text",
                "value": "\"Encryptioning/Decrypting Landing Asset\"",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "DataCollectionSteps.registerActivity",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.085Z",
            "modifiedDate": "2019-06-04T19:45:30.085Z",
            "stepId": "7f797630-753f-586d-8836-9b500b00c49f",
            "nextStepId": "HandleEncryptionOnLandingFile"
          },
          {
            "id": "HandleEncryptionOnLandingFile",
            "displayName": "Decrypts DataAsset",
            "description": "This step gets decrypted DataAsset and persists in on file system with encryption if not already encrypted",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "dataAsset",
                "type": "text",
                "value": "!landing_asset",
                "required": false
              },
              {
                "type": "text",
                "name": "feed",
                "required": false,
                "value": "!feed"
              }
            ],
            "engineMeta": {
              "spark": "FileSteps.decryptDataAsset",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.173Z",
            "modifiedDate": "2019-06-04T19:45:30.173Z",
            "stepId": "4d828bd2-d8fe-5574-a374-202a28e8554d",
            "nextStepId": "StatusLoadingFile"
          },
          {
            "id": "StatusLoadingFile",
            "displayName": "Update Status of an Existing DataCollection",
            "description": "This step will update the status of a data collection by calling the data collection patch endpoint",
            "type": "Pipeline",
            "category": "ApiInteraction",
            "params": [
              {
                "name": "status",
                "type": "text",
                "value": "\"Processing\"",
                "required": false
              },
              {
                "name": "detail",
                "type": "text",
                "value": "\"Loading Landing File to Raw Zone\"",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "DataCollectionSteps.registerActivity",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.085Z",
            "modifiedDate": "2019-06-04T19:45:30.085Z",
            "stepId": "7f797630-753f-586d-8836-9b500b00c49f",
            "nextStepId": "CheckForDuplicateCollections"
          },
          {
            "id": "CheckForDuplicateCollections",
            "displayName": "Check for Potential Duplicate Collections",
            "description": "This step determines if the current data collection is a possible duplicate of another",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "encryptedDataAsset",
                "type": "text",
                "value": "#HandleEncryptionOnLandingFile.encryptedDataAsset",
                "required": false
              },
              {
                "name": "unencryptedDataAsset",
                "type": "text",
                "value": "@HandleEncryptionOnLandingFile",
                "required": false
              },
              {
                "name": "feed",
                "type": "text",
                "value": "!feed",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "FileSteps.checkDuplicateFile",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.178Z",
            "modifiedDate": "2019-06-04T19:45:30.178Z",
            "stepId": "1db3ae12-9b30-5d42-a596-cae8df3302a9",
            "nextStepId": "ValidateMimeType"
          },
          {
            "id": "ValidateMimeType",
            "displayName": "Validate Mime Type of a File DataAsset",
            "description": "This step validates the mime type of a file stored in a data asset",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "dataAsset",
                "type": "text",
                "value": "@HandleEncryptionOnLandingFile",
                "required": false
              },
              {
                "name": "supportedMimeTypes",
                "type": "text",
                "value": "Seq(\"text\")",
                "language": "scala",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "FileSteps.validateSupportedMimeType",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.188Z",
            "modifiedDate": "2019-06-04T19:45:30.188Z",
            "stepId": "7663c5ce-a904-4d4f-aca5-5660317ec3af",
            "nextStepId": "GenerateParsingOptions"
          },
          {
            "id": "GenerateParsingOptions",
            "displayName": "Generate File Parsing Options for a DataAsset",
            "description": "This step evaluates data for a data asset to determine the file parsing options",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "dataAsset",
                "type": "text",
                "value": "@HandleEncryptionOnLandingFile",
                "required": false
              },
              {
                "name": "recordDelimiter",
                "type": "text",
                "value": "!feed.input.file.recordDelimiter",
                "required": false
              },
              {
                "type": "text",
                "name": "fieldDelimiter",
                "required": false,
                "value": "!feed.input.file.fieldDelimiter"
              },
              {
                "name": "fieldEnclosing",
                "type": "text",
                "value": "!feed.input.file.fieldEnclosing",
                "required": false
              },
              {
                "name": "characterSet",
                "type": "text",
                "value": "!feed.input.file.characterSet",
                "required": false
              },
              {
                "name": "skipRecords",
                "type": "text",
                "value": "!feed.input.file.skipRecords",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "FileSteps.generateFileParsingOptions",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.162Z",
            "modifiedDate": "2019-06-04T19:45:30.162Z",
            "stepId": "5433f741-1f48-498f-a497-c1218866b7e3",
            "nextStepId": "LoadLandingAsset"
          },
          {
            "id": "LoadLandingAsset",
            "displayName": "Loads a DataAsset to a DataFrame Using FileParsingOptions",
            "description": "This step loads a data asset to a data frame using file parsing options provided",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "dataAsset",
                "type": "text",
                "value": "@HandleEncryptionOnLandingFile",
                "required": false
              },
              {
                "name": "parsingOptions",
                "type": "text",
                "value": "@GenerateParsingOptions",
                "required": false
              },
              {
                "name": "schema",
                "type": "text",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "FileSteps.loadInboundDataAsset",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.157Z",
            "modifiedDate": "2019-06-04T19:45:30.157Z",
            "stepId": "d7296207-2367-58b7-9b3e-c8ef373ab91f",
            "executeIfEmpty": "",
            "nextStepId": "AddDataCollectionId"
          },
          {
            "id": "AddDataCollectionId",
            "displayName": "Add a Column with a Static Value to All Rows in a DataFrame",
            "description": "This step will add a column with a static value to all rows in the provided data frame",
            "type": "Pipeline",
            "category": "Utilities",
            "params": [
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@LoadLandingAsset",
                "required": false
              },
              {
                "name": "columnName",
                "type": "text",
                "value": "data_collection_id",
                "required": false
              },
              {
                "name": "columnValue",
                "type": "text",
                "value": "!dataCollectionId",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "DataSteps.addStaticColumn",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.013Z",
            "modifiedDate": "2019-06-04T19:45:30.013Z",
            "stepId": "37e10488-02c1-5c85-b47a-efecf681fdd4",
            "nextStepId": "AddUniqueRecordId"
          },
          {
            "id": "AddUniqueRecordId",
            "displayName": "Adds a Unique Identifier to a DataFrame",
            "description": "This step will add a new unique identifier to an existing data frame",
            "type": "Pipeline",
            "category": "Utilities",
            "params": [
              {
                "name": "idColumnName",
                "type": "text",
                "value": "record_id",
                "required": false
              },
              {
                "name": "dataFrame",
                "type": "text",
                "value": "!AddDataCollectionId",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "DataSteps.prependUniqueId",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.021Z",
            "modifiedDate": "2019-06-04T19:45:30.021Z",
            "stepId": "9f7d84b0-ebab-57da-8b39-be4c47028242",
            "nextStepId": "GetOrCreateRawDataAsset"
          },
          {
            "id": "GetOrCreateRawDataAsset",
            "displayName": "Get or Create a DataAsset using Attributes",
            "description": "This step will get an asset by name and create a new one if it doesn\\'t exist, using individual attributes",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "assetName",
                "type": "text",
                "value": "!dataCollectionId",
                "required": false
              },
              {
                "name": "parentAsset",
                "type": "text",
                "value": "!rawZone",
                "required": false
              },
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@AddUniqueRecordId",
                "required": false
              },
              {
                "name": "partitionKey",
                "type": "text",
                "required": false
              },
              {
                "type": "text",
                "name": "partitionStrategy",
                "required": false
              },
              {
                "name": "mergeStrategy",
                "type": "text",
                "value": "OVERWRITE",
                "required": false
              },
              {
                "name": "dataFormat",
                "type": "text",
                "value": "parquet",
                "required": false
              },
              {
                "name": "tempFlag",
                "type": "text",
                "value": "false",
                "required": false
              },
              {
                "type": "text",
                "name": "existingSchema",
                "required": false
              },
              {
                "name": "useAssetIdForName",
                "type": "text",
                "value": "true",
                "required": false
              },
              {
                "name": "useAttributeIdsForColumnNames",
                "type": "text",
                "value": "false",
                "required": false
              },
              {
                "name": "update",
                "type": "text",
                "value": "true",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "DataAssetSteps.getOrCreateDataStoreAsset",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:31.086Z",
            "modifiedDate": "2019-06-04T19:45:31.086Z",
            "stepId": "ea28ebc8-09b3-4a89-a670-92915bb8a8f4",
            "nextStepId": "WriateDataToRawZone"
          },
          {
            "id": "WriateDataToRawZone",
            "displayName": "Writes a DataFrame to an Existing DataAsset",
            "description": "This step maps and writes a dataframe to an existing data asset",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "dataFrame",
                "type": "text",
                "value": "@AddUniqueRecordId",
                "required": false
              },
              {
                "type": "text",
                "name": "dataAsset",
                "required": false,
                "value": "@GetOrCreateRawDataAsset"
              },
              {
                "name": "feed",
                "type": "text",
                "value": "!feed",
                "required": false
              },
              {
                "name": "optimalSplitSizeMB",
                "type": "text",
                "value": "$optimalSplitSizeMB || 128",
                "required": false
              },
              {
                "name": "mergeStrategyOverride",
                "type": "text",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "DataSteps.writeDataFrameToDataAsset",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:30.052Z",
            "modifiedDate": "2019-06-04T19:45:30.052Z",
            "stepId": "4c8cb4d9-51db-4b7f-b199-7b13559ecf8d",
            "nextStepId": "TagRawDataAsset"
          },
          {
            "id": "TagRawDataAsset",
            "displayName": "Apply DataGroup Tags to an existing DataAsset",
            "description": "This function will apply tags to the final asset.  Anything passed in will be added as \\'datagroup_$tag\\' with a value of 1",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "name": "dataAsset",
                "type": "text",
                "value": "@GetOrCreateRawAsset",
                "required": false
              },
              {
                "name": "datagroups",
                "type": "text",
                "value": "!feed.dataGroups",
                "required": false
              },
              {
                "name": "tagZone",
                "type": "text",
                "value": "true",
                "required": false
              }
            ],
            "engineMeta": {
              "spark": "DataAssetSteps.tagDataAssetWithDataGroups",
              "pkg": "com.acxiom.datalake.pipeline.steps"
            },
            "creationDate": "2019-06-04T19:45:31.112Z",
            "modifiedDate": "2019-06-04T19:45:31.112Z",
            "stepId": "04622d9c-7708-557e-b4c8-1268131d6f77"
          }
        ],
        "id": "ff8428d0-879c-11e9-8b4f-9b89e27b8b39",
        "creationDate": "2019-06-05T14:19:58.305Z",
        "modifiedDate": "2019-06-05T15:59:42.200Z"
      },
      {
        "_id": "5d0804c48c5e44aa7f933ec5",
        "name": "avarho Load Test",
        "steps": [
          {
            "id": "SFTP FileManager",
            "displayName": "Create SFTP FileManager",
            "description": "Simple function to generate the SFTPFileManager for the remote SFTP file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "hostName",
                "required": false,
                "value": "!sftp_host"
              },
              {
                "name": "username",
                "type": "text",
                "value": "!sftp_user",
                "required": false
              },
              {
                "name": "password",
                "type": "text",
                "value": "!sftp_pass",
                "required": false
              },
              {
                "name": "port",
                "type": "integer",
                "value": "!sftp_port",
                "required": false
              },
              {
                "type": "boolean",
                "name": "strictHostChecking",
                "required": false,
                "value": "false"
              }
            ],
            "engineMeta": {
              "spark": "SFTPSteps.createFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T19:10:59.281Z",
            "modifiedDate": "2019-06-07T00:10:31.084Z",
            "stepId": "9d467cb0-8b3d-40a0-9ccd-9cf8c5b6cb38",
            "executeIfEmpty": "",
            "nextStepId": "HDFS FileManager"
          },
          {
            "id": "HDFS FileManager",
            "displayName": "Create HDFS FileManager",
            "description": "Simple function to generate the HDFSFileManager for the local HDFS file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              
            ],
            "engineMeta": {
              "spark": "HDFSSteps.createFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.836Z",
            "modifiedDate": "2019-05-28T18:54:44.836Z",
            "stepId": "e4dad367-a506-5afd-86c0-82c2cf5cd15c",
            "nextStepId": "Download File"
          },
          {
            "id": "Download File",
            "displayName": "Buffered file copy",
            "description": "Copy the contents of the source path to the destination path using full buffer sizes. This function will call connect on both FileManagers.",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "srcFS",
                "required": false,
                "value": "@SFTP FileManager"
              },
              {
                "type": "text",
                "name": "srcPath",
                "required": false,
                "value": "!sftp_input_path"
              },
              {
                "type": "text",
                "name": "destFS",
                "required": false,
                "value": "@HDFS FileManager"
              },
              {
                "type": "text",
                "name": "destPath",
                "required": false,
                "value": "!landing_path"
              },
              {
                "type": "integer",
                "name": "inputBufferSize",
                "required": false,
                "value": "!input_buffer_size"
              },
              {
                "type": "integer",
                "name": "outputBufferSize",
                "required": false,
                "value": "!output_buffer_size"
              },
              {
                "type": "integer",
                "name": "copyBufferSize",
                "required": false,
                "value": "!read_buffer_size"
              }
            ],
            "engineMeta": {
              "spark": "FileManagerSteps.copy",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.883Z",
            "modifiedDate": "2019-06-07T00:11:00.761Z",
            "stepId": "f5a24db0-e91b-5c88-8e67-ab5cff09c883",
            "nextStepId": "Disconnect SFTP FileManager"
          },
          {
            "id": "Disconnect SFTP FileManager",
            "displayName": "Disconnect a FileManager",
            "description": "Disconnects a FileManager from the underlying file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "fileManager",
                "required": false,
                "value": "@SFTP FileManager"
              }
            ],
            "engineMeta": {
              "spark": "FileManagerSteps.disconnectFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.887Z",
            "modifiedDate": "2019-05-28T18:54:44.887Z",
            "stepId": "3d1e8519-690c-55f0-bd05-1e7b97fb6633",
            "nextStepId": "LoadDataframe"
          },
          {
            "id": "LoadDataframe",
            "displayName": "Load DataFrame from HDFS path",
            "description": "This step will read a dataFrame from the given HDFS path",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "path",
                "required": false,
                "value": "!landing_path"
              },
              {
                "type": "object",
                "name": "options",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions",
                "value": {
                  "format": "csv",
                  "options": {
                    "header": "true",
                    "delimiter": ","
                  },
                  "schema": {
                    "attributes": [
                      
                    ]
                  }
                }
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.readFromPath"
            },
            "creationDate": "2019-04-04T14:24:22.875Z",
            "modifiedDate": "2019-04-04T14:24:22.875Z",
            "stepId": "87db259d-606e-46eb-b723-82923349640f",
            "nextStepId": "Write DataFrame to HDFS"
          },
          {
            "id": "Write DataFrame to HDFS",
            "displayName": "Write DataFrame to HDFS",
            "description": "This step will write a dataFrame in a given format to HDFS",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "dataFrame",
                "required": false,
                "value": "@LoadDataFrame"
              },
              {
                "type": "text",
                "name": "path",
                "required": false,
                "value": "/raw/avarho_parquet"
              },
              {
                "type": "object",
                "name": "options",
                "required": false,
                "className": "com.acxiom.pipeline.steps.DataFrameWriterOptions"
              }
            ],
            "engineMeta": {
              "spark": "HDFSSteps.writeToPath"
            },
            "creationDate": "2019-04-04T14:24:22.889Z",
            "modifiedDate": "2019-04-04T14:24:22.889Z",
            "stepId": "0a296858-e8b7-43dd-9f55-88d00a7cd8fa",
            "nextStepId": "Disconnect HDFS"
          },
          {
            "id": "Disconnect HDFS",
            "displayName": "Disconnect a FileManager",
            "description": "Disconnects a FileManager from the underlying file system",
            "type": "Pipeline",
            "category": "InputOutput",
            "params": [
              {
                "type": "text",
                "name": "fileManager",
                "required": false,
                "value": "@HDFS FileManager"
              }
            ],
            "engineMeta": {
              "spark": "FileManagerSteps.disconnectFileManager",
              "pkg": "com.acxiom.pipeline.steps"
            },
            "creationDate": "2019-05-28T18:54:44.887Z",
            "modifiedDate": "2019-05-28T18:54:44.887Z",
            "stepId": "3d1e8519-690c-55f0-bd05-1e7b97fb6633"
          }
        ],
        "id": "1f37f550-9146-11e9-ac99-49159f6e60a9",
        "creationDate": "2019-06-17T21:23:16.903Z",
        "modifiedDate": "2019-06-18T16:19:23.396Z"
      }
    ]
}

export const packageObjects = {
    "package-objects": [
      {
        "_id": "5ca613969bb9cd13a7921787",
        "id": "com.acxiom.pipeline.steps.JDBCDataFrameReaderOptions",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"JDBC Data Frame Reader Options\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"url\":{\"type\":\"string\"},\"table\":{\"type\":\"string\"},\"predicates\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"readerOptions\":{\"$ref\":\"#/definitions/DataFrameReaderOptions\"}},\"definitions\":{\"DataFrameReaderOptions\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"format\":{\"type\":\"string\"},\"options\":{\"type\":\"object\",\"additionalProperties\":{\"type\":\"string\"}},\"schema\":{\"$ref\":\"#/definitions/Schema\"}}},\"Schema\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"attributes\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Attribute\"}}}},\"Attribute\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"name\":{\"type\":\"string\"},\"dataType\":{\"type\":\"string\"}}}}}",
        "creationDate": "2019-04-04T14:24:22.813Z",
        "modifiedDate": "2019-06-19T18:25:47.848Z"
      },
      {
        "_id": "5ca613969bb9cdbd05921788",
        "id": "com.acxiom.pipeline.steps.DataFrameReaderOptions",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Data Frame Reader Options\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"format\":{\"type\":\"string\"},\"options\":{\"type\":\"object\",\"additionalProperties\":{\"type\":\"string\"}},\"schema\":{\"$ref\":\"#/definitions/Schema\"}},\"definitions\":{\"Schema\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"attributes\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Attribute\"}}}},\"Attribute\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"name\":{\"type\":\"string\"},\"dataType\":{\"type\":\"string\"}}}}}",
        "creationDate": "2019-04-04T14:24:22.831Z",
        "modifiedDate": "2019-06-19T18:25:47.835Z"
      },
      {
        "_id": "5ca613969bb9cd41df921789",
        "id": "com.acxiom.pipeline.steps.Transformations",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Transformations\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"columnDetails\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/ColumnDetails\"}},\"filter\":{\"type\":\"string\"},\"standardizeColumnNames\":{}},\"definitions\":{\"ColumnDetails\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"outputField\":{\"type\":\"string\"},\"inputAliases\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"expression\":{\"type\":\"string\"}}}}}",
        "creationDate": "2019-04-04T14:24:22.835Z",
        "modifiedDate": "2019-06-19T18:25:47.841Z"
      },
      {
        "_id": "5ca613969bb9cd48fd92178a",
        "id": "com.acxiom.pipeline.steps.DataFrameWriterOptions",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Data Frame Writer Options\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"format\":{\"type\":\"string\"},\"saveMode\":{\"type\":\"string\"},\"options\":{\"type\":\"object\",\"additionalProperties\":{\"type\":\"string\"}},\"bucketingOptions\":{\"$ref\":\"#/definitions/BucketingOptions\"},\"partitionBy\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"sortBy\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"definitions\":{\"BucketingOptions\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"numBuckets\":{\"type\":\"integer\"},\"columns\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"numBuckets\"]}}}",
        "creationDate": "2019-04-04T14:24:22.839Z",
        "modifiedDate": "2019-06-19T18:25:47.838Z"
      },
      {
        "_id": "5ca613969bb9cd72d392178b",
        "id": "com.acxiom.pipeline.steps.Schema",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Schema\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"attributes\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Attribute\"}}},\"definitions\":{\"Attribute\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"name\":{\"type\":\"string\"},\"dataType\":{\"type\":\"string\"}}}}}",
        "creationDate": "2019-04-04T14:24:22.843Z",
        "modifiedDate": "2019-06-19T18:25:47.844Z"
      },
      {
        "_id": "5ca613969bb9cd365492178c",
        "id": "com.acxiom.pipeline.steps.JDBCDataFrameWriterOptions",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"JDBC Data Frame Writer Options\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"url\":{\"type\":\"string\"},\"table\":{\"type\":\"string\"},\"writerOptions\":{\"$ref\":\"#/definitions/DataFrameWriterOptions\"}},\"definitions\":{\"DataFrameWriterOptions\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"format\":{\"type\":\"string\"},\"saveMode\":{\"type\":\"string\"},\"options\":{\"type\":\"object\",\"additionalProperties\":{\"type\":\"string\"}},\"bucketingOptions\":{\"$ref\":\"#/definitions/BucketingOptions\"},\"partitionBy\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"sortBy\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}}},\"BucketingOptions\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"numBuckets\":{\"type\":\"integer\"},\"columns\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"numBuckets\"]}}}",
        "creationDate": "2019-04-04T14:24:22.848Z",
        "modifiedDate": "2019-06-19T18:25:47.851Z"
      },
      {
        "_id": "5cf0677d8c5e44a462933eb9",
        "id": "com.acxiom.pipeline.steps.CopyResults",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Copy Results\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"success\":{\"type\":\"boolean\"},\"fileSize\":{\"type\":\"integer\"},\"durationMS\":{\"type\":\"integer\"},\"startTime\":{\"type\":\"integer\",\"format\":\"utc-millisec\"},\"endTime\":{\"type\":\"integer\",\"format\":\"utc-millisec\"}},\"required\":[\"success\",\"fileSize\",\"durationMS\"]}",
        "creationDate": "2019-05-30T23:30:05.531Z",
        "modifiedDate": "2019-05-30T23:30:05.531Z"
      },
      {
        "_id": "5cf6ca5c8c5e440107933ebe",
        "id": "com.acxiom.msapi.audits.RecordLevelAudit",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Record Level Audit\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"dataCollectionId\":{\"type\":\"string\"},\"rules\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/RecordLevelValidationDetails\"}},\"summary\":{\"$ref\":\"#/definitions/RecordLevelValidationSummary\"},\"thresholds\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/RecordLevelValidationThresholds\"}}},\"definitions\":{\"RecordLevelValidationDetails\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"attributeName\":{\"type\":\"string\"},\"attributeId\":{\"type\":\"string\"},\"rule\":{\"type\":\"string\"},\"rowCount\":{\"type\":\"integer\"},\"approximated\":{\"type\":\"boolean\"}},\"required\":[\"rowCount\",\"approximated\"]},\"RecordLevelValidationSummary\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"inputCount\":{\"type\":\"integer\"},\"rejectCount\":{\"type\":\"integer\"},\"invalidCount\":{\"type\":\"integer\"},\"validCount\":{\"type\":\"integer\"},\"approximated\":{\"type\":\"boolean\"}},\"required\":[\"inputCount\",\"rejectCount\",\"invalidCount\",\"validCount\",\"approximated\"]},\"RecordLevelValidationThresholds\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"level\":{\"type\":\"string\"},\"rowCount\":{\"type\":\"integer\"},\"tripped\":{\"type\":\"boolean\"},\"attributeName\":{\"type\":\"string\"},\"attributeId\":{\"type\":\"string\"},\"rule\":{\"type\":\"string\"},\"action\":{\"type\":\"string\"},\"threshold\":{},\"approximated\":{\"type\":\"boolean\"}},\"required\":[\"rowCount\",\"tripped\",\"approximated\"]}}}",
        "creationDate": "2019-06-04T19:45:32.193Z",
        "modifiedDate": "2019-06-19T18:31:08.911Z"
      },
      {
        "_id": "5cf6ca5c8c5e441d82933ebf",
        "id": "com.acxiom.msapi.assets.DataStoreParameter",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Data Store Parameter\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"type\":{},\"parentAssetId\":{\"type\":\"string\"},\"schema\":{\"$ref\":\"#/definitions/Schema\"},\"partitionKey\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"partitionStrategy\":{},\"mergeStrategy\":{},\"format\":{},\"parentAsset\":{\"$ref\":\"#/definitions/DataAsset\"},\"useAssetIdForName\":{},\"useAttributeIdsForColumnNames\":{},\"updateKey\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"updateStrategy\":{},\"groupingKey\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"optimalSplitSizeMB\":{}},\"definitions\":{\"Schema\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"attributes\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Attribute\"}},\"validations\":{\"$ref\":\"#/definitions/SchemaValidations\"}}},\"Attribute\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"name\":{\"type\":\"string\"},\"attributeType\":{},\"headerName\":{\"type\":\"string\"},\"businessName\":{\"type\":\"string\"},\"actions\":{\"type\":\"array\",\"items\":{}},\"aliases\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"id\":{\"type\":\"string\"},\"validations\":{\"$ref\":\"#/definitions/AttributeValidations\"},\"required\":{},\"dateMasks\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"privacy\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"active\":{}}},\"AttributeValidations\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"thresholds\":{\"$ref\":\"#/definitions/RecordThresholds\"},\"rules\":{\"type\":\"object\",\"additionalProperties\":{}}}},\"RecordThresholds\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"error\":{\"$ref\":\"#/definitions/Threshold\"},\"warn\":{\"$ref\":\"#/definitions/Threshold\"},\"rejectRecord\":{},\"outputFlaggedRecords\":{}}},\"Threshold\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"percentage\":{}}},\"SchemaValidations\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"recordThresholds\":{\"$ref\":\"#/definitions/RecordThresholds\"},\"sendFlaggedFileDetails\":{\"$ref\":\"#/definitions/OutputOptions\"}}},\"OutputOptions\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"connectorId\":{\"type\":\"string\"},\"outputFileName\":{\"type\":\"string\"},\"namingPrefix\":{\"type\":\"string\"},\"namingSuffix\":{\"type\":\"string\"},\"compression\":{\"type\":\"string\"},\"encryptionKeyId\":{\"type\":\"string\"},\"characterSet\":{\"type\":\"string\"},\"recordDelimiter\":{\"type\":\"string\"},\"fieldDelimiter\":{\"type\":\"string\"},\"fieldEnclosing\":{\"type\":\"string\"},\"outputType\":{\"type\":\"string\"},\"mergeStrategy\":{\"type\":\"string\"}}},\"DataAsset\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"id\":{\"type\":\"string\"},\"tenantId\":{\"type\":\"string\"},\"coreId\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"temporary\":{},\"parameters\":{\"$ref\":\"#/definitions/DataAssetParameters\"},\"status\":{\"type\":\"string\"},\"hiveMeta\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/HiveTargetInformation\"}},\"locks\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/LockObject\"}},\"dataGroups\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}}},\"DataAssetParameters\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{}},\"HiveTargetInformation\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"objects\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/HiveObject\"}},\"targetTableDefinitions\":{\"$ref\":\"#/definitions/HiveTargetTableDefinitions\"},\"dataGroup\":{\"type\":\"string\"}}},\"HiveObject\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{}},\"HiveTargetTableDefinitions\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"targetTableName\":{\"type\":\"string\"},\"targetDatabase\":{\"type\":\"string\"},\"unMappedTableName\":{\"type\":\"string\"},\"unMappedDatabase\":{\"type\":\"string\"}}},\"LockObject\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"mode\":{\"type\":\"string\"},\"time\":{\"type\":\"string\"},\"externalProcessId\":{\"type\":\"string\"},\"externalProcessType\":{\"type\":\"string\"}}}}}",
        "creationDate": "2019-06-04T19:45:32.201Z",
        "modifiedDate": "2019-06-19T18:31:08.917Z"
      },
      {
        "_id": "5cf6ca5c8c5e442de2933ec0",
        "id": "com.acxiom.msapi.assets.DataAsset",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Data Asset\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"id\":{\"type\":\"string\"},\"tenantId\":{\"type\":\"string\"},\"coreId\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"temporary\":{},\"parameters\":{\"$ref\":\"#/definitions/DataAssetParameters\"},\"status\":{\"type\":\"string\"},\"hiveMeta\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/HiveTargetInformation\"}},\"locks\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/LockObject\"}},\"dataGroups\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"definitions\":{\"DataAssetParameters\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{}},\"HiveTargetInformation\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"objects\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/HiveObject\"}},\"targetTableDefinitions\":{\"$ref\":\"#/definitions/HiveTargetTableDefinitions\"},\"dataGroup\":{\"type\":\"string\"}}},\"HiveObject\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{}},\"HiveTargetTableDefinitions\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"targetTableName\":{\"type\":\"string\"},\"targetDatabase\":{\"type\":\"string\"},\"unMappedTableName\":{\"type\":\"string\"},\"unMappedDatabase\":{\"type\":\"string\"}}},\"LockObject\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"mode\":{\"type\":\"string\"},\"time\":{\"type\":\"string\"},\"externalProcessId\":{\"type\":\"string\"},\"externalProcessType\":{\"type\":\"string\"}}}}}",
        "creationDate": "2019-06-04T19:45:32.205Z",
        "modifiedDate": "2019-06-19T18:31:08.939Z"
      },
      {
        "_id": "5cf6ca5c8c5e44c4d9933ec1",
        "id": "com.acxiom.msapi.schema.Schema",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Schema\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"attributes\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Attribute\"}},\"validations\":{\"$ref\":\"#/definitions/SchemaValidations\"}},\"definitions\":{\"Attribute\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"name\":{\"type\":\"string\"},\"attributeType\":{},\"headerName\":{\"type\":\"string\"},\"businessName\":{\"type\":\"string\"},\"actions\":{\"type\":\"array\",\"items\":{}},\"aliases\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"id\":{\"type\":\"string\"},\"validations\":{\"$ref\":\"#/definitions/AttributeValidations\"},\"required\":{},\"dateMasks\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"privacy\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"active\":{}}},\"AttributeValidations\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"thresholds\":{\"$ref\":\"#/definitions/RecordThresholds\"},\"rules\":{\"type\":\"object\",\"additionalProperties\":{}}}},\"RecordThresholds\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"error\":{\"$ref\":\"#/definitions/Threshold\"},\"warn\":{\"$ref\":\"#/definitions/Threshold\"},\"rejectRecord\":{},\"outputFlaggedRecords\":{}}},\"Threshold\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"percentage\":{}}},\"SchemaValidations\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"recordThresholds\":{\"$ref\":\"#/definitions/RecordThresholds\"},\"sendFlaggedFileDetails\":{\"$ref\":\"#/definitions/OutputOptions\"}}},\"OutputOptions\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"connectorId\":{\"type\":\"string\"},\"outputFileName\":{\"type\":\"string\"},\"namingPrefix\":{\"type\":\"string\"},\"namingSuffix\":{\"type\":\"string\"},\"compression\":{\"type\":\"string\"},\"encryptionKeyId\":{\"type\":\"string\"},\"characterSet\":{\"type\":\"string\"},\"recordDelimiter\":{\"type\":\"string\"},\"fieldDelimiter\":{\"type\":\"string\"},\"fieldEnclosing\":{\"type\":\"string\"},\"outputType\":{\"type\":\"string\"},\"mergeStrategy\":{\"type\":\"string\"}}}}}",
        "creationDate": "2019-06-04T19:45:32.208Z",
        "modifiedDate": "2019-06-19T18:31:08.934Z"
      },
      {
        "_id": "5cf6ca5c8c5e44e51f933ec2",
        "id": "com.acxiom.msapi.feed.Feed",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Feed\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"type\":{},\"description\":{\"type\":\"string\"},\"tenantId\":{\"type\":\"string\"},\"status\":{},\"coreId\":{\"type\":\"string\"},\"input\":{\"$ref\":\"#/definitions/Input\"},\"output\":{\"$ref\":\"#/definitions/Output\"},\"createdFromDataCollectionId\":{\"type\":\"string\"},\"encryptionKeyId\":{\"type\":\"string\"},\"pipelines\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"additionalProperties\":{}}},\"schedule\":{\"$ref\":\"#/definitions/Schedule\"},\"tracking\":{\"$ref\":\"#/definitions/Tracking\"},\"acceptanceRules\":{\"$ref\":\"#/definitions/FeedAcceptanceRules\"},\"dataGroups\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"processing\":{\"$ref\":\"#/definitions/Processing\"},\"copyFromFeedId\":{\"type\":\"string\"}},\"definitions\":{\"Input\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"connectorId\":{\"type\":\"string\"},\"schema\":{\"$ref\":\"#/definitions/Schema\"},\"file\":{\"$ref\":\"#/definitions/File\"},\"feed\":{\"$ref\":\"#/definitions/InputFeed\"},\"pauseOnDuplicateDetection\":{}}},\"Schema\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"attributes\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Attribute\"}},\"validations\":{\"$ref\":\"#/definitions/SchemaValidations\"}}},\"Attribute\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"name\":{\"type\":\"string\"},\"attributeType\":{},\"headerName\":{\"type\":\"string\"},\"businessName\":{\"type\":\"string\"},\"actions\":{\"type\":\"array\",\"items\":{}},\"aliases\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"id\":{\"type\":\"string\"},\"validations\":{\"$ref\":\"#/definitions/AttributeValidations\"},\"required\":{},\"dateMasks\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"privacy\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"active\":{}}},\"AttributeValidations\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"thresholds\":{\"$ref\":\"#/definitions/RecordThresholds\"},\"rules\":{\"type\":\"object\",\"additionalProperties\":{}}}},\"RecordThresholds\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"error\":{\"$ref\":\"#/definitions/Threshold\"},\"warn\":{\"$ref\":\"#/definitions/Threshold\"},\"rejectRecord\":{},\"outputFlaggedRecords\":{}}},\"Threshold\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"percentage\":{}}},\"SchemaValidations\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"recordThresholds\":{\"$ref\":\"#/definitions/RecordThresholds\"},\"sendFlaggedFileDetails\":{\"$ref\":\"#/definitions/OutputOptions\"}}},\"OutputOptions\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"connectorId\":{\"type\":\"string\"},\"outputFileName\":{\"type\":\"string\"},\"namingPrefix\":{\"type\":\"string\"},\"namingSuffix\":{\"type\":\"string\"},\"compression\":{\"type\":\"string\"},\"encryptionKeyId\":{\"type\":\"string\"},\"characterSet\":{\"type\":\"string\"},\"recordDelimiter\":{\"type\":\"string\"},\"fieldDelimiter\":{\"type\":\"string\"},\"fieldEnclosing\":{\"type\":\"string\"},\"outputType\":{\"type\":\"string\"},\"mergeStrategy\":{\"type\":\"string\"}}},\"File\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"path\":{\"type\":\"string\"},\"patterns\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"priority\":{},\"characterSet\":{\"type\":\"string\"},\"fieldDelimiter\":{\"type\":\"string\"},\"fieldEnclosing\":{\"type\":\"string\"},\"recordDelimiter\":{\"type\":\"string\"},\"skipRecords\":{}}},\"InputFeed\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"feedId\":{\"type\":\"string\"},\"dataAssetId\":{\"type\":\"string\"}}},\"Output\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"connectorId\":{\"type\":\"string\"},\"mergeStrategy\":{},\"partitionKey\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"partitionStrategy\":{},\"assetName\":{\"type\":\"string\"},\"dataAssetId\":{\"type\":\"string\"},\"mappings\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Mapping\"}},\"mappedDataAssetIds\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"outputDataDetails\":{\"$ref\":\"#/definitions/OutputOptions\"}}},\"Mapping\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"inputFields\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"inputMetaFields\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"staticValue\":{\"type\":\"string\"},\"outputField\":{\"type\":\"string\"},\"dataCategoryId\":{\"type\":\"string\"},\"steps\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/MappingStep\"}},\"extension\":{\"$ref\":\"#/definitions/Extension\"}}},\"MappingStep\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"id\":{\"type\":\"string\"},\"stepId\":{\"type\":\"string\"},\"parameters\":{\"type\":\"object\",\"additionalProperties\":{}}}},\"Extension\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"name\":{\"type\":\"string\"},\"attributeType\":{\"type\":\"string\"},\"headerName\":{\"type\":\"string\"},\"businessName\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"}}},\"Schedule\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"feedType\":{\"type\":\"string\"},\"calendar\":{\"$ref\":\"#/definitions/Calendar\"}}},\"Calendar\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"arrivalTime\":{\"type\":\"string\"},\"gracePeriod\":{},\"recurenceType\":{},\"recurence\":{\"$ref\":\"#/definitions/Recurence\"}}},\"Recurence\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"recurEvery\":{\"type\":\"object\",\"additionalProperties\":{}},\"recurOn\":{\"type\":\"object\",\"additionalProperties\":{}},\"recurDay\":{\"type\":\"object\",\"additionalProperties\":{}},\"recurMonth\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}}},\"Tracking\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"lastModifiedUser\":{\"type\":\"string\"},\"lastModifiedDate\":{\"type\":\"string\"}}},\"FeedAcceptanceRules\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"failOnNewAttribute\":{\"type\":\"boolean\"},\"pelPrefix\":{\"type\":\"string\"},\"attributeRules\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/AttributeAcceptanceRules\"}}},\"required\":[\"failOnNewAttribute\"]},\"AttributeAcceptanceRules\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"columnName\":{\"type\":\"string\"},\"approvedBy\":{\"type\":\"string\"},\"avgLengthRange\":{\"type\":\"array\",\"items\":{}},\"minPctEncrypted\":{},\"minPctPel\":{},\"minRowsPerValue\":{},\"maxValuesToShow\":{},\"columnId\":{\"type\":\"string\"}}},\"Processing\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"optimize\":{},\"processWithParent\":{},\"restartWithParent\":{}}}}}",
        "creationDate": "2019-06-04T19:45:32.212Z",
        "modifiedDate": "2019-06-19T18:31:08.944Z"
      },
      {
        "_id": "5cf6ca5c8c5e44445c933ec3",
        "id": "com.acxiom.msapi.audits.CollectionCharacteristics",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Collection Characteristics\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"rowCount\":{\"type\":\"integer\"},\"recordDelimiter\":{\"type\":\"string\"},\"fieldDelimiter\":{\"type\":\"string\"},\"fieldEnclosing\":{\"type\":\"string\"},\"characterSet\":{\"type\":\"string\"},\"skipRecords\":{},\"encryptionKeyId\":{\"type\":\"string\"},\"attributeCharacteristics\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/AttributeCharacteristics\"}}},\"required\":[\"rowCount\"],\"definitions\":{\"AttributeCharacteristics\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"columnNumber\":{\"type\":\"integer\"},\"columnName\":{\"type\":\"string\"},\"dataType\":{},\"headerColumnName\":{\"type\":\"string\"},\"businessColumnName\":{\"type\":\"string\"},\"sampleSize\":{\"type\":\"integer\"},\"nullCount\":{\"type\":\"integer\"},\"distinctValueCount\":{\"type\":\"integer\"},\"avgLength\":{\"type\":\"number\"},\"stdDev\":{\"type\":\"number\"},\"pctEncrypted\":{\"type\":\"number\"},\"pctPel\":{\"type\":\"number\"},\"uniqueValueRows\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/ValueCounts\"}},\"values\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/ValueCounts\"}},\"dateMasks\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/ValueCounts\"}},\"sample\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"id\":{\"type\":\"string\"},\"confidence\":{}},\"required\":[\"columnNumber\",\"sampleSize\",\"nullCount\",\"avgLength\",\"stdDev\",\"pctEncrypted\",\"pctPel\"]},\"ValueCounts\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"value\":{\"type\":\"string\"},\"count\":{\"type\":\"integer\"}},\"required\":[\"count\"]}}}",
        "creationDate": "2019-06-04T19:45:32.215Z",
        "modifiedDate": "2019-06-19T18:31:08.949Z"
      },
      {
        "_id": "5d0a7e0714d882efe6126397",
        "id": "com.acxiom.msapi.audits.Validations",
        "creationDate": "2019-06-19T18:25:11.012Z",
        "modifiedDate": "2019-06-19T18:31:08.922Z",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Validations\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"validationMessages\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/ValidationMessage\"}},\"characteristics\":{\"$ref\":\"#/definitions/CollectionCharacteristics\"}},\"definitions\":{\"ValidationMessage\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"messageType\":{},\"message\":{\"type\":\"string\"}}},\"CollectionCharacteristics\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"rowCount\":{\"type\":\"integer\"},\"recordDelimiter\":{\"type\":\"string\"},\"fieldDelimiter\":{\"type\":\"string\"},\"fieldEnclosing\":{\"type\":\"string\"},\"characterSet\":{\"type\":\"string\"},\"skipRecords\":{},\"encryptionKeyId\":{\"type\":\"string\"},\"attributeCharacteristics\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/AttributeCharacteristics\"}}},\"required\":[\"rowCount\"]},\"AttributeCharacteristics\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"columnNumber\":{\"type\":\"integer\"},\"columnName\":{\"type\":\"string\"},\"dataType\":{},\"headerColumnName\":{\"type\":\"string\"},\"businessColumnName\":{\"type\":\"string\"},\"sampleSize\":{\"type\":\"integer\"},\"nullCount\":{\"type\":\"integer\"},\"distinctValueCount\":{\"type\":\"integer\"},\"avgLength\":{\"type\":\"number\"},\"stdDev\":{\"type\":\"number\"},\"pctEncrypted\":{\"type\":\"number\"},\"pctPel\":{\"type\":\"number\"},\"uniqueValueRows\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/ValueCounts\"}},\"values\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/ValueCounts\"}},\"dateMasks\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/ValueCounts\"}},\"sample\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"id\":{\"type\":\"string\"},\"confidence\":{}},\"required\":[\"columnNumber\",\"sampleSize\",\"nullCount\",\"avgLength\",\"stdDev\",\"pctEncrypted\",\"pctPel\"]},\"ValueCounts\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"value\":{\"type\":\"string\"},\"count\":{\"type\":\"integer\"}},\"required\":[\"count\"]}}}"
      },
      {
        "_id": "5d0a7e0714d882efe61263a6",
        "id": "com.acxiom.msapi.datacollection.DataCollection",
        "creationDate": "2019-06-19T18:25:11.017Z",
        "modifiedDate": "2019-06-19T18:31:08.928Z",
        "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"title\":\"Data Collection\",\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"id\":{\"type\":\"string\"},\"tenantId\":{\"type\":\"string\"},\"coreId\":{\"type\":\"string\"},\"feedId\":{\"type\":\"string\"},\"initialDate\":{\"type\":\"string\"},\"startDate\":{\"type\":\"string\"},\"completeDate\":{\"type\":\"string\"},\"runTime\":{},\"source\":{\"$ref\":\"#/definitions/Source\"},\"activity\":{\"$ref\":\"#/definitions/Activity\"},\"activityHistory\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Activity\"}},\"acceptanceRuleOverrides\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/AttributeAcceptanceRules\"}},\"pipelineParameters\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"additionalProperties\":{}}},\"dataAssets\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/CollectionDataAsset\"}},\"validationComplete\":{},\"feedName\":{\"type\":\"string\"},\"duplicate\":{\"$ref\":\"#/definitions/Duplicate\"},\"children\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/DataCollection\"}},\"jobQueueDate\":{\"type\":\"string\"},\"processingOverrides\":{\"$ref\":\"#/definitions/Processing\"}},\"definitions\":{\"Source\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"instanceId\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"dataCollectionId\":{\"type\":\"string\"},\"critical\":{},\"locationId\":{},\"containsSensitiveData\":{},\"groupId\":{\"type\":\"string\"},\"externalGroupId\":{\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"encryptionKeyId\":{\"type\":\"string\"},\"size\":{},\"lastModifiedDate\":{},\"connectorId\":{\"type\":\"string\"},\"encryptedMd5\":{\"type\":\"string\"},\"unencryptedMd5\":{\"type\":\"string\"}}},\"Activity\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"type\":{\"type\":\"string\"},\"detail\":{\"type\":\"string\"},\"date\":{\"type\":\"string\"},\"metrics\":{\"$ref\":\"#/definitions/Metrics\"},\"details\":{\"type\":\"object\",\"additionalProperties\":{}},\"externalProcess\":{\"$ref\":\"#/definitions/ExternalProcess\"}}},\"Metrics\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"rejectedRecords\":{},\"totalRecords\":{}}},\"ExternalProcess\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"externalProcessId\":{\"type\":\"string\"},\"externalProcessType\":{\"type\":\"string\"}}},\"AttributeAcceptanceRules\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"columnName\":{\"type\":\"string\"},\"approvedBy\":{\"type\":\"string\"},\"avgLengthRange\":{\"type\":\"array\",\"items\":{}},\"minPctEncrypted\":{},\"minPctPel\":{},\"minRowsPerValue\":{},\"maxValuesToShow\":{},\"columnId\":{\"type\":\"string\"}}},\"CollectionDataAsset\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"assetId\":{\"type\":\"string\"},\"lineage\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/CollectionLineageDataAsset\"}},\"status\":{\"type\":\"string\"}}},\"CollectionLineageDataAsset\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"pipelineId\":{\"type\":\"string\"},\"stepId\":{\"type\":\"string\"},\"resourceType\":{}}},\"Duplicate\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"parentDataCollectionId\":{\"type\":\"string\"},\"nameMatch\":{\"$ref\":\"#/definitions/NameMatch\"},\"patternMatch\":{\"$ref\":\"#/definitions/PatternMatch\"},\"encryptedMD5\":{},\"unencryptedMD5\":{},\"parentDataCollectionName\":{\"type\":\"string\"},\"override\":{\"$ref\":\"#/definitions/DuplicateOverride\"}}},\"NameMatch\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"sizeFlagged\":{},\"dateFlagged\":{}}},\"PatternMatch\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"sizeFlagged\":{},\"dateFlagged\":{}}},\"DuplicateOverride\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"processAsNew\":{},\"date\":{\"type\":\"string\"},\"userId\":{\"type\":\"string\"}}},\"DataCollection\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"id\":{\"type\":\"string\"},\"tenantId\":{\"type\":\"string\"},\"coreId\":{\"type\":\"string\"},\"feedId\":{\"type\":\"string\"},\"initialDate\":{\"type\":\"string\"},\"startDate\":{\"type\":\"string\"},\"completeDate\":{\"type\":\"string\"},\"runTime\":{},\"source\":{\"$ref\":\"#/definitions/Source\"},\"activity\":{\"$ref\":\"#/definitions/Activity\"},\"activityHistory\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Activity\"}},\"acceptanceRuleOverrides\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/AttributeAcceptanceRules\"}},\"pipelineParameters\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"additionalProperties\":{}}},\"dataAssets\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/CollectionDataAsset\"}},\"validationComplete\":{},\"feedName\":{\"type\":\"string\"},\"duplicate\":{\"$ref\":\"#/definitions/Duplicate\"},\"children\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/DataCollection\"}},\"jobQueueDate\":{\"type\":\"string\"},\"processingOverrides\":{\"$ref\":\"#/definitions/Processing\"}}},\"Processing\":{\"type\":\"object\",\"additionalProperties\":false,\"properties\":{\"optimize\":{},\"processWithParent\":{},\"restartWithParent\":{}}}}}"
      }
    ]
};

export const aplications = {
  "applications": [
    {
      "_id": "5cab8ed9091ac2c19329dcc1",
      "name": "test",
      "globals": {
        
      },
      "executions": [
        {
          "id": "test a",
          "pipelineIds": [
            "b0318ed0-57d1-11e9-85d2-29bb75bc15e9"
          ],
          "pipelines": [
            
          ]
        },
        {
          "id": "test b",
          "pipelineIds": [
            "6f399d30-57d8-11e9-85d2-29bb75bc15e9"
          ],
          "pipelines": [
            
          ],
          "parents": [
            "test a"
          ]
        }
      ],
      "pipelines": [
        {
          "_id": "5ca7a01cab4f68476b49be6e",
          "name": "test",
          "steps": [
            {
              "id": "load test",
              "displayName": "Load DataFrame from HDFS path",
              "description": "This step will read a dataFrame from the given HDFS path",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "path",
                  "required": false,
                  "value": "!inFile"
                },
                {
                  "type": "object",
                  "name": "options",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
                }
              ],
              "engineMeta": {
                "spark": "HDFSSteps.readFromPath"
              },
              "creationDate": "2019-04-04T14:24:22.875Z",
              "modifiedDate": "2019-04-04T14:24:22.875Z",
              "stepId": "87db259d-606e-46eb-b723-82923349640f"
            }
          ],
          "id": "b0318ed0-57d1-11e9-85d2-29bb75bc15e9",
          "creationDate": "2019-04-05T18:36:12.739Z",
          "modifiedDate": "2019-04-05T18:37:07.082Z"
        },
        {
          "_id": "5ca7ab6eab4f683c6849be6f",
          "name": "test2",
          "steps": [
            {
              "id": "test load",
              "displayName": "Load DataFrame from HDFS path",
              "description": "This step will read a dataFrame from the given HDFS path",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "path",
                  "required": false,
                  "value": "!inPath"
                },
                {
                  "type": "object",
                  "name": "options",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
                }
              ],
              "engineMeta": {
                "spark": "HDFSSteps.readFromPath"
              },
              "creationDate": "2019-04-04T14:24:22.875Z",
              "modifiedDate": "2019-04-04T14:24:22.875Z",
              "stepId": "87db259d-606e-46eb-b723-82923349640f"
            }
          ],
          "id": "6f399d30-57d8-11e9-85d2-29bb75bc15e9",
          "creationDate": "2019-04-05T19:24:30.214Z",
          "modifiedDate": "2019-04-05T19:24:30.214Z"
        }
      ],
      "id": "c03f6590-5a29-11e9-aa07-a58054497ebb",
      "creationDate": "2019-04-08T18:11:37.708Z",
      "modifiedDate": "2019-04-08T20:57:29.988Z"
    },
    {
      "_id": "5cabb5fbb618a23f5c323cec",
      "name": "test2",
      "globals": {
        
      },
      "executions": [
        {
          "id": "test a",
          "pipelineIds": [
            "b0318ed0-57d1-11e9-85d2-29bb75bc15e9"
          ],
          "pipelines": [
            
          ],
          "globals": {
            
          }
        },
        {
          "id": "test b",
          "pipelineIds": [
            "6f399d30-57d8-11e9-85d2-29bb75bc15e9"
          ],
          "pipelines": [
            
          ],
          "parents": [
            "test a"
          ],
          "globals": {
            
          }
        },
        {
          "id": "test c",
          "pipelineIds": [
            "7fef3fb0-5d30-11e9-b761-a9a8d6eac9c4"
          ],
          "pipelines": [
            
          ],
          "parents": [
            "test a"
          ],
          "globals": {
            
          }
        }
      ],
      "pipelines": [
        {
          "_id": "5ca7a01cab4f68476b49be6e",
          "name": "test",
          "steps": [
            {
              "id": "load test",
              "displayName": "Load DataFrame from HDFS path",
              "description": "This step will read a dataFrame from the given HDFS path",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "path",
                  "required": false,
                  "value": "!inFile"
                },
                {
                  "type": "object",
                  "name": "options",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
                }
              ],
              "engineMeta": {
                "spark": "HDFSSteps.readFromPath"
              },
              "creationDate": "2019-04-04T14:24:22.875Z",
              "modifiedDate": "2019-04-04T14:24:22.875Z",
              "stepId": "87db259d-606e-46eb-b723-82923349640f"
            }
          ],
          "id": "b0318ed0-57d1-11e9-85d2-29bb75bc15e9",
          "creationDate": "2019-04-05T18:36:12.739Z",
          "modifiedDate": "2019-04-05T18:37:07.082Z"
        },
        {
          "_id": "5ca7ab6eab4f683c6849be6f",
          "name": "test2",
          "steps": [
            {
              "id": "test load",
              "displayName": "Load DataFrame from HDFS path",
              "description": "This step will read a dataFrame from the given HDFS path",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "path",
                  "required": false,
                  "value": "!inPath"
                },
                {
                  "type": "object",
                  "name": "options",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
                }
              ],
              "engineMeta": {
                "spark": "HDFSSteps.readFromPath"
              },
              "creationDate": "2019-04-04T14:24:22.875Z",
              "modifiedDate": "2019-04-04T14:24:22.875Z",
              "stepId": "87db259d-606e-46eb-b723-82923349640f"
            }
          ],
          "id": "6f399d30-57d8-11e9-85d2-29bb75bc15e9",
          "creationDate": "2019-04-05T19:24:30.214Z",
          "modifiedDate": "2019-04-05T19:24:30.214Z"
        },
        {
          "_id": "5cb0a2a9607415226feb6229",
          "name": "Aggies",
          "steps": [
            {
              "id": "Load",
              "displayName": "Load DataFrame from HDFS path",
              "description": "This step will read a dataFrame from the given HDFS path",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "path",
                  "type": "text",
                  "value": "/landing/test.csv",
                  "required": false
                },
                {
                  "type": "object",
                  "name": "options",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions"
                }
              ],
              "engineMeta": {
                "spark": "HDFSSteps.readFromPath"
              },
              "creationDate": "2019-04-04T14:24:22.875Z",
              "modifiedDate": "2019-04-04T14:24:22.875Z",
              "stepId": "87db259d-606e-46eb-b723-82923349640f",
              "nextStepId": "Filter"
            },
            {
              "id": "Filter",
              "displayName": "Filter a DataFrame",
              "description": "This step will filter a dataframe based on the where expression provided",
              "type": "Pipeline",
              "category": "Transforms",
              "params": [
                {
                  "type": "text",
                  "name": "dataFrame",
                  "required": false,
                  "value": "@Load"
                },
                {
                  "name": "expression",
                  "type": "text",
                  "value": "",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "TransformationSteps.applyFilter"
              },
              "creationDate": "2019-04-04T14:24:22.976Z",
              "modifiedDate": "2019-04-04T14:24:22.976Z",
              "stepId": "fa0fcabb-d000-4a5e-9144-692bca618ddb",
              "nextStepId": "Write"
            },
            {
              "id": "Write",
              "displayName": "Write DataFrame to HDFS",
              "description": "This step will write a dataFrame in a given format to HDFS",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "dataFrame",
                  "type": "text",
                  "value": "@Filter",
                  "required": false
                },
                {
                  "name": "path",
                  "type": "text",
                  "value": "/raw/my_parquet",
                  "required": false
                },
                {
                  "name": "options",
                  "type": "object",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.DataFrameWriterOptions"
                }
              ],
              "engineMeta": {
                "spark": "HDFSSteps.writeToPath"
              },
              "creationDate": "2019-04-04T14:24:22.889Z",
              "modifiedDate": "2019-04-04T14:24:22.889Z",
              "stepId": "0a296858-e8b7-43dd-9f55-88d00a7cd8fa"
            }
          ],
          "id": "7fef3fb0-5d30-11e9-b761-a9a8d6eac9c4",
          "creationDate": "2019-04-12T14:37:29.774Z",
          "modifiedDate": "2019-04-12T14:37:29.774Z"
        }
      ],
      "id": "1308aae0-5a41-11e9-b4e4-75b75d3f3fac",
      "creationDate": "2019-04-08T20:58:35.030Z",
      "modifiedDate": "2019-04-12T14:40:18.578Z"
    },
    {
      "_id": "5ced8f787b60af34eb1ffd3e",
      "name": "ebalog_download",
      "globals": {
        
      },
      "executions": [
        {
          "id": "parquet",
          "pipelineIds": [
            "0129ee10-8633-11e9-ac99-49159f6e60a9"
          ],
          "pipelines": [
            
          ],
          "globals": {
            
          }
        }
      ],
      "pipelines": [
        {
          "_id": "5cf5703b8c5e443e54933eba",
          "name": "ebalog_parquet",
          "steps": [
            {
              "id": "SFTP_Manager",
              "displayName": "Create SFTP FileManager",
              "description": "Simple function to generate the SFTPFileManager for the remote SFTP file system",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "hostName",
                  "type": "text",
                  "value": "!sftp_host",
                  "required": false
                },
                {
                  "name": "username",
                  "type": "text",
                  "value": "!sftp_user",
                  "required": false
                },
                {
                  "name": "password",
                  "type": "text",
                  "value": "!sftp_pass",
                  "required": false
                },
                {
                  "name": "port",
                  "type": "integer",
                  "value": "!sftp_port",
                  "required": false
                },
                {
                  "name": "strictHostChecking",
                  "type": "boolean",
                  "value": "false",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "SFTPSteps.createFileManager",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-05-28T19:10:59.281Z",
              "modifiedDate": "2019-06-07T00:10:31.084Z",
              "stepId": "9d467cb0-8b3d-40a0-9ccd-9cf8c5b6cb38",
              "nextStepId": "HDFS_Manager"
            },
            {
              "id": "HDFS_Manager",
              "displayName": "Create HDFS FileManager",
              "description": "Simple function to generate the HDFSFileManager for the local HDFS file system",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                
              ],
              "engineMeta": {
                "spark": "HDFSSteps.createFileManager",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-05-28T18:54:44.836Z",
              "modifiedDate": "2019-05-28T18:54:44.836Z",
              "stepId": "e4dad367-a506-5afd-86c0-82c2cf5cd15c",
              "nextStepId": "Download"
            },
            {
              "id": "Download",
              "displayName": "Buffered file copy",
              "description": "Copy the contents of the source path to the destination path using full buffer sizes. This function will call connect on both FileManagers.",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "srcFS",
                  "type": "text",
                  "value": "@SFTP_FileManager",
                  "required": false
                },
                {
                  "name": "srcPath",
                  "type": "text",
                  "value": "!sftp_input_path",
                  "required": false
                },
                {
                  "name": "destFS",
                  "type": "text",
                  "value": "@HDFS_FileManager",
                  "required": false
                },
                {
                  "name": "destPath",
                  "type": "text",
                  "value": "!landing_path",
                  "required": false
                },
                {
                  "type": "integer",
                  "name": "inputBufferSize",
                  "required": false,
                  "value": "!input_buffer_size"
                },
                {
                  "name": "outputBufferSize",
                  "type": "integer",
                  "value": "!output_buffer_size",
                  "required": false
                },
                {
                  "name": "copyBufferSize",
                  "type": "integer",
                  "value": "!read_buffer_size",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "FileManagerSteps.copy",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-05-28T18:54:44.883Z",
              "modifiedDate": "2019-06-07T00:11:00.761Z",
              "stepId": "f5a24db0-e91b-5c88-8e67-ab5cff09c883",
              "nextStepId": "DisconnectSFTP"
            },
            {
              "id": "DisconnectSFTP",
              "displayName": "Disconnect a FileManager",
              "description": "Disconnects a FileManager from the underlying file system",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "fileManager",
                  "type": "text",
                  "value": "@SFTP_FileManager",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "FileManagerSteps.disconnectFileManager",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-05-28T18:54:44.887Z",
              "modifiedDate": "2019-05-28T18:54:44.887Z",
              "stepId": "3d1e8519-690c-55f0-bd05-1e7b97fb6633",
              "nextStepId": "LoadLandingFile"
            },
            {
              "id": "LoadLandingFile",
              "displayName": "Load DataFrame from HDFS path",
              "description": "This step will read a dataFrame from the given HDFS path",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "path",
                  "type": "text",
                  "value": "!landing_path",
                  "required": false
                },
                {
                  "name": "options",
                  "type": "object",
                  "value": {
                    "format": "csv",
                    "options": {
                      "header": "true",
                      "delimiter": "|"
                    },
                    "schema": {
                      "attributes": [
                        
                      ]
                    }
                  },
                  "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "HDFSSteps.readFromPath"
              },
              "creationDate": "2019-04-04T14:24:22.875Z",
              "modifiedDate": "2019-04-04T14:24:22.875Z",
              "stepId": "87db259d-606e-46eb-b723-82923349640f",
              "executeIfEmpty": "",
              "nextStepId": "SplitDataFrame"
            },
            {
              "id": "SplitDataFrame",
              "displayName": "Custom Step to Split Dataframe Based on Input Size",
              "description": "This step re-splits dataframe based on file size to get close to 128M per split",
              "type": "Pipeline",
              "category": "EdsStuff",
              "params": [
                {
                  "name": "dataFrame",
                  "type": "text",
                  "value": "@LoadLandingFile",
                  "required": false
                },
                {
                  "name": "hdfsFM",
                  "type": "text",
                  "value": "@HDFSFileManager",
                  "required": false
                },
                {
                  "name": "path",
                  "type": "text",
                  "value": "!landing_path",
                  "required": false
                },
                {
                  "name": "splitMode",
                  "type": "text",
                  "value": "!split_mode",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "EdSteps.splitDataFrameOnFileSize",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-06-03T20:31:40.580Z",
              "modifiedDate": "2019-06-03T20:31:40.580Z",
              "stepId": "ea4ffd1e-0066-4bde-9c92-1e34db61b9b3",
              "nextStepId": "WriteToParquet"
            },
            {
              "id": "WriteToParquet",
              "displayName": "Custom Write a DataFrame to Parquet DataStore with Metrics",
              "description": "This step will write a dataFrame to a Parquet data store and return run time metrics",
              "type": "Pipeline",
              "category": "EdsStuff",
              "params": [
                {
                  "name": "dataFrame",
                  "type": "text",
                  "value": "@SplitDataFrame",
                  "required": false
                },
                {
                  "name": "hdfsFileManager",
                  "type": "text",
                  "value": "@HDFSFileManager",
                  "required": false
                },
                {
                  "name": "path",
                  "type": "text",
                  "value": "!parquet_path",
                  "required": false
                },
                {
                  "name": "splitMode",
                  "type": "text",
                  "value": "!split_mode",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "EdSteps.writeToParquet",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-06-03T20:38:14.661Z",
              "modifiedDate": "2019-06-03T20:39:02.547Z",
              "stepId": "6fefd9f0-4c20-47e7-a655-ad203683d9c3",
              "nextStepId": "SaveResults"
            },
            {
              "id": "SaveResults",
              "displayName": "Custom Step to Compile Parquet Research Results",
              "description": "This step compiles results from a copy step to be enhanced and written to disk",
              "type": "Pipeline",
              "category": "EdsStuff",
              "params": [
                {
                  "name": "results",
                  "type": "object",
                  "value": "@WriteToParquet",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.CopyResults"
                },
                {
                  "type": "object",
                  "name": "dlResults",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.CopyResults"
                }
              ],
              "engineMeta": {
                "spark": "EdSteps.writeParquetResultsToFile",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-06-03T20:31:40.563Z",
              "modifiedDate": "2019-06-07T00:03:22.701Z",
              "stepId": "fa4803a1-e705-4cc8-988e-ba981f4335cd",
              "executeIfEmpty": ""
            }
          ],
          "id": "0129ee10-8633-11e9-ac99-49159f6e60a9",
          "creationDate": "2019-06-03T19:08:43.252Z",
          "modifiedDate": "2019-06-07T00:11:53.202Z"
        }
      ],
      "id": "ec273420-8180-11e9-8b4f-9b89e27b8b39",
      "creationDate": "2019-05-28T19:43:52.934Z",
      "modifiedDate": "2019-06-07T00:12:44.350Z",
      "sparkConf": {
        "kryoClasses": [
          "org.apache.hadoop.io.LongWritable",
          "org.apache.http.client.entity.UrlEncodedFormEntity"
        ],
        "setOptions": [
          {
            "name": "spark.hadoop.io.compression.codecs",
            "value": "org.apache.hadoop.io.compress.BZip2Codec,org.apache.hadoop.io.compress.DeflateCodec,org.apache.hadoop.io.compress.Lz4Codec,org.apache.hadoop.io.compress.SnappyCodec,org.apache.hadoop.io.compress.GzipCodec"
          },
          {
            "name": "applicationConfigurationLoader",
            "value": "com.acxiom.pipeline.fs.HDFSFileManager"
          }
        ]
      },
      "stepPackages": [
        "com.acxiom.pipeline.steps",
        "com.acxiom.pipeline"
      ],
      "requiredParameters": [
        "sftp_input_path",
        "landing_path",
        "read_buffer_size",
        "input_buffer_size",
        "output_buffer_size"
      ]
    },
    {
      "_id": "5cf875ab7b60afb8f41ffd83",
      "name": "Original Inbound",
      "globals": {
        
      },
      "executions": [
        {
          "id": "Ingest to Raw",
          "pipelineIds": [
            "ff8428d0-879c-11e9-8b4f-9b89e27b8b39"
          ],
          "pipelines": [
            
          ],
          "globals": {
            
          }
        }
      ],
      "pipelines": [
        {
          "_id": "5cf7cf8e7b60aff13a1ffd82",
          "name": "Ingest to Raw Zone",
          "steps": [
            {
              "id": "SetStatusForDownload",
              "displayName": "Update Status of an Existing DataCollection",
              "description": "This step will update the status of a data collection by calling the data collection patch endpoint",
              "type": "Pipeline",
              "category": "ApiInteraction",
              "params": [
                {
                  "name": "status",
                  "type": "text",
                  "value": "\"Processing\"",
                  "required": false
                },
                {
                  "name": "detail",
                  "type": "text",
                  "value": "\"Begin Download from External Site\"",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "DataCollectionSteps.registerActivity",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.085Z",
              "modifiedDate": "2019-06-04T19:45:30.085Z",
              "stepId": "7f797630-753f-586d-8836-9b500b00c49f",
              "nextStepId": "DownloadFile"
            },
            {
              "id": "DownloadFile",
              "displayName": "Downloads a File",
              "description": "This step downloads a file using the provided data asset and data collection objects",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "dataAsset",
                  "required": false,
                  "value": "!landing_asset"
                },
                {
                  "name": "dataCollection",
                  "type": "text",
                  "value": "!dataCollection",
                  "required": false
                },
                {
                  "name": "encryptOnWrite",
                  "type": "text",
                  "value": "$encryptOnWrite || false",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "FileSteps.downloadFile",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.150Z",
              "modifiedDate": "2019-06-04T19:45:30.150Z",
              "stepId": "8d8e99b0-b2da-5f19-8e3d-78eefe614392",
              "nextStepId": "SetStatusDecrypting"
            },
            {
              "id": "SetStatusDecrypting",
              "displayName": "Update Status of an Existing DataCollection",
              "description": "This step will update the status of a data collection by calling the data collection patch endpoint",
              "type": "Pipeline",
              "category": "ApiInteraction",
              "params": [
                {
                  "name": "status",
                  "type": "text",
                  "value": "\"Processing\"",
                  "required": false
                },
                {
                  "name": "detail",
                  "type": "text",
                  "value": "\"Encryptioning/Decrypting Landing Asset\"",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "DataCollectionSteps.registerActivity",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.085Z",
              "modifiedDate": "2019-06-04T19:45:30.085Z",
              "stepId": "7f797630-753f-586d-8836-9b500b00c49f",
              "nextStepId": "HandleEncryptionOnLandingFile"
            },
            {
              "id": "HandleEncryptionOnLandingFile",
              "displayName": "Decrypts DataAsset",
              "description": "This step gets decrypted DataAsset and persists in on file system with encryption if not already encrypted",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "dataAsset",
                  "type": "text",
                  "value": "!landing_asset",
                  "required": false
                },
                {
                  "type": "text",
                  "name": "feed",
                  "required": false,
                  "value": "!feed"
                }
              ],
              "engineMeta": {
                "spark": "FileSteps.decryptDataAsset",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.173Z",
              "modifiedDate": "2019-06-04T19:45:30.173Z",
              "stepId": "4d828bd2-d8fe-5574-a374-202a28e8554d",
              "nextStepId": "StatusLoadingFile"
            },
            {
              "id": "StatusLoadingFile",
              "displayName": "Update Status of an Existing DataCollection",
              "description": "This step will update the status of a data collection by calling the data collection patch endpoint",
              "type": "Pipeline",
              "category": "ApiInteraction",
              "params": [
                {
                  "name": "status",
                  "type": "text",
                  "value": "\"Processing\"",
                  "required": false
                },
                {
                  "name": "detail",
                  "type": "text",
                  "value": "\"Loading Landing File to Raw Zone\"",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "DataCollectionSteps.registerActivity",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.085Z",
              "modifiedDate": "2019-06-04T19:45:30.085Z",
              "stepId": "7f797630-753f-586d-8836-9b500b00c49f",
              "nextStepId": "CheckForDuplicateCollections"
            },
            {
              "id": "CheckForDuplicateCollections",
              "displayName": "Check for Potential Duplicate Collections",
              "description": "This step determines if the current data collection is a possible duplicate of another",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "encryptedDataAsset",
                  "type": "text",
                  "value": "#HandleEncryptionOnLandingFile.encryptedDataAsset",
                  "required": false
                },
                {
                  "name": "unencryptedDataAsset",
                  "type": "text",
                  "value": "@HandleEncryptionOnLandingFile",
                  "required": false
                },
                {
                  "name": "feed",
                  "type": "text",
                  "value": "!feed",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "FileSteps.checkDuplicateFile",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.178Z",
              "modifiedDate": "2019-06-04T19:45:30.178Z",
              "stepId": "1db3ae12-9b30-5d42-a596-cae8df3302a9",
              "nextStepId": "ValidateMimeType"
            },
            {
              "id": "ValidateMimeType",
              "displayName": "Validate Mime Type of a File DataAsset",
              "description": "This step validates the mime type of a file stored in a data asset",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "dataAsset",
                  "type": "text",
                  "value": "@HandleEncryptionOnLandingFile",
                  "required": false
                },
                {
                  "name": "supportedMimeTypes",
                  "type": "text",
                  "value": "Seq(\"text\")",
                  "language": "scala",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "FileSteps.validateSupportedMimeType",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.188Z",
              "modifiedDate": "2019-06-04T19:45:30.188Z",
              "stepId": "7663c5ce-a904-4d4f-aca5-5660317ec3af",
              "nextStepId": "GenerateParsingOptions"
            },
            {
              "id": "GenerateParsingOptions",
              "displayName": "Generate File Parsing Options for a DataAsset",
              "description": "This step evaluates data for a data asset to determine the file parsing options",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "dataAsset",
                  "type": "text",
                  "value": "@HandleEncryptionOnLandingFile",
                  "required": false
                },
                {
                  "name": "recordDelimiter",
                  "type": "text",
                  "value": "!feed.input.file.recordDelimiter",
                  "required": false
                },
                {
                  "type": "text",
                  "name": "fieldDelimiter",
                  "required": false,
                  "value": "!feed.input.file.fieldDelimiter"
                },
                {
                  "name": "fieldEnclosing",
                  "type": "text",
                  "value": "!feed.input.file.fieldEnclosing",
                  "required": false
                },
                {
                  "name": "characterSet",
                  "type": "text",
                  "value": "!feed.input.file.characterSet",
                  "required": false
                },
                {
                  "name": "skipRecords",
                  "type": "text",
                  "value": "!feed.input.file.skipRecords",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "FileSteps.generateFileParsingOptions",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.162Z",
              "modifiedDate": "2019-06-04T19:45:30.162Z",
              "stepId": "5433f741-1f48-498f-a497-c1218866b7e3",
              "nextStepId": "LoadLandingAsset"
            },
            {
              "id": "LoadLandingAsset",
              "displayName": "Loads a DataAsset to a DataFrame Using FileParsingOptions",
              "description": "This step loads a data asset to a data frame using file parsing options provided",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "dataAsset",
                  "type": "text",
                  "value": "@HandleEncryptionOnLandingFile",
                  "required": false
                },
                {
                  "name": "parsingOptions",
                  "type": "text",
                  "value": "@GenerateParsingOptions",
                  "required": false
                },
                {
                  "name": "schema",
                  "type": "text",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "FileSteps.loadInboundDataAsset",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.157Z",
              "modifiedDate": "2019-06-04T19:45:30.157Z",
              "stepId": "d7296207-2367-58b7-9b3e-c8ef373ab91f",
              "executeIfEmpty": "",
              "nextStepId": "AddDataCollectionId"
            },
            {
              "id": "AddDataCollectionId",
              "displayName": "Add a Column with a Static Value to All Rows in a DataFrame",
              "description": "This step will add a column with a static value to all rows in the provided data frame",
              "type": "Pipeline",
              "category": "Utilities",
              "params": [
                {
                  "name": "dataFrame",
                  "type": "text",
                  "value": "@LoadLandingAsset",
                  "required": false
                },
                {
                  "name": "columnName",
                  "type": "text",
                  "value": "data_collection_id",
                  "required": false
                },
                {
                  "name": "columnValue",
                  "type": "text",
                  "value": "!dataCollectionId",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "DataSteps.addStaticColumn",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.013Z",
              "modifiedDate": "2019-06-04T19:45:30.013Z",
              "stepId": "37e10488-02c1-5c85-b47a-efecf681fdd4",
              "nextStepId": "AddUniqueRecordId"
            },
            {
              "id": "AddUniqueRecordId",
              "displayName": "Adds a Unique Identifier to a DataFrame",
              "description": "This step will add a new unique identifier to an existing data frame",
              "type": "Pipeline",
              "category": "Utilities",
              "params": [
                {
                  "name": "idColumnName",
                  "type": "text",
                  "value": "record_id",
                  "required": false
                },
                {
                  "name": "dataFrame",
                  "type": "text",
                  "value": "!AddDataCollectionId",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "DataSteps.prependUniqueId",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.021Z",
              "modifiedDate": "2019-06-04T19:45:30.021Z",
              "stepId": "9f7d84b0-ebab-57da-8b39-be4c47028242",
              "nextStepId": "GetOrCreateRawDataAsset"
            },
            {
              "id": "GetOrCreateRawDataAsset",
              "displayName": "Get or Create a DataAsset using Attributes",
              "description": "This step will get an asset by name and create a new one if it doesn\\'t exist, using individual attributes",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "assetName",
                  "type": "text",
                  "value": "!dataCollectionId",
                  "required": false
                },
                {
                  "name": "parentAsset",
                  "type": "text",
                  "value": "!rawZone",
                  "required": false
                },
                {
                  "name": "dataFrame",
                  "type": "text",
                  "value": "@AddUniqueRecordId",
                  "required": false
                },
                {
                  "name": "partitionKey",
                  "type": "text",
                  "required": false
                },
                {
                  "type": "text",
                  "name": "partitionStrategy",
                  "required": false
                },
                {
                  "name": "mergeStrategy",
                  "type": "text",
                  "value": "OVERWRITE",
                  "required": false
                },
                {
                  "name": "dataFormat",
                  "type": "text",
                  "value": "parquet",
                  "required": false
                },
                {
                  "name": "tempFlag",
                  "type": "text",
                  "value": "false",
                  "required": false
                },
                {
                  "type": "text",
                  "name": "existingSchema",
                  "required": false
                },
                {
                  "name": "useAssetIdForName",
                  "type": "text",
                  "value": "true",
                  "required": false
                },
                {
                  "name": "useAttributeIdsForColumnNames",
                  "type": "text",
                  "value": "false",
                  "required": false
                },
                {
                  "name": "update",
                  "type": "text",
                  "value": "true",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "DataAssetSteps.getOrCreateDataStoreAsset",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:31.086Z",
              "modifiedDate": "2019-06-04T19:45:31.086Z",
              "stepId": "ea28ebc8-09b3-4a89-a670-92915bb8a8f4",
              "nextStepId": "WriateDataToRawZone"
            },
            {
              "id": "WriateDataToRawZone",
              "displayName": "Writes a DataFrame to an Existing DataAsset",
              "description": "This step maps and writes a dataframe to an existing data asset",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "dataFrame",
                  "type": "text",
                  "value": "@AddUniqueRecordId",
                  "required": false
                },
                {
                  "type": "text",
                  "name": "dataAsset",
                  "required": false,
                  "value": "@GetOrCreateRawDataAsset"
                },
                {
                  "name": "feed",
                  "type": "text",
                  "value": "!feed",
                  "required": false
                },
                {
                  "name": "optimalSplitSizeMB",
                  "type": "text",
                  "value": "$optimalSplitSizeMB || 128",
                  "required": false
                },
                {
                  "name": "mergeStrategyOverride",
                  "type": "text",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "DataSteps.writeDataFrameToDataAsset",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:30.052Z",
              "modifiedDate": "2019-06-04T19:45:30.052Z",
              "stepId": "4c8cb4d9-51db-4b7f-b199-7b13559ecf8d",
              "nextStepId": "TagRawDataAsset"
            },
            {
              "id": "TagRawDataAsset",
              "displayName": "Apply DataGroup Tags to an existing DataAsset",
              "description": "This function will apply tags to the final asset.  Anything passed in will be added as \\'datagroup_$tag\\' with a value of 1",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "name": "dataAsset",
                  "type": "text",
                  "value": "@GetOrCreateRawAsset",
                  "required": false
                },
                {
                  "name": "datagroups",
                  "type": "text",
                  "value": "!feed.dataGroups",
                  "required": false
                },
                {
                  "name": "tagZone",
                  "type": "text",
                  "value": "true",
                  "required": false
                }
              ],
              "engineMeta": {
                "spark": "DataAssetSteps.tagDataAssetWithDataGroups",
                "pkg": "com.acxiom.datalake.pipeline.steps"
              },
              "creationDate": "2019-06-04T19:45:31.112Z",
              "modifiedDate": "2019-06-04T19:45:31.112Z",
              "stepId": "04622d9c-7708-557e-b4c8-1268131d6f77"
            }
          ],
          "id": "ff8428d0-879c-11e9-8b4f-9b89e27b8b39",
          "creationDate": "2019-06-05T14:19:58.305Z",
          "modifiedDate": "2019-06-05T15:59:42.200Z"
        }
      ],
      "id": "027f8580-8800-11e9-8b4f-9b89e27b8b39",
      "creationDate": "2019-06-06T02:08:43.483Z",
      "modifiedDate": "2019-06-06T22:19:24.136Z",
      "requiredParameters": [
        "stsUrl",
        "msApiUrl",
        "ignoreSSL",
        "apiKey",
        "apiSecret",
        "tenantId",
        "coreId",
        "servicesUrl",
        "dataCollectionId"
      ]
    },
    {
      "_id": "5d09106b72578d23ebac03af",
      "name": "avarho_test",
      "globals": {
        
      },
      "executions": [
        {
          "id": "Create Modified DataAsset",
          "pipelineIds": [
            "1f37f550-9146-11e9-ac99-49159f6e60a9"
          ],
          "pipelines": [
            
          ],
          "globals": {
            
          }
        }
      ],
      "pipelines": [
        {
          "_id": "5d0804c48c5e44aa7f933ec5",
          "name": "avarho Load Test",
          "steps": [
            {
              "id": "SFTP FileManager",
              "displayName": "Create SFTP FileManager",
              "description": "Simple function to generate the SFTPFileManager for the remote SFTP file system",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "hostName",
                  "required": false,
                  "value": "!sftp_host"
                },
                {
                  "name": "username",
                  "type": "text",
                  "value": "!sftp_user",
                  "required": false
                },
                {
                  "name": "password",
                  "type": "text",
                  "value": "!sftp_pass",
                  "required": false
                },
                {
                  "name": "port",
                  "type": "integer",
                  "value": "!sftp_port",
                  "required": false
                },
                {
                  "type": "boolean",
                  "name": "strictHostChecking",
                  "required": false,
                  "value": "false"
                }
              ],
              "engineMeta": {
                "spark": "SFTPSteps.createFileManager",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-05-28T19:10:59.281Z",
              "modifiedDate": "2019-06-07T00:10:31.084Z",
              "stepId": "9d467cb0-8b3d-40a0-9ccd-9cf8c5b6cb38",
              "executeIfEmpty": "",
              "nextStepId": "HDFS FileManager"
            },
            {
              "id": "HDFS FileManager",
              "displayName": "Create HDFS FileManager",
              "description": "Simple function to generate the HDFSFileManager for the local HDFS file system",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                
              ],
              "engineMeta": {
                "spark": "HDFSSteps.createFileManager",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-05-28T18:54:44.836Z",
              "modifiedDate": "2019-05-28T18:54:44.836Z",
              "stepId": "e4dad367-a506-5afd-86c0-82c2cf5cd15c",
              "nextStepId": "Download File"
            },
            {
              "id": "Download File",
              "displayName": "Buffered file copy",
              "description": "Copy the contents of the source path to the destination path using full buffer sizes. This function will call connect on both FileManagers.",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "srcFS",
                  "required": false,
                  "value": "@SFTP FileManager"
                },
                {
                  "type": "text",
                  "name": "srcPath",
                  "required": false,
                  "value": "!sftp_input_path"
                },
                {
                  "type": "text",
                  "name": "destFS",
                  "required": false,
                  "value": "@HDFS FileManager"
                },
                {
                  "type": "text",
                  "name": "destPath",
                  "required": false,
                  "value": "!landing_path"
                },
                {
                  "type": "integer",
                  "name": "inputBufferSize",
                  "required": false,
                  "value": "!input_buffer_size"
                },
                {
                  "type": "integer",
                  "name": "outputBufferSize",
                  "required": false,
                  "value": "!output_buffer_size"
                },
                {
                  "type": "integer",
                  "name": "copyBufferSize",
                  "required": false,
                  "value": "!read_buffer_size"
                }
              ],
              "engineMeta": {
                "spark": "FileManagerSteps.copy",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-05-28T18:54:44.883Z",
              "modifiedDate": "2019-06-07T00:11:00.761Z",
              "stepId": "f5a24db0-e91b-5c88-8e67-ab5cff09c883",
              "nextStepId": "Disconnect SFTP FileManager"
            },
            {
              "id": "Disconnect SFTP FileManager",
              "displayName": "Disconnect a FileManager",
              "description": "Disconnects a FileManager from the underlying file system",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "fileManager",
                  "required": false,
                  "value": "@SFTP FileManager"
                }
              ],
              "engineMeta": {
                "spark": "FileManagerSteps.disconnectFileManager",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-05-28T18:54:44.887Z",
              "modifiedDate": "2019-05-28T18:54:44.887Z",
              "stepId": "3d1e8519-690c-55f0-bd05-1e7b97fb6633",
              "nextStepId": "LoadDataframe"
            },
            {
              "id": "LoadDataframe",
              "displayName": "Load DataFrame from HDFS path",
              "description": "This step will read a dataFrame from the given HDFS path",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "path",
                  "required": false,
                  "value": "!landing_path"
                },
                {
                  "type": "object",
                  "name": "options",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.DataFrameReaderOptions",
                  "value": {
                    "format": "csv",
                    "options": {
                      "header": "true",
                      "delimiter": ","
                    },
                    "schema": {
                      "attributes": [
                        
                      ]
                    }
                  }
                }
              ],
              "engineMeta": {
                "spark": "HDFSSteps.readFromPath"
              },
              "creationDate": "2019-04-04T14:24:22.875Z",
              "modifiedDate": "2019-04-04T14:24:22.875Z",
              "stepId": "87db259d-606e-46eb-b723-82923349640f",
              "nextStepId": "Write DataFrame to HDFS"
            },
            {
              "id": "Write DataFrame to HDFS",
              "displayName": "Write DataFrame to HDFS",
              "description": "This step will write a dataFrame in a given format to HDFS",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "dataFrame",
                  "required": false,
                  "value": "@LoadDataFrame"
                },
                {
                  "type": "text",
                  "name": "path",
                  "required": false,
                  "value": "/raw/avarho_parquet"
                },
                {
                  "type": "object",
                  "name": "options",
                  "required": false,
                  "className": "com.acxiom.pipeline.steps.DataFrameWriterOptions"
                }
              ],
              "engineMeta": {
                "spark": "HDFSSteps.writeToPath"
              },
              "creationDate": "2019-04-04T14:24:22.889Z",
              "modifiedDate": "2019-04-04T14:24:22.889Z",
              "stepId": "0a296858-e8b7-43dd-9f55-88d00a7cd8fa",
              "nextStepId": "Disconnect HDFS"
            },
            {
              "id": "Disconnect HDFS",
              "displayName": "Disconnect a FileManager",
              "description": "Disconnects a FileManager from the underlying file system",
              "type": "Pipeline",
              "category": "InputOutput",
              "params": [
                {
                  "type": "text",
                  "name": "fileManager",
                  "required": false,
                  "value": "@HDFS FileManager"
                }
              ],
              "engineMeta": {
                "spark": "FileManagerSteps.disconnectFileManager",
                "pkg": "com.acxiom.pipeline.steps"
              },
              "creationDate": "2019-05-28T18:54:44.887Z",
              "modifiedDate": "2019-05-28T18:54:44.887Z",
              "stepId": "3d1e8519-690c-55f0-bd05-1e7b97fb6633"
            }
          ],
          "id": "1f37f550-9146-11e9-ac99-49159f6e60a9",
          "creationDate": "2019-06-17T21:23:16.903Z",
          "modifiedDate": "2019-06-18T16:19:23.396Z"
        }
      ],
      "id": "a7511d00-91e5-11e9-a0f0-e1ddb30bb970",
      "creationDate": "2019-06-18T16:25:15.219Z",
      "modifiedDate": "2019-06-18T16:41:33.531Z",
      "requiredParameters": [
        "sftp_host",
        "sftp_user",
        "sftp_pass",
        "sftp_port",
        "sftp_input_path",
        "landing_path",
        "input_buffer_size",
        "output_buffer_size",
        "read_buffer_size",
        "write_path"
      ],
      "sparkConf": {
        "kryoClasses": [
          "org.apache.hadoop.io.LongWritable",
          "org.apacje.http.client.entity.UrlEncodedFormEntity"
        ],
        "setOptions": [
          {
            "name": "spark.hadoop.io.compression.codecs",
            "value": "org.apache.hadoop.io.compress.BZip2Codec,org.apache.hadoop.io.compress.DeflateCodec,org.apache.hadoop.io.compress.Lz4Codec,org.apache.hadoop.io.compress.SnappyCodec,org.apache.hadoop.io.compress.GzipCodec"
          },
          {
            "name": "applicationConfigurationLoader",
            "value": "com.acxiom.pipeline.fs.HDFSFileManager"
          }
        ]
      },
      "stepPackages": [
        "com.acxiom.pipeline.steps",
        "com.acxiom.pipeline"
      ]
    }
  ]
}