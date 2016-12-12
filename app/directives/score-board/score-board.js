'use strict';

angular.module('lukatennisFrontApp').directive('scoreBoard', function () {
  return {
    restrict: 'E',
    scope: {
      shortVersion: '='
    },
    templateUrl: 'directives/score-board/score-board.html',
    controller: function ($scope, ScoreService) {
      console.log('ploooop dcore');

      $scope.scoreData = ScoreService;

      alert('score');
    }
  }
});