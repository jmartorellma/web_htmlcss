const AngularMainModule = (templates) => {
    angular.module('MainApp',['ui.router',
                              'constantsModule',
                              'ngMaterial',                           
                              'ngMessages',
                              'ngAnimate',
                              'ngSanitize'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider)=>{
        $stateProvider
            .state('Portada', {
                url: '/portada',
                views: {
                    'principal':{
                        template: templates['portada'],
                        controller: 'PortadaController'
                    }
                }
            })
            .state('Categoria', {
                url: '/:typeCategoria',
                views: {
                    'principal':{
                        template: templates['categoria'],
                        controller:'CategoriaController'
                    }
                }
            })
            .state('Detall', {
                url: '/:typeCat/:typeDetall',
                views: {
                    'principal':{
                        template: templates['detall'],
                        controller:'DetallController'
                    }
                }
            });
        
        $urlRouterProvider.otherwise('/portada');
    }])
    .config(['$mdThemingProvider', ($mdThemingProvider)=>{
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('grey')
            .warnPalette('red')
            .backgroundPalette('grey')
    }])
};

export {AngularMainModule};