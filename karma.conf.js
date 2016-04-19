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
            ],
            serveFiles: [
                '**/*!(*.spec).ts',
                '../tsconfig.json'
            ]
        },

        proxies: {
            '/app': '/base/app',
            '/jspm_packages': '/base/jspm_packages',
            '../../tsconfig.json': '/base/tsconfig.json'
        },

        browsers: ['PhantomJS']
    });
};