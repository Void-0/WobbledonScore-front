'use strict';

/**
 * @ngdoc function
 * @name lukatennisFrontApp.controller:homeCtrl
 * @description
 * # MainCtrl
 * Controller of the lukatennisFrontApp
 */
angular.module('lukatennisFrontApp')
  .controller('homeCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    alert('home loaded !');
  });
