'use strict';


angular.module('qaaApp')
  .service('PerguntaService', ['$rootScope',function ($rootScope) {

    this.salvarPergunta = function(pergunta) {
        if(_.isUndefined($rootScope.perguntas)){
           $rootScope.perguntas = [];
        }
        $rootScope.perguntas.push(pergunta);
    };

    this.listarPerguntas = function() {
        return $rootScope.perguntas;        
    };

}]);