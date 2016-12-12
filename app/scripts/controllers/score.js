'use strict';

/**
 * @ngdoc function
 * @name lukatennisFrontApp.controller:scoreCtrl
 * @description
 * # AboutCtrl
 * Controller of the lukatennisFrontApp
 */
angular.module('lukatennisFrontApp')
  .controller('scoreCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    alert('score loaded !');
  });
