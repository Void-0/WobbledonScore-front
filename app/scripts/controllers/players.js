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

    console.log('iiii', $scope.players);



    alert('players loaded !');


  });
