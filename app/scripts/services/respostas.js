'use strict';


angular.module('qaaApp')
  .service('RepostaService', function () {

    this.salvarResposta = function(pergunta,resposta) {
        if(_.isUndefined(pergunta.respostas)){
           pergunta.respostas = [];
        }
        resposta.votos = 0;
        pergunta.respostas.push(resposta);
    };

    this.incluirVoto = function(resposta) {        
        resposta.votos++;
    };

    

});