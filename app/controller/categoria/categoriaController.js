const SetCategoriaController =  () => {
    angular.module('MainApp')
    .controller('CategoriaController', ['$scope', '$state', '$stateParams', 'DataFactory', 'CATEGORIES',
        ($scope, $state, $stateParams, DataFactory, CATEGORIES) => {

            DataFactory.getDataCategoria($stateParams.typeCategoria).then(
                (data)=>{
                    $scope.dataCategoria = data;
                    $scope.dataCategoria.header = CATEGORIES[$stateParams.typeCategoria].desc;
                    $scope.dataCategoria.enllacos = CATEGORIES[$stateParams.typeCategoria].items;
                    const iframe = document.querySelector('iframe');
                    const linkIframe = document.querySelector('.videoFluid a');
                    iframe.src = $scope.dataCategoria.videoEmbedLink;
                    linkIframe.href = $scope.dataCategoria.videoLink;
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