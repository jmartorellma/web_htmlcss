const SetConstants = ()=> {
    'use strict';
    angular.module('constantsModule', [])
    .constant('CATEGORIES', {
        'moduleBundlers': {
            'buttonId': 'buttonBundle',
            'listId': 'listBundle',
            'desc': '<span lang="en">Module Bundlers</span>',
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
            'desc': '<span>Llenguatges <span lang="en">Front-end</span></span>',
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
            'desc': '<span><span lang="en">Frameworks</span> Javascript</span>',
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