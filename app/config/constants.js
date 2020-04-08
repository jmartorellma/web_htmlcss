const SetConstants = ()=> {
    'use strict';
    angular.module('constantsModule', [])
    .constant('CATEGORIES', {
        'moduleBundlers': {
            'buttonId': 'buttonBundle',
            'listId': 'listBundle',
            'desc': 'Module Bundlers',
            'icon': 'layers',
            'show': false,
            'items':[
                {'codi': 'webpack', 'desc': 'Webpack'},
                {'codi': 'rollupjs', 'desc': 'Rollup.js'},
                {'codi': 'parcel', 'desc': 'Parcel'}
            ]
        },
        'preprocessadors': {
            'buttonId': 'buttonPreprocessadors',
            'listId': 'listPreprocessadors',
            'desc': 'Preprocessadors',
            'icon': 'toys',
            'show': false,
            'items':[
                {'codi': 'babel', 'desc': 'Babel'},
                {'codi': 'sass', 'desc': 'Sass'},
                {'codi': 'postcss', 'desc': 'PostCSS'}
            ]
        },
        'llenguatgesFrontEnd': {
            'buttonId': 'buttonLlenguatgesFrontEnd',
            'listId': 'listLlenguatgesFrontEnd',
            'desc': 'Llenguatges Front-end',
            'icon': 'create',
            'show': false,
            'items':[
                {'codi': 'html5', 'desc': 'HTML 5'},
                {'codi': 'css3', 'desc': 'CSS 3'},
                {'codi': 'javascript', 'desc': 'Javascript'}
            ]
        },
        'frameworksJavascript': {
            'buttonId': 'buttonFrameworksJavascript',
            'listId': 'listFrameworksJavascript',
            'desc': 'Frameworks Javascript',
            'icon': 'build',
            'show': false,
            'items':[
                {'codi': 'angular', 'desc': 'Angular'},
                {'codi': 'react', 'desc': 'React'},
                {'codi': 'vue', 'desc': 'Vue'}
            ]
        }
    })
};

export {SetConstants};