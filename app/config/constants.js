const SetConstants = ()=> {
    'use strict';
    angular.module('constantsModule', [])
    .constant('CATEGORIES', {
        'moduleBundlers': {
            'desc': 'Module Bundlers',
            'icon': '',
            'items':[{'webpack': 'Webpack'},
                     {'rollupjs': 'Rollup.js'},
                     {'parcel': 'Parcel'}
                    ]
        },
        'proprocessadors': {
            'desc': 'Preprocessadors',
            'icon': '',
            'items':[{'babel': 'Babel'},
                     {'sass': 'Sass'},
                     {'postcss': 'PostCSS'}
                    ]
        },
        'llenguatgesFrontEnd': {
            'desc': 'Llenguatges Front-end',
            'icon': '',
            'items':[{'html5': 'HTML 5'},
                     {'css3': 'CSS 3'},
                     {'javascript': 'Javascript'}
                    ]
        },
        'frameworksJavascript': {
            'desc': 'Frameworks Javascript',
            'icon': '',
            'items':[{'angular': 'Angular'},
                     {'react': 'React'},
                     {'vue': 'Vue'}
                    ]
        }
    })
};

export {SetConstants};
// (function () {
//     'use strict';
//     angular.module('constantsModule', [])
//     .constant('CATEGORIES', {
//         'moduleBundlers': {
//             'desc': 'Module Bundlers',
//             'icon': '',
//             'items':[{'webpack': 'Webpack'},
//                      {'rollupjs': 'Rollup.js'},
//                      {'parcel': 'Parcel'}
//                     ]
//         },
//         'proprocessadors': {
//             'desc': 'Preprocessadors',
//             'icon': '',
//             'items':[{'babel': 'Babel'},
//                      {'sass': 'Sass'},
//                      {'postcss': 'PostCSS'}
//                     ]
//         },
//         'llenguatgesFrontEnd': {
//             'desc': 'Llenguatges Front-end',
//             'icon': '',
//             'items':[{'html5': 'HTML 5'},
//                      {'css3': 'CSS 3'},
//                      {'javascript': 'Javascript'}
//                     ]
//         },
//         'frameworksJavascript': {
//             'desc': 'Frameworks Javascript',
//             'icon': '',
//             'items':[{'angular': 'Angular'},
//                      {'react': 'React'},
//                      {'vue': 'Vue'}
//                     ]
//         }
//     })
// })();