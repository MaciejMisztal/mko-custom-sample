/* global module */
module.exports = function (config) {
    'use strict';
    config.set({

        basePath: './app',

        singleRun: true,

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: [
               'src/**/*.spec.ts'
               //'src/spec/env.spec.ts'
            ],
            serveFiles: [
                'src/**/*!(*.spec).ts',
                '../tsconfig.json'
            ]
        },

        proxies: {
            '/src': '/base/src',
            '/jspm_packages': '/base/jspm_packages',
            '/tsconfig.json': '/base/tsconfig.json'
        },

        browsers: ['PhantomJS']
    });
};
