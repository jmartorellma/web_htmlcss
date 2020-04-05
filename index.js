import angular from './node_modules/angular';
import uirouter from './node_modules/@uirouter/angularjs/release/ui-router-angularjs.js';
import angularanimate from './node_modules/angular-animate/angular-animate.js';
import angularsanitize from './node_modules/angular-sanitize/angular-sanitize.js';
import angulararia from './node_modules/angular-aria/angular-aria.js';
import angularmessages from './node_modules/angular-messages/angular-messages.js';
import angularmaterial from './node_modules/angular-material/angular-material.js';

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
SetLayoutController();
SetPortadaController();
SetCategoriaController();
SetDetallController();