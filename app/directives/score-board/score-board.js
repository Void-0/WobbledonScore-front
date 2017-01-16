'use strict';

/**
 * @ngdoc function
 * @name lukatennisFrontApp.directive:scoreBoard
 * @description
 * # scoreBoard
 *
 * Directive of the lukatennisFrontApp showing the score of the current match
 */
angular.module('lukatennisFrontApp').directive('scoreBoard', function () {
  return {
    restrict: 'E',
    scope: {
      longVersion: '='
    },
    templateUrl: 'directives/score-board/score-board.html',
    controller: function ($scope, ScoreService) {
      $scope.scoreData = ScoreService;
    }
  }
});
