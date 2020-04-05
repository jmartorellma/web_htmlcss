const SetPortadaController = () => {
    angular.module('MainApp')
    .controller('PortadaController', ['$scope', '$state',
        ($scope,$state) => {
            
            $scope.anarADetall = () =>{
                $state.go('Detall');
            };
        }
    ]);
};

export {SetPortadaController};