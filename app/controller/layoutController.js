const SetLayoutController = () => {
    angular.module('MainApp')
    .controller('LayoutController', ['$scope', '$state', 'CATEGORIES',
        ($scope, $state, CATEGORIES) => {

            $scope.categoriesList = Object.entries(CATEGORIES);

            $scope.showMenu = (menuCategoria) => {
                const listId = '#' + menuCategoria.buttonId;
                const idList = '#' + menuCategoria.listId;
                const button = document.querySelector(listId);
                const list = document.querySelector(idList);
                list.style.width = button.offsetWidth.toString()+"px";
                menuCategoria.show = true;
            };
            $scope.goCategoria = (param) => {
                $state.go('Categoria', { typeCategoria: param });
            }

            $scope.goDetall = (paramCategoria, paramDetall) =>{
                $state.go('Detall', { typeCat: paramCategoria, typeDetall: paramDetall });
            }
        }
    ]);
};

export {SetLayoutController};