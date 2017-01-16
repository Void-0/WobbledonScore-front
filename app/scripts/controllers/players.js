'use strict';

/**
 * @ngdoc function
 * @name lukatennisFrontApp.controller:playersCtrl
 * @description
 * # playersCtrl
 *
 * Controller of the lukatennisFrontApp showing a list of registered players
 */
angular.module('lukatennisFrontApp')
  .controller('playersCtrl', function ($scope, playersList) {
    $scope.players = playersList;
  });
