const SetDetallController =  (images) => {
    angular.module('MainApp')
    .controller('DetallController', ['$scope', '$state', '$stateParams', 'DataFactory', 'CATEGORIES',
        ($scope, $state, $stateParams, DataFactory, CATEGORIES) => {
            DataFactory.getDataDetall($stateParams.typeDetall).then(
                (data)=>{
                    $scope.dataDetall = data;
                    const constantDetall = CATEGORIES[$stateParams.typeCat].items.find((item)=>{return item.codi===$stateParams.typeDetall});
                    $scope.dataDetall.header = constantDetall ? constantDetall.desc : '';
                    $scope.dataDetall.imgLink = images[$stateParams.typeDetall];
                    $scope.dataDetall.linksRe = CATEGORIES[$stateParams.typeCat].items.filter((item)=>{return item.codi !== $stateParams.typeDetall}).map(i=> { return {'codi': i.codi, 'desc': i.desc, 'img': images[i.codi]}});
                },
                (error)=>{
                    console.log(error);
                }
            );

            $scope.goDetall = (codi) => {
                $state.go('Detall', { typeCat: $stateParams.typeCat, typeDetall: codi });
            };
        }
    ]);
};

export {SetDetallController};