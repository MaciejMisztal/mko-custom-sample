System.config({
  defaultJSExtensions: true,
  baseURL: "/",
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
    "mko-custom": "github:MaciejMisztal/mko-custom@0.0.1",
    "text": "github:systemjs/plugin-text@0.0.4",
    "ts": "github:frankwallis/plugin-typescript@2.4.3",
    "typescript": "npm:typescript@1.7.3",
    "github:MaciejMisztal/mko-custom@0.0.1": {
      "knockout": "github:knockout/knockout@3.4.0",
      "text": "github:systemjs/plugin-text@0.0.4",
      "ts": "github:frankwallis/plugin-typescript@2.4.3"
    },
    "github:frankwallis/plugin-typescript@2.4.3": {
      "typescript": "npm:typescript@1.7.3"
    }
  }
});
