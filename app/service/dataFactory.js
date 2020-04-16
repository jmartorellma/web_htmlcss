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
                        'videoFigCaptionText': '<span lang="en">Web Developement Trends 2020</span>'
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
                                {"htmlText": "Un <span lang='en'>module bundler</span> ens ajuda en tasques de gestió de les dependències instal·lades amb <abbr title='Node Package Manager' lang='en'>npm</abbr>, optimització, compilació o minificació en entorns de producció, o proporcionar-nos un servidor amb <abbr title='Hot Module Replacement' lang='en'>HMR</abbr> per a l'entorn de desenvolupament."},
                                {"htmlText": "A continuació, en podem veure el detall d'alguns d'ells:"}
                            ],
                            'videoEmbedLink':'https://www.youtube.com/embed/nMhD9IB9YJ8',
                            'videoLink': 'https://www.youtube.com/watch?v=nMhD9IB9YJ8&feature=emb_logo',
                            'videoLinkText': 'Vegeu el vídeo a Youtube',
                            'videoFigCaptionText': '<span lang="en"><cite>Webpack</cite>, <cite>Rollup</cite> and <cite>Parcel</cite> compared</span>'
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
                            'videoFigCaptionText': '<span lang="en">Why you should use a <abbr title="Cascading Style Sheets">CSS</abbr> Preprocessor</span>'
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
                            'videoFigCaptionText': '<span lang="en"><abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr> & JavaScript Explained</span>'
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
                            'videoFigCaptionText': '<span>Choosing Your JavaScript Framework</span>'
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
                                {"htmlText": "<cite>Webpack</cite>, és una eina <span lang='en'>open source</span> utilitzada pels desenvolupadors per empaquetar i exportar tots els fitxers necessaris per a que un projecte funcioni amb totes les seves dependències <span lang='en'>front-end</span>. Entre d'altres funcionalitats, amb <cite>Webpack</cite> podem obtenir un fitxer <span>Javascript</span> que continguila totalitat del codi necessari en un projecte minimitzat i transpilat, incloent les seves dependències, o bé un fitxer amb el <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> després d'haver passat els preprocessadors necessaris."},
                                {"htmlText": "Utilitzar <cite>Webpack</cite> no suposa una gran dificultat per a les seves funcions més bàsiques, però a l'igual que passa amb altres eines del mateix tipus, segons anem personalitzant i profunditzant en l'aplicació i les seves funcionalitats, com és lògic, el seu us es va complicant. És a dir, com més variables tinguem que controlar amb <cite>Webpack</cite>, més gran serà el codi de configuració i els <span lang='en'>plugins<span> que tinguem que introduir al paquet."},
                                {"htmlText": "Bàsicament, la configuració constarà d'un punt d'entrada, on s'indica el punt exacte de d'on <cite>Webpack</cite> començarà a analitzar el codi per a generar els paquets; un punt de sortida, on es colocaran els paquets <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr>, <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> o <span lang='en'>JavaScript</span> que s'hagin generat; carregadors, que fan possible que <cite>Webpack</cite> transformi tots els fitxers requerits; i <span lang='en'>plugins<span> que almplien el rang de funcionalitats disponibles per defecte, oferint entre d'altres, optimització del codi empaquetat, gestió i optimització d'imatges, incloure traces de carregadors, comprovar com ha anat l'execució o afegir codi o variables en els fitxers de la nostra aplicació."}
                            ],
                            'altImg': 'Logo Webpack',
                            'figCaption': 'Imatge obtinguda del repositori <a href="https://github.com/webpack/webpack" hreflang="en" target="_blank"><cite>GitHub</cite> de <cite>Webpack</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://www.arsys.es/blog/programacion/webpack-instalacion-funcionamiento/" hreflang="en" target="_blank">https://www.arsys.es/blog/programacion/webpack-instalacion-funcionamiento/</a>'
                        },
                        'rollupjs': {
                            'paragrafs': [
                                {"htmlText": "<cite>Rollup</cite> és un <span lang='en'>module-bundler</span> per a <span lang='en'>Javascript</span> que complia petits trossos de codi en alguna paquet més gran i complex com pot ser una biblioteca o una aplicació. Utilitza el nou format normalitzat per a mòduls de codi inclosos en la revisió <abbr title='European Computer Manufacturers Association Script 6' lang='en'>ES6</abbr> de <span lang='en'>Javascript</span> en lloc de solucions anteriors com <cite lang='en'>CommonJS</cite> i <abbr title='Asynchronous Module Definition' lang='en'>AMD</abbr>. Els mòduls permeten combinarde manera lliure i perfecta les funcions més útils de les nostre boblioteques preferides."},
                                {"htmlText": "El desenvolupament de programari sol ser més fàcil si es desglossa el projecte en peces separades més petites, ja que sovint elimina interaccions inesperades i redueix notablement la complexitat dels problemes que s'han de resoldre, i simplement escriure projectes més petits des de bon pricipi no és necessàriament la resposta. <span lang='en'>Javascript</span>, històricament, no ha inclòs aquesta capacitat com a característica principal del llenguatge."},
                                {"htmlText": "A més d'habilitar l'ús dels mòduls, <cite>Rollup</cite> també analitza de forma estàtic el codi importat i exclou qualsevol cosa que realment no s'utilitzi. D'aquesta manera, permet compilar amb eines i mòduls existents sense afegir dependències adicionals ni augmentar la mida del projecte. Com que <cite>Rollup</cite> inclou el mínim necessari, s'obtenen biblioteques i aplicacions més lleugeres, ràpides i menys complicades. Atès que aquest enfocament pot utilitzar declaracions d'importació i exportació explícites, és més eficaç que simplement executar un minificador automatitzat per detectar variables que no s'utilitzin en el codi compilat de sortida."}
                            ],
                            'altImg': 'Logo Rollup.js',
                            'figCaption': 'Imatge obtinguda del lloc web de <cite lang="en"><a href="https://rollupjs.org/guide/en/" hreflang="en" target="_blank">Rollup.js</cite>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://rollupjs.org/guide/en/" hreflang="en" target="_blank">https://rollupjs.org/guide/en/</a>'
                        },
                        'parcel': {
                            'paragrafs': [
                                {"htmlText": "<cite>Parcel</cite> és un empaquetador d'aplicacions web, que es diferencia per l'experiència que ofereix als desenvolupadors. Ofereix un rendiment ultra-ràpid, utilitzant processament multinucli, i que no requereix configuració. <cite>Parcel</cite> pot utilitzar qualsevol tipus de fitxer com a punt d'entrada, però el millor per fer-ho és un fitxer <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> o <span lang='en'>Javascript</span>."},
                                {"htmlText": "<cite>Parcel</cite> te un servidor de desenvolupament encastat, el qual reconstrueix l'aplicació que s'està desenvolupant quan es realitzen canvis en els fitxers, i soporta el <abbr title='Hot Module Replacement' lang='en'>HMR</abbr> per un desenvolupament més ràpid, en els casos de no tenir un servidor propi o que l'aplicació que s'estigui desenvolupant es renderitzi completament en el costat del client. Disposa també d'un mode de compilació per a producció, que ens prepararà l'aplicació d'un cop amb el minificador per optimitzar els fitxers de codi."},
                                {"htmlText": "A diferència d'altres empaquetadors que requereixen la instal·lació i configuració de <span lang='en'>plugins</span> per a transformar recursos, <cite>Parcel</cite> té suport per a moltes transformacions i transpiladors comuns, sense la necessitat d'instal·lar ni configurar res adicional. Es pot transformar <span lang='en'>Javascript</span> utilitzant <cite>Babel</cite>, <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> utilitzant <cite>PostCSS</cite>, i <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> utilitzant <cite>PostHTML</cite>. <cite>Parcel</cite> executarà aquestes transformacions de manera automàtica quan trobi el fitxer de configuració corresponent en un mòdul."}
                            ],
                            'altImg': 'Logo Parcel',
                            'figCaption': 'Imatge obtinguda del repositori <a href="https://github.com/parcel-bundler" hreflang="en" target="_blank"><cite>GitHub</cite> de <cite>Parcel</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://es.parceljs.org/" hreflang="es" target="_blank">https://es.parceljs.org/</a>'
                        },
                        'babel': {
                            'paragrafs': [
                                {"htmlText": "<cite>Babel</cite> és un transcompilador gratuït de <span lang='en'>Javascript</span> de codi obert que s'utilitza principalment per a convertir codi de les versions més noves de <span lang='en'>Javascript</span> en una versió de <span lang='en'>Javascript</span> compatible amb versions anteriors que pugui ser executada per motors de <span lang='en'>Javascript</span> més antics. <cite>Babel<cite> és una eina popular per a utilitzar les funcions noves del llenguatge de programació <span lang='en'>Javascript</span>."},
                                {"htmlText": "Els desenvolupadors poden utilitzar les noves característiques del llenguatge <span lang='en'>Javascript</span> utilitzant <cite>Babel</cite> per a convertir el seu codi font en versions de <span lang='en'>Javascript</span> que els navegadors en evolució puguin processar. Els <span lang='en'>plugins</span> de <cite>Babel</cite> s'utilitzen per a transformar la sintaxis que no s'admet àmpliament en una versió anterior compatible. Per exemple, les <span lang='en'>arrow functions</span> es converteixen en declaracions de funcions regulars, que els navegadors més antics seran capaços d'interpretar."},
                                {"htmlText": "<cite>Babel</cite> intenta mantenir-se fidel a l'estàndard <abbr title='European Computer Manufacturers Association Script' lang='en'>ECMAScript</abbr>, tant com sigui raonablement possible. També pot tenir opcions específiques per a complir més especificacions com una compensació al rendiment. També s'intenta utilitzar la menor quantitat de codi possible sense dependre així d'un llarg temps d'execució. De vegades això pot ser difícil de fer, i hi ha altres opcions per a transforamcions específiques, però que poden comprometre el compliment de les especificacions de llegibilitat, mida de fitxer i velocitat."}
                            ],
                            'altImg': 'Logo Babel',
                            'figCaption': 'Imatge obtinguda del lloc web de <a href="https://babeljs.io/" hreflang="en" target="_blank"><cite>Babel</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://babeljs.io/docs/en/" hreflang="en" target="_blank">https://babeljs.io/docs/en/</a> i <a href="https://en.wikipedia.org/wiki/Babel_(transcompiler)" hreflang="en" target="_blank">https://en.wikipedia.org/wiki/Babel_(transcompiler)</a>'
                        },
                        'sass': {
                            'paragrafs': [
                                {"htmlText": "<cite>Sass</cite> és un metallenguatge de <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>. És un llenguatge d'<span lang='en'>script</span> que es tradueix a <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>. SassScript és el llenguatge d'<span lang='en'>script</span> en si mateix. <cite>Sass</cite> consisteix en dues sintaxis, una original, anomenada <span lang='en'>indented syntax</span>, que utilitza la indentació per a separar blocs de codi i el caràcter nova línia per separar regles amb format de fitxer .sass, i una sintaxi més recent, que utilitza el format de blocs com <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> amb un format de fitxer .scss."},
                                {"htmlText": "<abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> consisteix en una sèrie de selectors i pseudo-selectors que agrupen les regles aplicades. <cite>Sass</cite> estén <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> oferint diversos mecanismes que estan presents en lleguatges de programació tradicionals, particularment llenguatges orientats a objectes, però que no estan disponibles per a <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> com a tal. Quan SassScript s'interpreta, aquest crea blocs d'instruccions <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> per als selectors definits al fitxer. L'intèrpret de <cite>SASS</cite> tradueix SasScript en <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>."},
                                {"htmlText": "<cite>Sass</cite> és compatible amb totes les versions de <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>, d'aquesta manera es poden usar totes les llibreries <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> disponibles. <cite>Sass</cite> compta amb suport de la seva comunitat de desenvolupadors des de fa 13 anys. La majoria d'indústries del sector l'utilitza com l'extensió <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> prioritària, nombre molt gran de marcs de treball han estat desenvolupats amb <cite>Sass</cite>."}
                            ],
                            'altImg': 'Logo Sass',
                            'figCaption': 'Imatge obtinguda del lloc web de <a href="https://sass-lang.com/" hreflang="en" target="_blank"><cite>Sass</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://sass-lang.com/" hreflang="en" target="_blank">https://sass-lang.com/</a> i <a href="https://es.wikipedia.org/wiki/Sass" hreflang="es" target="_blank">https://es.wikipedia.org/wiki/Sass</a>'
                        },
                        'postcss': {
                            'paragrafs': [
                                {"htmlText": "<cite>PostCSS</cite> no és un preprocessador de per si, no transforma <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>. De fet, per ell mateix no fa molt. El que fa és proporcionar un analitzador <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> i un marc per crear complements que puguin analitzar, aliniar, tractar actius, optimitzar, buscar errades i transformar <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> analitzat. <cite>PostCSS</cite> analitza <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> en un arbre de sintaxi abstracta, el passa a través d'ina sèrie de complements i llavors el concatena novament en una cadena. Si s'està familiaritzat amb <span lang='en'>Javascript</span>, es pot pensar en <cite>PostCSS</cite> com un <cite>Babel</cite> per a <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>."},
                                {"htmlText": "Actualment hi ha més de 200 complements per a <cite>PostCSS</cite>, molts dels quals es poden trobar a la pàgina de <a href='https://github.com/postcss/postcss' hreflang='en' target='_blank'><cite>GitHub</cite> de <cite>PostCSS</cite></a>, mentre d'altres es poden trobar en un útil directori de <cite>PostCSS</cite> <a href='https://www.postcss.parts/' hreflang='en' target='_blank'>postcss.parts</a>. Es pot integrar <cite>PostCSS</cite> amb la majoria de les eines de compilació, inclosos <cite>Gulp</cite>, <cite>Grunt</cite>, <cite>Webpack</cite> o <cite>npm</cite>"},
                                {"htmlText": "Cada <span lang='en'>plugin</span> que es necessiti es pot instal·lar separadament, d'aquesta manera es poden elegir en l'ordre que es vulguin i en quin ordre es vol que s'apliquin. Els <span lang='en'>plugins</span> de forma adicional, es poden configurar utilitzant un conjunt d'opcions. Es poden escriure <span lang='en'>plugins</span> personalitzats, ja que cada <span lang='en'>plugin</span> reb el <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> transformat com a paràmetre d'entrada, l'analitza o el modifica i el retorna de la mateixa forma, per tant els <span lang='en'>plugins</span> no necessiten tractar <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> i tornar-lo a convertir en un <span lang='en'>string</span>. D'altra banda, ens permet escriure codi que respecta els estàndards i d'aquesta manera sigui compatible amb futures versions de <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>."}
                            ],
                            'altImg': 'Logo PostCSS',
                            'figCaption': 'Imatge obtinguda del lloc web de <a href="https://postcss.org/" hreflang="en" target="_blank">PostCSS</cite>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://www.sitepoint.com/an-introduction-to-postcss/" hreflang="en" target="_blank">https://www.sitepoint.com/an-introduction-to-postcss/</a>'
                        },
                        'html5': {
                            'paragrafs': [
                                {"htmlText": "<abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> és un llenguatge de marcat per a la implementació de pàgines web i un estàndard que serveix de referència del <span lang='en'>software</span> que conecta amb l'eleboració de pàgines web amb les seves diferents versions, defineix una estructura bàsica i un codi per a la definició de continguts d'una pàgina web, com text, imatges, vídeos o jocs entre d'altres. Es considera el llenguatge web més important, sent la seva invenció crucial per a l'aparició, el desenvolupament i l'expansió de la <abbr title='World Wide Web' lang='en'>WWW</abbr>. Aquest és l'estàndard que s'ha imposat en la visualització de pàgines web i és el que tots els navegadors acuals han adoptat. Hipertext es refereix als enllaços que connecten les pàgines web entre si, ja sigui dintre del mateix lloc web o entre d'altres, així els vincles són un aspecte fonamental en la web."},
                                {"htmlText": "Aquest llenguatge basa la seva filosofia de desenvolupament en la diferenciació, per afegir un element extern a la pàgina, aquest no s'incrustadirectament en el codi de la pàgina, sinó que es fa referència a la ubicació d'aquest element, i d'aquesta manera, la pàgina només conté el text de referència, mentre que la tasca d'unir tots els elements i preparar-ne la visualització, recau en el navegador. Al llarg de totes les seves versions s'han anat incorporant i suprimint característiques, per tal de fer-lo més eficient i facilitar el desenvolupament de pàgines web compatibles amb tot tipus de dispositius. Per poder interpretar correctament una nova versió d'<abbr title='Hypertext Markup Language' lang='en'>HTML</abbr>, els desenvolupadors de navegadors han d'incorporar aquests canvis, normalment mitjançant actualitzacions automàtiques, per tal que l'usuari final pugui aprofitar totes les noves caracterísqtiques."},
                                {"htmlText": "En la seva última versió, <abbr title='Hypertext Markup Language 5' lang='en'>HTML5</abbr>, s'han introduït nous elements en diferents vessants com ara, la semàntica, que permet descriure amb major precisió quin és el seu contingut; la connectivitat, que permet comunicar-se amb el servidor amb tècniques noves i innovadores; emmagatzematge sense connexió, que permet a les pàgines emmagatzemar dades localment en el costat del client i operar sense connexió de manera més eficient; multimèdia, amb suport per utilitzar nativament contigut multimèdia; gràfics i fectes, que proporciona una àmplia gamma de noves característiques que s'ocupen dels gràfics a la web; rendiment i integració, que proporciona una millor optimització de la velocitat i ús del <span lang='en'>hardware</span>; accés al dispositiu, que proporciona <abbr title='Application Programming Language' lang='en'>API</abbr>s per a l'ús de diferents components interns d'entrada i sortida dels dispositius; i <abbr title='Cascading Style Sheets 3' lang='en'>CSS3</abbr>, que ofereix una nova gran varietat d'opcions per fer dissenys més sofisticats."}
                            ],
                            'altImg': 'Logo HTML5',
                            'figCaption': 'Imatge obtinguda del lloc web <a href="https://es.wikipedia.org/wiki/HTML" hreflang="es" target="_blank">HTML a Wikipedia</cite>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://es.wikipedia.org/wiki/HTML" hreflang="en" target="_blank">https://es.wikipedia.org/wiki/HTML</a> i <a href="https://developer.mozilla.org/es/docs/HTML/HTML5" hreflang="en" target="_blank">https://developer.mozilla.org/es/docs/HTML/HTML5</a>'
                        },
                        'css3': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo CSS3',
                            'figCaption': 'Imatge obtinguda del lloc web de <cite>CSS3</cite>'
                        },
                        'javascript': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Javascript',
                            'figCaption': 'Imatge obtinguda del lloc web de <cite>Javascript</cite>'
                        },
                        'angular': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Angular',
                            'figCaption': 'Imatge obtinguda del lloc web de <cite>Angular</cite>'
                        },
                        'react': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo React',
                            'figCaption': 'Imatge obtinguda del lloc web de <cite>React</cite>'
                        },
                        'vue': {
                            'paragrafs': [
                                {"htmlText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur velit non pulvinar interdum. In eget justo interdum, euismod libero efficitur, bibendum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate aliquam tristique. Nullam egestas turpis eu nibh blandit, nec facilisis felis vulputate. Suspendisse et augue lorem. Ut dignissim euismod viverra. Nulla eros nisl, ultrices ut quam non, cursus pharetra augue. Sed non tellus sit amet sapien lacinia tincidunt. Nullam nunc magna, accumsan et consequat pulvinar, ultricies quis odio. Proin pellentesque non ex sed tempor. Aenean faucibus metus arcu, id elementum leo accumsan sit amet. Proin ac justo lorem."},
                                {"htmlText": "Sed eu nunc ut justo iaculis condimentum. Sed at dapibus erat. Integer eleifend consectetur purus, at eleifend magna maximus id. Suspendisse ac dapibus risus. Pellentesque sit amet venenatis turpis. Vivamus euismod nisl nec magna pharetra, eu bibendum nisi varius. Ut ultricies ante non enim tempus, eu congue mauris mattis. Nullam gravida diam a tortor laoreet lobortis. Donec elementum nulla a dolor iaculis condimentum. Nullam euismod placerat neque. Vestibulum ornare mauris nibh, at dictum dui tempus ut. Sed purus dui, dignissim quis rhoncus sed, tristique id urna. Etiam dignissim luctus ornare."},
                                {"htmlText": "Nullam vehicula massa sed posuere aliquet. Nam bibendum placerat nulla, id volutpat est dapibus nec. Maecenas viverra ac orci quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit volutpat tellus, tristique sagittis purus fringilla non. Mauris eget justo tempus, venenatis purus quis, pellentesque quam. Integer pulvinar ex turpis, nec sagittis dui vestibulum id. Maecenas facilisis arcu volutpat euismod sagittis. Nam vulputate orci at neque tempus, id scelerisque enim scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui ex, sagittis in vestibulum ut, varius id mauris. Fusce commodo enim in leo ornare, feugiat dictum erat commodo."}
                            ],
                            'altImg': 'Logo Vue',
                            'figCaption': 'Imatge obtinguda del lloc web de <cite>Vue</cite>'
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