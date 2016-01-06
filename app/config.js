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
    "mko-custom": "github:MaciejMisztal/mko-custom@0.0.3",
    "text": "github:systemjs/plugin-text@0.0.4",
    "ts": "github:frankwallis/plugin-typescript@2.4.5",
    "typescript": "npm:typescript@1.7.5",
    "github:MaciejMisztal/mko-custom@0.0.3": {
      "knockout": "github:knockout/knockout@3.4.0",
      "text": "github:systemjs/plugin-text@0.0.4",
      "ts": "github:frankwallis/plugin-typescript@2.4.5"
    },
    "github:frankwallis/plugin-typescript@2.4.5": {
      "typescript": "npm:typescript@1.7.5"
    }
  }
});
