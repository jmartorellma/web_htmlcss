const SetCategoriaController = (images) => {
    angular.module('MainApp')
    .controller('CategoriaController', ['$scope', '$state', '$stateParams', 'DataFactory', 'CATEGORIES',
        ($scope, $state, $stateParams, DataFactory, CATEGORIES) => {

            DataFactory.getDataCategoria($stateParams.typeCategoria).then(
                (data)=>{
                    $scope.dataCategoria = data;
                    $scope.dataCategoria.header = CATEGORIES[$stateParams.typeCategoria].desc;
                    const iframe = document.querySelector('iframe');
                    const linkIframe = document.querySelector('.videoFluid a');
                    iframe.src = $scope.dataCategoria.videoEmbedLink;
                    linkIframe.href = $scope.dataCategoria.videoLink;
                    $scope.dataCategoria.enllacos = CATEGORIES[$stateParams.typeCategoria].items.map(i=> { return {'codi': i.codi, 'desc': i.desc, 'img': images[i.codi]}});
                },
                (error)=>{
                    console.log(error);
                }
            );

            $scope.goDetall = (codi) => {
                $state.go('Detall', { typeCat: $stateParams.typeCategoria, typeDetall: codi });
            };
        }
    ]);
};

export {SetCategoriaController};