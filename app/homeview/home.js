'use strict';

angular.module('myApp.homeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homeview', {
    templateUrl: '/app/homeview/home.html',
    controller: 'HomeViewCtrl'
  });
}])

.controller('HomeViewCtrl', [function() {

}]);