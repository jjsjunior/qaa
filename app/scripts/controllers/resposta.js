'use strict';


angular.module('qaaApp')
  .controller('RespostaCtrl',['$scope','$stateParams','RepostaService', function ($scope,$stateParams,RepostaService) {
    
   $scope.pergunta = $stateParams.pergunta;
   $scope.resposta = {};

    $scope.inserirResposta = function(){
      RepostaService.salvarResposta($scope.pergunta,$scope.resposta);
      $scope.resposta = {};
    };

  }]);
