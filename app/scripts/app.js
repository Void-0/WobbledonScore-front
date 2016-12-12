'use strict';

/**
 * @ngdoc overview
 * @name lukatennisFrontApp
 * @description
 * # lukatennisFrontApp
 *
 * Main module of the application.
 */
angular
  .module('lukatennisFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngWebSocket'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('wobbledone', {
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'views/header.html'
            //controller: '####'
          },
          'footer': {
            templateUrl: 'views/footer.html'
            //controller: '####',
            //resolve: {
            //  something: function () {
            //    return 42;
            //  }
            //}
          },
          'sidebar-menu': {
            templateUrl: 'views/sidebar-menu.html'
            //controller: '####'
          }
        }
      })
      .state('wobbledone.home', {
        url: '/home',
        views: {
          '@': {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
          }
        }
      })
      .state('wobbledone.score', {
        url: '/score',
        views: {
          '@': {
            templateUrl: 'views/score.html',
            controller: 'scoreCtrl'
          }
        }
      })
      .state('wobbledone.players', {
        url: '/players',
        views: {
          '@': {
            templateUrl: 'views/players.html',
            controller: 'playersCtrl',
            // state is only loaded once all promises are resolved
            resolve: {
              playersList: function (RequestHandler) {
                return RequestHandler.query();
              }
            }
          }
        }
      })
      .state('wobbledone.about', {
        url: '/about',
        views: {
          '@': {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  });
