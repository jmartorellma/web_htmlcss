const SetDetallController =  (images) => {
    angular.module('MainApp')
    .controller('DetallController', ['$scope', '$state', '$stateParams', 'DataFactory', 'CATEGORIES',
        ($scope, $state, $stateParams, DataFactory, CATEGORIES) => {

            DataFactory.getDataDetall($stateParams.typeDetall).then(
                (data)=>{
                    $scope.dataDetall = data;
                    const constantDetall = CATEGORIES[$stateParams.typeCat].items.find((item)=>{return item.codi===$stateParams.typeDetall});
                    $scope.dataDetall.header = constantDetall ? constantDetall.desc : '';
                    $scope.dataDetall.imgLink = images[$stateParams.typeDetall][0];
                    $scope.imageJPGL = images[$stateParams.typeDetall][1];
                    $scope.imageJPGS = images[$stateParams.typeDetall][2];
                    $scope.imageJPGM = images[$stateParams.typeDetall][3]; 
                    $scope.imagePNGL = images[$stateParams.typeDetall][4];
                    $scope.imagePNGS = images[$stateParams.typeDetall][5];
                    $scope.imagePNGM = images[$stateParams.typeDetall][6]; 
                    $scope.dataDetall.linksRe = CATEGORIES[$stateParams.typeCat].items.filter((item)=>{return item.codi !== $stateParams.typeDetall}).map(i=> { return {'codi': i.codi, 'desc': i.desc, 'img': images[i.codi][0]}});
                },
                (error)=>{
                    console.log(error);
                }
            );

            $scope.goDetall = (codi) => {
                $state.go('Detall', { typeCat: $stateParams.typeCat, typeDetall: codi });
            };

            $scope.$on('$viewContentLoaded', function(event) {
                if (!$scope.$$phase) $scope.$apply();
            });
        }
    ]);
};

export {SetDetallController};