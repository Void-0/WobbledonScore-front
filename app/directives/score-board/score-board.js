'use strict';

angular.module('lukatennisFrontApp').directive('scoreBoard', function () {
  return {
    restrict: 'E',
    scope: {
      longVersion: '='
    },
    templateUrl: 'directives/score-board/score-board.html',
    controller: function ($scope, ScoreService) {

      $scope.scoreData = ScoreService;

      alert('score');
    }
  }
});
