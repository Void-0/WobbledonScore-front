'use strict';

/**
 * @ngdoc function
 * @name lukatennisFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lukatennisFrontApp
 */
angular.module('lukatennisFrontApp')
  .controller('aboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    alert('about loaded !');
  });
