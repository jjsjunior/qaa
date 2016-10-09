'use strict';


angular.module('qaaApp')
  .controller('ListaPerguntasCtrl', function ($scope,$state,$stateParams,PerguntaService) {
    $scope.perguntas = PerguntaService.listarPerguntas();

    $scope.responder = function(pergunta){
      $state.go( 'resposta',{pergunta: pergunta});
    };

    $scope.avaliarReposta = function(pergunta){
      $state.go( 'avaliacaoResposta',{pergunta: pergunta});
    };

    $scope.criarPergunta = function(){
      $state.go( 'novaPergunta');
    };

  });
