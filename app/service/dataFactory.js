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
                                {"htmlText": "Els <span lang='en'>module bundlers</span>, són eines que els desenvolupadors de <span lang='en'>front-end</span> utilitzen per afegir mòduls JavaScript en un sol fitxer JavaScript que es pugui executar en el navegador."},
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
                                {"htmlText": "Els preprocessadors són eines que reben fitxers escrits en diversos llenguatges i els converteixen en codi comprensible pel navegador, ja que aquest només és capaç de processar <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr>, <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> i JavaScript."},
                                {"htmlText": "Disposem de preprocessadors tan per JavaScript, a l'hora transformar altres lleguatges o fer-los compatibles amb totes les versions dels navegadors, com per <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> i per a <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>, per expemple per poder fer ús de funcions i variables."},
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
                                {"htmlText": "<abbr title='Hypertext Markup Language' lang='en'>HTML</abbr>, <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> i JavaScript són els llenguatges principals del <span lang='en'>front-end</span>, dels quals es desprenen una gran quantitat de <span lang='en'>frameworks</span> i llibreries que expandeixen les seves capacitats per crear qualsevol tipus d'interfície d'usuari."},
                                {"htmlText": "A continuació, en podem veure el detall d'alguns d'ells:"}
                            ],
                            'videoEmbedLink':'https://www.youtube.com/embed/gT0Lh1eYk78',
                            'videoLink': 'https://www.youtube.com/watch?v=gT0Lh1eYk78&feature=emb_logo',
                            'videoLinkText': 'Vegeu el vídeo a Youtube',
                            'videoFigCaptionText': '<span lang="en"><abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr> & JavaScript Explained</span>'
                        },
                        'frameworksJavascript': {
                            'paragrafs': [
                                {"htmlText": "Els <span lang='en'>frameworks</span> o marcs de treball, són projectes que aglutinen biblioteques de codi i patrons de disseny avançats, i que serveixen com a base pel desenvolupament d'aplicacions diverses. En el cas dels de JavaScript, serveixen pel desenvolupament de la part <span lang='en'>front-end</span> d'una web."},
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
                                {"htmlText": "<cite>Webpack</cite>, és una eina <span lang='en'>open source</span> utilitzada pels desenvolupadors per empaquetar i exportar tots els fitxers necessaris per a que un projecte funcioni amb totes les seves dependències <span lang='en'>front-end</span>. Entre d'altres funcionalitats, amb <cite>Webpack</cite> podem obtenir un fitxer Javascript que continguila totalitat del codi necessari en un projecte minimitzat i transpilat, incloent les seves dependències, o bé un fitxer amb el <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> després d'haver passat els preprocessadors necessaris."},
                                {"htmlText": "Utilitzar <cite>Webpack</cite> no suposa una gran dificultat per a les seves funcions més bàsiques, però a l'igual que passa amb altres eines del mateix tipus, segons anem personalitzant i profunditzant en l'aplicació i les seves funcionalitats, com és lògic, el seu us es va complicant. És a dir, com més variables tinguem que controlar amb <cite>Webpack</cite>, més gran serà el codi de configuració i els <span lang='en'>plugins<span> que tinguem que introduir al paquet."},
                                {"htmlText": "Bàsicament, la configuració constarà d'un punt d'entrada, on s'indica el punt exacte de d'on <cite>Webpack</cite> començarà a analitzar el codi per a generar els paquets; un punt de sortida, on es colocaran els paquets <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr>, <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> o JavaScript que s'hagin generat; carregadors, que fan possible que <cite>Webpack</cite> transformi tots els fitxers requerits; i <span lang='en'>plugins<span> que almplien el rang de funcionalitats disponibles per defecte, oferint entre d'altres, optimització del codi empaquetat, gestió i optimització d'imatges, incloure traces de carregadors, comprovar com ha anat l'execució o afegir codi o variables en els fitxers de la nostra aplicació."}
                            ],
                            'altImg': 'Logo Webpack',
                            'figCaption': 'Imatge obtinguda del repositori <a href="https://github.com/webpack/webpack" hreflang="en" target="_blank"><cite>GitHub</cite> de <cite>Webpack</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://www.arsys.es/blog/programacion/webpack-instalacion-funcionamiento/" hreflang="en" target="_blank">https://www.arsys.es/blog/programacion/webpack-instalacion-funcionamiento/</a>'
                        },
                        'rollupjs': {
                            'paragrafs': [
                                {"htmlText": "<cite>Rollup</cite> és un <span lang='en'>module-bundler</span> per a Javascript que complia petits trossos de codi en alguna paquet més gran i complex com pot ser una biblioteca o una aplicació. Utilitza el nou format normalitzat per a mòduls de codi inclosos en la revisió <abbr title='European Computer Manufacturers Association Script 6' lang='en'>ES6</abbr> de Javascript en lloc de solucions anteriors com <cite lang='en'>CommonJS</cite> i <abbr title='Asynchronous Module Definition' lang='en'>AMD</abbr>. Els mòduls permeten combinarde manera lliure i perfecta les funcions més útils de les nostre boblioteques preferides."},
                                {"htmlText": "El desenvolupament de programari sol ser més fàcil si es desglossa el projecte en peces separades més petites, ja que sovint elimina interaccions inesperades i redueix notablement la complexitat dels problemes que s'han de resoldre, i simplement escriure projectes més petits des de bon pricipi no és necessàriament la resposta. Javascript, històricament, no ha inclòs aquesta capacitat com a característica principal del llenguatge."},
                                {"htmlText": "A més d'habilitar l'ús dels mòduls, <cite>Rollup</cite> també analitza de forma estàtic el codi importat i exclou qualsevol cosa que realment no s'utilitzi. D'aquesta manera, permet compilar amb eines i mòduls existents sense afegir dependències adicionals ni augmentar la mida del projecte. Com que <cite>Rollup</cite> inclou el mínim necessari, s'obtenen biblioteques i aplicacions més lleugeres, ràpides i menys complicades. Atès que aquest enfocament pot utilitzar declaracions d'importació i exportació explícites, és més eficaç que simplement executar un minificador automatitzat per detectar variables que no s'utilitzin en el codi compilat de sortida."}
                            ],
                            'altImg': 'Logo Rollup.js',
                            'figCaption': 'Imatge obtinguda del lloc web de <cite lang="en"><a href="https://rollupjs.org/guide/en/" hreflang="en" target="_blank"><cite>Rollup.js</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://rollupjs.org/guide/en/" hreflang="en" target="_blank">https://rollupjs.org/guide/en/</a>'
                        },
                        'parcel': {
                            'paragrafs': [
                                {"htmlText": "<cite>Parcel</cite> és un empaquetador d'aplicacions web, que es diferencia per l'experiència que ofereix als desenvolupadors. Ofereix un rendiment ultra-ràpid, utilitzant processament multinucli, i que no requereix configuració. <cite>Parcel</cite> pot utilitzar qualsevol tipus de fitxer com a punt d'entrada, però el millor per fer-ho és un fitxer <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> o Javascript."},
                                {"htmlText": "<cite>Parcel</cite> te un servidor de desenvolupament encastat, el qual reconstrueix l'aplicació que s'està desenvolupant quan es realitzen canvis en els fitxers, i soporta el <abbr title='Hot Module Replacement' lang='en'>HMR</abbr> per un desenvolupament més ràpid, en els casos de no tenir un servidor propi o que l'aplicació que s'estigui desenvolupant es renderitzi completament en el costat del client. Disposa també d'un mode de compilació per a producció, que ens prepararà l'aplicació d'un cop amb el minificador per optimitzar els fitxers de codi."},
                                {"htmlText": "A diferència d'altres empaquetadors que requereixen la instal·lació i configuració de <span lang='en'>plugins</span> per a transformar recursos, <cite>Parcel</cite> té suport per a moltes transformacions i transpiladors comuns, sense la necessitat d'instal·lar ni configurar res adicional. Es pot transformar Javascript utilitzant <cite>Babel</cite>, <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> utilitzant <cite>PostCSS</cite>, i <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> utilitzant <cite>PostHTML</cite>. <cite>Parcel</cite> executarà aquestes transformacions de manera automàtica quan trobi el fitxer de configuració corresponent en un mòdul."}
                            ],
                            'altImg': 'Logo Parcel',
                            'figCaption': 'Imatge obtinguda del repositori <a href="https://github.com/parcel-bundler" hreflang="en" target="_blank"><cite>GitHub</cite> de <cite>Parcel</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://es.parceljs.org/" hreflang="es" target="_blank">https://es.parceljs.org/</a>'
                        },
                        'babel': {
                            'paragrafs': [
                                {"htmlText": "<cite>Babel</cite> és un transcompilador gratuït de Javascript de codi obert que s'utilitza principalment per a convertir codi de les versions més noves de Javascript en una versió de Javascript compatible amb versions anteriors que pugui ser executada per motors de Javascript més antics. <cite>Babel<cite> és una eina popular per a utilitzar les funcions noves del llenguatge de programació Javascript."},
                                {"htmlText": "Els desenvolupadors poden utilitzar les noves característiques del llenguatge Javascript utilitzant <cite>Babel</cite> per a convertir el seu codi font en versions de Javascript que els navegadors en evolució puguin processar. Els <span lang='en'>plugins</span> de <cite>Babel</cite> s'utilitzen per a transformar la sintaxis que no s'admet àmpliament en una versió anterior compatible. Per exemple, les <span lang='en'>arrow functions</span> es converteixen en declaracions de funcions regulars, que els navegadors més antics seran capaços d'interpretar."},
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
                                {"htmlText": "<cite>PostCSS</cite> no és un preprocessador de per si, no transforma <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>. De fet, per ell mateix no fa molt. El que fa és proporcionar un analitzador <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> i un marc per crear complements que puguin analitzar, aliniar, tractar actius, optimitzar, buscar errades i transformar <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> analitzat. <cite>PostCSS</cite> analitza <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> en un arbre de sintaxi abstracta, el passa a través d'ina sèrie de complements i llavors el concatena novament en una cadena. Si s'està familiaritzat amb Javascript, es pot pensar en <cite>PostCSS</cite> com un <cite>Babel</cite> per a <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>."},
                                {"htmlText": "Actualment hi ha més de 200 complements per a <cite>PostCSS</cite>, molts dels quals es poden trobar a la pàgina de <a href='https://github.com/postcss/postcss' hreflang='en' target='_blank'><cite>GitHub</cite> de <cite>PostCSS</cite></a>, mentre d'altres es poden trobar en un útil directori de <cite>PostCSS</cite> <a href='https://www.postcss.parts/' hreflang='en' target='_blank'>postcss.parts</a>. Es pot integrar <cite>PostCSS</cite> amb la majoria de les eines de compilació, inclosos <cite>Gulp</cite>, <cite>Grunt</cite>, <cite>Webpack</cite> o <cite>npm</cite>"},
                                {"htmlText": "Cada <span lang='en'>plugin</span> que es necessiti es pot instal·lar separadament, d'aquesta manera es poden elegir en l'ordre que es vulguin i en quin ordre es vol que s'apliquin. Els <span lang='en'>plugins</span> de forma adicional, es poden configurar utilitzant un conjunt d'opcions. Es poden escriure <span lang='en'>plugins</span> personalitzats, ja que cada <span lang='en'>plugin</span> reb el <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> transformat com a paràmetre d'entrada, l'analitza o el modifica i el retorna de la mateixa forma, per tant els <span lang='en'>plugins</span> no necessiten tractar <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> i tornar-lo a convertir en un <span lang='en'>string</span>. D'altra banda, ens permet escriure codi que respecta els estàndards i d'aquesta manera sigui compatible amb futures versions de <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>."}
                            ],
                            'altImg': 'Logo PostCSS',
                            'figCaption': 'Imatge obtinguda del lloc web de <a href="https://postcss.org/" hreflang="en" target="_blank"><cite>PostCSS</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://www.sitepoint.com/an-introduction-to-postcss/" hreflang="en" target="_blank">https://www.sitepoint.com/an-introduction-to-postcss/</a>'
                        },
                        'html5': {
                            'paragrafs': [
                                {"htmlText": "<abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> és un llenguatge de marcat per a la implementació de pàgines web i un estàndard que serveix de referència del <span lang='en'>software</span> que conecta amb l'eleboració de pàgines web amb les seves diferents versions, defineix una estructura bàsica i un codi per a la definició de continguts d'una pàgina web, com text, imatges, vídeos o jocs entre d'altres. Es considera el llenguatge web més important, sent la seva invenció crucial per a l'aparició, el desenvolupament i l'expansió de la <abbr title='World Wide Web' lang='en'>WWW</abbr>. Aquest és l'estàndard que s'ha imposat en la visualització de pàgines web i és el que tots els navegadors acuals han adoptat. Hipertext es refereix als enllaços que connecten les pàgines web entre si, ja sigui dintre del mateix lloc web o entre d'altres, així els vincles són un aspecte fonamental en la web."},
                                {"htmlText": "Aquest llenguatge basa la seva filosofia de desenvolupament en la diferenciació, per afegir un element extern a la pàgina, aquest no s'incrustadirectament en el codi de la pàgina, sinó que es fa referència a la ubicació d'aquest element, i d'aquesta manera, la pàgina només conté el text de referència, mentre que la tasca d'unir tots els elements i preparar-ne la visualització, recau en el navegador. Al llarg de totes les seves versions s'han anat incorporant i suprimint característiques, per tal de fer-lo més eficient i facilitar el desenvolupament de pàgines web compatibles amb tot tipus de dispositius. Per poder interpretar correctament una nova versió d'<abbr title='Hypertext Markup Language' lang='en'>HTML</abbr>, els desenvolupadors de navegadors han d'incorporar aquests canvis, normalment mitjançant actualitzacions automàtiques, per tal que l'usuari final pugui aprofitar totes les noves caracterísqtiques."},
                                {"htmlText": "En la seva última versió, <abbr title='Hypertext Markup Language 5' lang='en'>HTML5</abbr>, s'han introduït nous elements en diferents vessants com ara, la semàntica, que permet descriure amb major precisió quin és el seu contingut; la connectivitat, que permet comunicar-se amb el servidor amb tècniques noves i innovadores; emmagatzematge sense connexió, que permet a les pàgines emmagatzemar dades localment en el costat del client i operar sense connexió de manera més eficient; multimèdia, amb suport per utilitzar nativament contigut multimèdia; gràfics i fectes, que proporciona una àmplia gamma de noves característiques que s'ocupen dels gràfics a la web; rendiment i integració, que proporciona una millor optimització de la velocitat i ús del <span lang='en'>hardware</span>; accés al dispositiu, que proporciona <abbr title='Application Programming Language' lang='en'>API</abbr>s per a l'ús de diferents components interns d'entrada i sortida dels dispositius; i <abbr title='Cascading Style Sheets 3' lang='en'>CSS3</abbr>, que ofereix una nova gran varietat d'opcions per fer dissenys més sofisticats."}
                            ],
                            'altImg': 'Logo HTML5',
                            'figCaption': 'Imatge obtinguda del lloc web <a href="https://es.wikipedia.org/wiki/HTML" hreflang="es" target="_blank"><abbr title="Hypertext Markup Language" lang="en">HTML</abbr> a <cite>Wikipedia</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://es.wikipedia.org/wiki/HTML" hreflang="es" target="_blank">https://es.wikipedia.org/wiki/HTML</a> i <a href="https://developer.mozilla.org/es/docs/HTML/HTML5" hreflang="es" target="_blank">https://developer.mozilla.org/es/docs/HTML/HTML5</a>'
                        },
                        'css3': {
                            'paragrafs': [
                                {"htmlText": "<abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> és un llenguatge de disseny gràfic per definir i crear la presentació d'un document estructurat escrit en un llenguatge de marcat. S'utilitza àmpliament per establir el disseny visual dels documents web, i poder crear pàgines visualment atractives i interfícies d'usuari per aplicacions web i moltes aplicacions mòbils. Està dissenyat principalment per marcar la separació del contingut del document i la seva presentació, mitjançant característiques com capes, colors i fonts. Aquesta separació busca millorar l'accessibilitat del document, oferir més flexibilitat i control en l'especificació de característiques prestacionals, permetres que diferents documents web comparteixin un mateix estil, utilitzant un sol full d'estils separat en un fitxer .css i reduir la complexitat i la repetició de codi en l'estructura del document."},
                                {"htmlText": "La separació del format i el contingut fa possible presentar el mateix document marcat en diferents estils per a diferents mètodes de renderitzat, com en pantalla, impressió o veu. També es pot mostrar un pàgina web de manera diferent depenent de la mida de la pantalla o tipus de dispositiu. L'especificació de <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr> descriu un esquema prioritari per determinar quines regles d'estil s'apliquen si més d'una regla coincideix per un element en particular. Aquestes regles s'apliquen amb un sistema anomenat cascada, de manera que les prioritats es calculen i s'assignen a les regles, fent-les així predictibles."},
                                {"htmlText": "<abbr title='Cascading Style Sheets 3' lang='en'>CSS3</abbr> representa una simplificació de processos, pel que fa als principis bàsics de disseny i les pràctiques per obtenir una millor presentació visual no s'ha alterat res, tot i que s'han donat efectes de transició molt elegant i de fantasia. Tenim la facilitat de produir dissenys més flexibles que permeten optimitzar l'experiència de l'usuari, l'ús d'eines de consulta de mitjans, permeten millorar el rendiment i la visualització en base al dispositiu. Amb els nous selectors, es disposa d'una capacitat d'englobar d'una forma més fàcil i senzilla els elements <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> per poder realitzar efectes d'animació sense l'ús d'altres llenguatges o marcs de treball."}
                            ],
                            'altImg': 'Logo CSS3',
                            'figCaption': 'Imatge obtinguda del lloc web <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" hreflang="en" target="_blank"><abbr title="Cascading Style Sheets" lang="en">CSS</abbr> a <cite>Wikipedia</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada" hreflang="es" target="_blank">https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada</a> i <a href="https://www.lawebera.es/xhtml-css/darle-uso-apropiado-css3.php" hreflang="es" target="_blank">https://www.lawebera.es/xhtml-css/darle-uso-apropiado-css3.php</a>'
                        },
                        'javascript': {
                            'paragrafs': [
                                {"htmlText": "Javascript és un llenguatge lleuger i interpretat, orientat a objectes amb funcions de primera classe, més conegut com el llenguatge d'<span lang='en'>script</span> per a pàgines web, però també utilitzat en molts entorns sense navegador, com ara <cite>node.js</cite>, <cite>Apache CouchDB</cite> i <cite>Adobe Acrobat</cite>. És un llenguatge <span lang='en'>script<span> multi-paradigma, basat en prototips, dinàmic, que suporta estils de programació funcional, orientada a objectes i imprativa. La sintaxi és similar a <cite>Java</cite> i <cite>C++</cite> amb la intenció de reduir el nombre de nous conceptes necessaris per aprendre el llenguatge."},
                                {"htmlText": "Javascript pot funcionar com a llenguatge procedimental i com llenguatge orientat a objectes. Els objectes es creen programaticament afegint mètodes i propietats, a allò que d'una altra forma serien objectes buits en temps d'execució, en contraposició a les definicions sintàctiques de classes comuns en els llenguatges compilats com <cite>Java</cite> i <cite>C++</cite>. Una vegada s'ha construit un objecte, pot usar-se com a model o prototip per crear objectes similars. Les capacitats dinàmiques de Javascript inclouen contrucció d'objectes en temps d'execució, llistes variables de paràmetres, variables que poden contenir funcions, creació s'<span lang='en'>scripts</span> dinàmics, introspecció d'objectes i recuperació de codi font."},
                                {"htmlText": "L'estàndard de Javascript és <abbr title='European Computer Manufacturers Association Script' lang='en'><cite>ECMAScript</cite></abbr>, i des de fa anys tots els navegadors modern el suporten. El <time datetime='17-07-2015'>17 de juliol de 2015</time>, es va publicar la sexta versió de l'especificació, la qual oficialment s'anomena <abbr title='European Computer Manufacturers Association Script' lang='en'><cite>ECMAScript</cite></abbr> 2015 o ES6. Des de llavors, els estàndars estan en cicles de llançaments anuals afegint noves funcionalitats en cada versió."}
                            ],
                            'altImg': 'Logo Javascript',
                            'figCaption': 'Imatge obtinguda del lloc web <a href="https://es.wikipedia.org/wiki/JavaScript" hreflang="en" target="_blank">JavaScript a <cite>Wikipedia</cite></a>',
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" hreflang="es" target="_blank">https://developer.mozilla.org/es/docs/Web/JavaScript</a> i <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Acerca_de_JavaScript" hreflang="es" target="_blank">https://developer.mozilla.org/es/docs/Web/JavaScript/Acerca_de_JavaScript</a>'
                        },
                        'angular': {
                            'paragrafs': [
                                {"htmlText": "<cite>Angular</cite> és un marc de treball de disseny  i desenvolupament d'aplicacions per a la creació de <abbr title='Single Page Applications' lang='en'>SPAs</abbr> eficients i sofisticades. Permet la creació d'aplicacions per a web, web en mòbil, mòbil natiu i escriptori natiu. Proporciona la màxima velocitat en la plataforma web i permet la creació amb rapidesa de components per a la web mitjançant plantilles declaratives. Des de el prototip fins la implementació, <cite>Angular</cite> ofereix la productivitat i la infraestructura escalable que admet les aplicacions més grans de Google."},
                                {"htmlText": "El <span lang='en'>framework</span> està desenvolupat en TypeScript, és de codi obert i mantingut per Google amb l'objectiu és augmentar les aplicacions basades en navegador amb capacitat de Model Vista Controlador, en un esforç per fer que el desenvolupament i les proves siguin més fàcils. La biblioteca llegeix l'<abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> que conté atributs de les etiquetes personalitzades adicionals, llavors obeeix a les directives dels atributs personalitzats, i uneix les peces d'entrada o sortida de la pàgina a un model representat per les variables estàndard de Javascript. <cite>Angular</cite> es basa en classes tipus Component, les propietats de les quals són les que s'utilitzen per fer vincle amb les dades, que contenen propietats i mètodes."},
                                {"htmlText": "<cite>Angular</cite> converteix les plantilles en codi altament optimitzat per a les màquines virtuals de Javascript d'avui dia, oferint tots els avantatges del codi escrit a ma amb la productivitat d'un <span lang='en'>framework</span>. S'executa la primera vista de l'aplicació en node.js, .NET, PHP o d'altres servidors per al renderitzat quasi instantani, obtenint un sol <abbr title='Hypertext Markup Language' lang='en'>HTML</abbr> i <abbr title='Cascading Style Sheets' lang='en'>CSS</abbr>, i a més obre possibilitats per a l'optimització del <abbr title='Search Engine Optimization' lang='en'>SEO</abbr> del lloc web. Les aplicacions d'<cite>Angular</cite> es carreguen ràpidamentgràcies al seu enrutador de components, que ofereix una divisió automàtica de codis per a que els usuaris només carreguin el codi necessari per processar la vista que soliciten."}
                            ],
                            'altImg': 'Logo Angular',
                            'figCaption': "Imatge obtinguda del lloc web d'<a href='https://angular.io/' hreflang='en' target='_blank'><cite>Angular</cite></a>",
                            'fontText': 'Textos elaborats a partir de la informació consultada a <a href="https://angular.io/" hreflang="en" target="_blank">https://angular.io/</a> i <a href="https://es.wikipedia.org/wiki/Angular_(framework)" hreflang="en" target="_blank">https://es.wikipedia.org/wiki/Angular_(framework)</a>'

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