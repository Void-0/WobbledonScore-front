'use strict';

/**
 * @ngdoc function
 * @name lukatennisFrontApp.controller:playersCtrl
 * @description
 * # AboutCtrl
 * Controller of the lukatennisFrontApp
 */
angular.module('lukatennisFrontApp')
  .controller('playersCtrl', function ($scope, playersList) {
    $scope.players = playersList;
  });
