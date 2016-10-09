'use strict';


angular.module('qaaApp')
  .controller('AvaliacaoRespostaCtrl', function ($scope,$state,$stateParams,RepostaService) {
    $scope.pergunta = $stateParams.pergunta;

    $scope.incluirVoto = function(resposta){
      RepostaService.incluirVoto(resposta);      
    };

  });
