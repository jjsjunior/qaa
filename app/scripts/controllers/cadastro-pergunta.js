'use strict';


angular.module('qaaApp')
  .controller('CadastroPerguntaCtrl',['$scope','$state','PerguntaService', function ($scope,$state,PerguntaService) {
    $scope.pergunta = {};

    $scope.salvar = function(){
      PerguntaService.salvarPergunta($scope.pergunta);
      $state.go( 'perguntas');
    };

  }]);
