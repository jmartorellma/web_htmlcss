const SetLayoutController = () => {
    angular.module('MainApp')
    .controller('LayoutController', ['$scope', '$state', '$mdMenu', 
        ($scope, $state, $mdMenu) => {
            $scope.showBundlerMenu = () => {
                const button = document.querySelector('#buttonBundle');
                const list = document.querySelector('#listBundle');
                list.style.width = button.offsetWidth.toString()+"px";
                $scope.displayBundlers = true;
            };
            $scope.showPreprocessadorsMenu = () => {
                $scope.displayPreprocessadors = true;
            };
            $scope.showLlenguatgesMenu = () => {
                $scope.displayLlenguatges = true;
            };
            $scope.showFrameworksMenu = () => {
                $scope.displayFrameworks = true;
            };

            $scope.goCategoria = () =>{
                $state.go('Categoria');
            }

            $scope.goDetall = () =>{
                $state.go('Detall');
            }
        }
    ]);
};

export {SetLayoutController};