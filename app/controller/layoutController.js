const SetLayoutController = (images) => {
    angular.module('MainApp')
    .controller('LayoutController', ['$scope', '$state', '$mdSidenav', 'CATEGORIES',
        ($scope, $state, $mdSidenav, CATEGORIES) => {

            $scope.logotip = images.logotip;
            $scope.jordi = images.jordi;
            
            $scope.categoriesList = Object.entries(CATEGORIES).reduce((acc,[key,val]) => {
                val.items.forEach(element => {
                    element.img = images[element.codi][0];
                });
                acc.push({codi: key, valor: val})
                return acc;
            },[]);

            $scope.showCategoria = (menuCategoria) => {
                const idButton = '#' + menuCategoria.buttonId;
                const idList = '#' + menuCategoria.listId;
                const button = document.querySelector(idButton);
                const list = document.querySelector(idList);
                list.style.width = button.offsetWidth.toString()+"px";
                menuCategoria.show = true;
            };

            $scope.hideCategoria = (cat, ev) => {
                if(ev.toElement != undefined && ev.toElement != null && ev.toElement.tagName != 'MD-LIST') {
                    cat.show = false;
                }
            }

            $scope.toggleMenu = (idSideNav) => {
                const side = $mdSidenav(idSideNav); 
                side.open();
            }

            $scope.closeSideNav = (idSideNav) => {
                $mdSidenav(idSideNav).close();
            }            

            $scope.goHome = ()=> {
                $scope.activeCat = null;
                $state.go('Portada');        
            }

            $scope.goCategoria = (param, menuCategoria) => {
                menuCategoria.show = false;
                if($mdSidenav('sideNavMenuBurguer') != undefined && 
                   $mdSidenav('sideNavMenuBurguer').isOpen()){
                    $mdSidenav('sideNavMenuBurguer').close();
                }
                $scope.activeCat = param;
                $state.go('Categoria', { typeCategoria: param }, {reload: true});
            }

            $scope.goDetall = (paramCategoria, menuCategoria, paramDetall) => {
                menuCategoria.show = false;
                if($mdSidenav('sideNavMenuBurguer') != undefined && 
                   $mdSidenav('sideNavMenuBurguer').isOpen()){
                    $mdSidenav('sideNavMenuBurguer').close();
                }
                $scope.activeCat = paramCategoria;
                $state.go('Detall', { typeCat: paramCategoria, typeDetall: paramDetall });
            }
        }
    ]);
};

export {SetLayoutController};