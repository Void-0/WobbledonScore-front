angular.module('lukatennisFrontApp').factory('ScoreService', function($websocket, SERVERPATH) {
  // Open a WebSocket connection
  var dataStream = $websocket('ws://' + SERVERPATH + '/score');

  var scoreData = {
    content: {}
  };

  dataStream.onMessage(function(message) {
    scoreData.content = JSON.parse(message.data);
    scoreData.content.previousSets = [];
    console.log(scoreData.content);

    scoreData.content.scoreLog.forEach(function(pointPlayed, index, scoreLog) {
      if(index > 0){
        if(pointPlayed.setA > scoreLog[index-1].setA) {
          scoreData.content.previousSets.push({
            gameA: scoreLog[index-1].gameA + 1,
            gameB: scoreLog[index-1].gameB
          });
        } else if(pointPlayed.setB > scoreLog[index-1].setB) {
          scoreData.content.previousSets.push({
            gameA: scoreLog[index-1].gameA,
            gameB: scoreLog[index-1].gameB + 1
          });
        }
      }
    });
  });

  var methods = {
    data: scoreData,
    get: function() {
      dataStream.send(JSON.stringify({ action: 'get' }));
    }
  };

  return methods;
});
