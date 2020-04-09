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
                            'paragrafs': [
                                {"htmlText": "Els <span lang='en'>module bundlers</span>, són eines que els desenvolupadors de <span lang='en'>front-end</span> utilitzen per afegir mòduls <span lang='en'>JavaScript</span> en un sol fitxer <span lang='en'>JavaScript</span> que es pugui executar en el navegador."},
                                {"htmlText": "Un <span lang='en'>module bundler</span> ens ajuda en tasques de gestió de les dependències instal·lades amb <abbr title='Node Package Manager' lang='en'>npm</abbr>, optimització, compilació o minificació en entorns de producció, o proporcionar-nos un servidor amb <abbr title='Hot module replacement' lang='en'>HMR</abbr> per a l'entorn de desenvolupament."},
                                {"htmlText": "A continuació, en podem veure el detall d'alguns d'ells:"}
                            ],
                            'videoEmbedLink':'https://www.youtube.com/embed/nMhD9IB9YJ8',
                            'videoLink': 'https://www.youtube.com/watch?v=nMhD9IB9YJ8&feature=emb_logo',
                            'videoLinkText': 'Vegeu el vídeo a Youtube',
                            'videoFigCaptionText': 'Webpack, Rollup and Parcel compared'
                        },
                        'preprocessadors': {
                            'paragrafs': [
                                {"htmlText": "Els preprocessadors són eines que reben fitxers escrits en diversos llenguatges i els converteixen en codi comprensible pel navegador, ja que aquest només és capaç de processar <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr>, <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> i <span lang='en'>JavaScript</span>."},
                                {"htmlText": "Disposem de preprocessadors tan per <span lang='en'>JavaScript</span>, a l'hora transformar altres lleguatges o fer-los compatibles amb totes les versions dels navegadors, com per <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> i per a <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>, per expemple per poder fer ús de funcions i variables."},
                                {"htmlText": "A continuació, en podem veure el detall d'alguns d'ells:"}
                            ],
                            'videoEmbedLink':'https://www.youtube.com/embed/5hNDzcpWwFM',
                            'videoLink': 'https://www.youtube.com/watch?time_continue=1&v=5hNDzcpWwFM&feature=emb_logo',
                            'videoLinkText': 'Vegeu el vídeo a Youtube',
                            'videoFigCaptionText': 'Why you should use a CSS Preprocessor'
                        },
                        'llenguatgesFrontEnd': {
                            'paragrafs': [
                                {"htmlText": "El <span lang='en'>front-end</span> és la part d'un programa o dispositiu amb la interactuarà l'usuari final. Són les tecnologies de disseny i desenvolupament web que corren en el navegador i que s'encarreguen de la interacció amb l'usuari."},
                                {"htmlText": "<abbr title='Hypertext Markup Language' lang='en'>HTML</abbr>, <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> i <span lang='en'>JavaScript</span> són els llenguatges principals del <span lang='en'>front-end</span>, dels quals es desprenen una gran quantitat de <span lang='en'>frameworks</span> i llibreries que expandeixen les seves capacitats per crear qualsevol tipus d'interfície d'usuari."},
                                {"htmlText": "A continuació, en podem veure el detall d'alguns d'ells:"}
                            ],
                            'videoEmbedLink':'https://www.youtube.com/embed/gT0Lh1eYk78',
                            'videoLink': 'https://www.youtube.com/watch?v=gT0Lh1eYk78&feature=emb_logo',
                            'videoLinkText': 'Vegeu el vídeo a Youtube',
                            'videoFigCaptionText': 'HTML, CSS, JavaScript Explained'
                        },
                        'frameworksJavascript': {
                            'paragrafs': [
                                {"htmlText": "Els <span lang='en'>frameworks</span> o marcs de treball, són projectes que aglutinen biblioteques de codi i patrons de disseny avançats, i que serveixen com a base pel desenvolupament d'aplicacions diverses. En el cas dels de <span lang='en'>JavaScript</span>, serveixen pel desenvolupament de la part <span lang='en'>front-end</span> d'una web."},
                                {"htmlText": "La clau d'un <span lang='en'>framework</span>, no és tant que ofereixi una quantitat enorme de funcionalitats ja preparades, amb implementacions de peces comuns en aplicacions web, sinó que estan pensats per oferir a l'equip de treball un esquema de desenvolupament sòlid, i tenir un codi fàcilment mantenible."},
                                {"htmlText": "A continuació, en podem veure el detall d'alguns d'ells:"}
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
                },

                getDataDetall: (codeParam) => {
                    var deferred = $q.defer();
                    const dataDetall = {
                        'webpack': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Webpack',
                            'figCaption': 'Imatge obtinguda del lloc web de Webpack'
                        },
                        'rollupjs': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Rollup.js',
                            'figCaption': 'Imatge obtinguda del lloc web de Rollup.js'
                        },
                        'parcel': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Parce',
                            'figCaption': 'Imatge obtinguda del lloc web de Parcel'
                        },
                        'babel': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Babel',
                            'figCaption': 'Imatge obtinguda del lloc web de Webpack'
                        },
                        'sass': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Sass',
                            'figCaption': 'Imatge obtinguda del lloc web de Sass'
                        },
                        'postcss': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo PostCSS',
                            'figCaption': 'Imatge obtinguda del lloc web de PostCSS'
                        },
                        'html5': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo HTML5',
                            'figCaption': 'Imatge obtinguda del lloc web de HTML5'
                        },
                        'css3': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo CSS3',
                            'figCaption': 'Imatge obtinguda del lloc web de CSS3'
                        },
                        'javascript': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Javascript',
                            'figCaption': 'Imatge obtinguda del lloc web de Javascript'
                        },
                        'angular': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Angular',
                            'figCaption': 'Imatge obtinguda del lloc web de Angular'
                        },
                        'react': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo React',
                            'figCaption': 'Imatge obtinguda del lloc web de React'
                        },
                        'vue': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Vue',
                            'figCaption': 'Imatge obtinguda del lloc web de Vue'
                        }
                    };                    

                    const result = dataDetall[codeParam];
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