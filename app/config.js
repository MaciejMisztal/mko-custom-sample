System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "noImplicitAny": false,
    "module": "system",
    "target": "es5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "src": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.js": {
          "loader": "ts"
        },
        "*.html": {
          "loader": "text"
        }
      }
    },
    "mko-custom": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.js": {
          "loader": "ts"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  },

  map: {
    "knockout": "github:knockout/knockout@3.4.0",
    "mko-custom": "github:MaciejMisztal/mko-custom@1.0.3",
    "text": "github:systemjs/plugin-text@0.0.7",
    "ts": "github:frankwallis/plugin-typescript@4.0.16",
    "typescript": "npm:typescript@1.8.10",
    "github:MaciejMisztal/mko-custom@1.0.3": {
      "knockout": "github:knockout/knockout@3.4.0",
      "text": "github:systemjs/plugin-text@0.0.7",
      "ts": "github:frankwallis/plugin-typescript@4.0.16"
    },
    "github:frankwallis/plugin-typescript@4.0.16": {
      "typescript": "npm:typescript@1.8.10"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    }
  }
});
