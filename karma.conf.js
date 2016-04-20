/* global module */
module.exports = function (config) {
    'use strict';
    config.set({

        basePath: './app',

        singleRun: false,

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: [
               'src/**/*.spec.ts'
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
        reporters: ['spec'],
        browsers: ['PhantomJS']
    });
};
