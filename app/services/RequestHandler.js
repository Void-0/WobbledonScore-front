'use strict';

/**
 * @ngdoc function
 * @name lukatennisFrontApp.factory:RequestHandler
 * @description
 * # RequestHandler
 *
 * CRUD service.
 */
angular.module('lukatennisFrontApp').factory('RequestHandler', function($resource, SERVERPATH) {
  return $resource('http://' + SERVERPATH +'/players',{}, {
    query: {
      method: 'GET',
        isArray: true
    },
    update: {
      method: 'PUT'
    }
  });
});
