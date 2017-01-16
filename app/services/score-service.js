'use strict';

/**
 * @ngdoc function
 * @name lukatennisFrontApp.factory:ScoreService
 * @description
 * # ScoreService
 *
 * Score service receiving and processing the websocket information
 */
angular.module('lukatennisFrontApp').factory('ScoreService', function ($websocket, SERVERPATH) {
  // Open a WebSocket connection
  var dataStream = $websocket('ws://' + SERVERPATH + '/score');

  var scoreData = {
    content: {}
  };

  dataStream.onMessage(function (message) {
    scoreData.content = JSON.parse(message.data);
    scoreData.content.previousSets = [];

    scoreData.content.matchScoreLog.forEach(function (pointPlayed, index, matchScoreLog) {
      if (index > 0) {
        if (pointPlayed.scorePlayerA.sets > matchScoreLog[index - 1].scorePlayerA.sets) {
          scoreData.content.previousSets.push({
            scorePlayerA: {
              games: matchScoreLog[index - 1].scorePlayerA.games + 1
            },
            scorePlayerB: {
              games: matchScoreLog[index - 1].scorePlayerB.games
            }
          });
        } else if (pointPlayed.scorePlayerB.sets > matchScoreLog[index - 1].scorePlayerB.sets) {
          scoreData.content.previousSets.push({
            scorePlayerA: {
              games: matchScoreLog[index - 1].scorePlayerA.games
            },
            scorePlayerB: {
              games: matchScoreLog[index - 1].scorePlayerB.games + 1
            }
          });
        }
      }
    });
  });

  var methods = {
    data: scoreData,
    get: function () {
      dataStream.send(JSON.stringify({action: 'get'}));
    }
  };

  return methods;
});
