const SetPortadaController = () => {
    angular.module('MainApp')
    .controller('PortadaController', ['$scope', 'DataFactory',
        ($scope, DataFactory) => {
            
            DataFactory.getDataPortada().then(
                (data)=>{
                    $scope.dataPortada = data;

                    const iframe = document.querySelector('iframe');
                    const linkIframe = document.querySelector('.videoFluid a');
                    iframe.src = $scope.dataPortada.videoEmbedLink;
                    linkIframe.href = $scope.dataPortada.videoLink;
                },
                (error)=>{
                    console.log(error);
                });
        }
    ]);
};

export {SetPortadaController};