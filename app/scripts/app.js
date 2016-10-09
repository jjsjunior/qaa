'use strict';

/**
 * @ngdoc overview
 * @name qaaApp
 * @description
 * # qaaApp
 *
 * Main module of the application.
 */
angular
  .module('qaaApp', [
    'ngResource',
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('perguntas', {
        templateUrl: '/views/lista_perguntas.html',
        controller: 'ListaPerguntasCtrl',
        url: '/'
      })
      .state('novaPergunta', {
        templateUrl: '/views/cadastro_pergunta.html',
        controller: 'CadastroPerguntaCtrl',
        url: '/'
      })
      .state('avaliacaoResposta', {
        templateUrl: '/views/avaliacao_resposta.html',
        controller: 'AvaliacaoRespostaCtrl',
        url: '/avaliacaoresposta',
        params:{pergunta:null}
      })
      .state('resposta', {
        templateUrl: '/views/resposta.html',
        controller: 'RespostaCtrl',
        url: '/resposta',
        params:{pergunta:null}
      });
  });
