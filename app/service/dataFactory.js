const SetDataFactory = () => {
    angular.module('MainApp')
    .factory('DataFactory', ['$q', 
        ($q) => {
            return {
                getDataPortada: () => {
                    var deferred = $q.defer();

                    const dataPortada = {
                        'header': 'Desenvolupament web modern',
                        'paragrafs': [{"htmlText": "Benvinguts a la petita enciclopèdia sobre tecnologies de programació <span lang='en'>front-end</span>, elaborada per a l'assignatura d'Eines <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> i <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> del màster de desenvolupament de llocs i aplicacions web de la <abbr title='Universitat Oberta de Catalunya'>UOC</abbr>."},
                                      {"htmlText": "En el nostre lloc web es pot consultar informació sobre les eines i tendències actuals a l'hora de disposar d'un <span lang='en'>worflow</span> moden de desenvolupament per a la creació de llocs web."}
                                     ],
                        'videoEmbedLink':'https://www.youtube.com/embed/QW2xB9BE-aM',
                        'videoLink': 'https://www.youtube.com/watch?time_continue=1&v=QW2xB9BE-aM&feature=emb_logo',
                        'videoLinkText': 'Vegeu el vídeo a Youtube',
                        'videoFigCaptionText': 'Web Developement Trends 2020'
                    };                    

                    if(dataPortada != null) {
                        deferred.resolve(dataPortada);
                    } else {
                        deferred.reject('No data found');
                    }                    

                    return deferred.promise;
                },

                getDataCategoria: (codeParam) => {
                    var deferred = $q.defer();

                    const dataCategoria = {
                        'moduleBundlers': {
                         'header': 'Module Bundlers',
                         'paragrafs': [{"htmlText": ""},
                                       {"htmlText": ""},
                                       {"htmlText": ""}
                                     ],
                         'videoEmbedLink':'https://www.youtube.com/embed/nMhD9IB9YJ8',
                         'videoLink': 'https://www.youtube.com/watch?v=nMhD9IB9YJ8&feature=emb_logo',
                         'videoLinkText': 'Vegeu el vídeo a Youtube',
                         'videoFigCaptionText': 'Webpack, Rollup and Parcel compared'
                        },
                        'preprocessadors': {
                         'header': 'Preprocessadors',
                         'paragrafs': [{"htmlText": ""},
                                       {"htmlText": ""},
                                       {"htmlText": ""}
                                     ],
                         'videoEmbedLink':'https://www.youtube.com/embed/5hNDzcpWwFM',
                         'videoLink': 'https://www.youtube.com/watch?time_continue=1&v=5hNDzcpWwFM&feature=emb_logo',
                         'videoLinkText': 'Vegeu el vídeo a Youtube',
                         'videoFigCaptionText': 'Why you should use a CSS Preprocessor'
                        },
                        'llenguatgesFrontEnd': {
                         'header': 'Llenguatges Front-end',
                         'paragrafs': [{"htmlText": ""},
                                       {"htmlText": ""},
                                       {"htmlText": ""}
                                     ],
                         'videoEmbedLink':'https://www.youtube.com/embed/gT0Lh1eYk78',
                         'videoLink': 'https://www.youtube.com/watch?v=gT0Lh1eYk78&feature=emb_logo',
                         'videoLinkText': 'Vegeu el vídeo a Youtube',
                         'videoFigCaptionText': 'HTML, CSS, JavaScript Explained'
                        },
                        'frameworksJavascript': {
                        'header': 'Frameworks Javascript',
                        'paragrafs': [{"htmlText": ""},
                                      {"htmlText": ""},
                                      {"htmlText": ""}
                                    ],
                        'videoEmbedLink':'https://www.youtube.com/embed/_P2fGeg9I5o',
                        'videoLink': 'https://www.youtube.com/watch?v=_P2fGeg9I5o&feature=emb_logo',
                        'videoLinkText': 'Vegeu el vídeo a Youtube',
                        'videoFigCaptionText': 'Choosing Your JavaScript Framework'
                       }
                    };                    

                    const result = dataCategoria[codeParam];

                    if(result != null) {
                        deferred.resolve(result);
                    } else {
                        deferred.reject('No data found');
                    }                    

                    return deferred.promise;
                }
            }
        }
    ]);
};

export {SetDataFactory};