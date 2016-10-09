'use strict';


angular.module('qaaApp')
  .controller('CadastroPerguntaCtrl', function ($scope,$state,$stateParams,$rootScope,PerguntaService) {
    $scope.pergunta = {};

    $scope.salvar = function(){
      PerguntaService.salvarPergunta($scope.pergunta);
      $state.go( 'perguntas');
    };

  });
