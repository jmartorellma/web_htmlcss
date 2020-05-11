import './node_modules/material-icons/iconfont/material-icons.css';
import './node_modules/angular-material/angular-material.min.css';

import './node_modules/core-js/modules/es6.array.find.js';
import './node_modules/core-js/modules/es7.object.entries.js';
/** 
 * No s'importa angular ja que ui-router ja fa l'import de la llibreria implícitament i amb tots dos
 * la consola del navegador llança un error avisant de s'esta carregant la llibreria 2 vegades
 * */
// import angular from './node_modules/angular/angular.min.js';
import './node_modules/@uirouter/angularjs/release/ui-router-angularjs.min.js';
import './node_modules/angular-animate/angular-animate.min.js';
import './node_modules/angular-sanitize/angular-sanitize.min.js';
import './node_modules/angular-aria/angular-aria.min.js';
import './node_modules/angular-messages/angular-messages.min.js';
import './node_modules/angular-material/angular-material.min.js';

import {images} from './app/config/loadImages.js';
import {templates} from './app/config/loadTemplates.js';
import {SetConstants} from './app/config/constants.js';
import {AngularMainModule} from './app/mainApp.js';
import {SetDataFactory} from './app/service/dataFactory.js';
import {SetLayoutController} from './app/controller/layoutController.js';
import {SetPortadaController} from './app/controller/portada/portadaController.js';
import {SetCategoriaController} from './app/controller/categoria/categoriaController.js';
import {SetDetallController} from './app/controller/detall/detallController.js';

SetConstants();
AngularMainModule(templates);
SetDataFactory();
SetLayoutController(images);
SetPortadaController();
SetCategoriaController();
SetDetallController(images);