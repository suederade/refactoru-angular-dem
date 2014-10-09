'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.homeView',
  'myApp.view2',
  'myApp.version',
  "ui.bootstrap",
  "ui.router"
]).
config(['$stateProvider', '$routeProvider', function($stateProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index.html'});
  // When on nothing
  $routeProvider.when('/',
  {
  	templateUrl: '/app/homeview/home.html',
  	controller: 'ThumbnailCtrl'
  });
  // For main starcraft page
  $stateProvider.state('starcraft', {
    templateUrl: '/app/starcraft/starcraft.html',
    controller: 'PlayersController'
  });
  // For showing the HTML of starcraft
  $stateProvider.state('starcraftHtml', {
    templateUrl: '/app/starcraft/starcraft-html.html',
    controller: 'PlayersController'
  });
  // For showing the JS of starcraft
  $stateProvider.state('starcraftJs', {
    templateUrl: '/app/starcraft/starcraft-js.html',
    controller: 'PlayersController'
  });
  // For main inspirational quotes page
  $stateProvider.state('quotes', {
    templateUrl: '/app/quotes/quotes.html',
    controller: 'QuotesController'
  });
  // For showing the HTML of quotes
  $stateProvider.state('quotesHtml', {
    templateUrl: '/app/quotes/quotes-html.html',
    controller: 'QuotesController'
  });
  // For shwoing the JS of quotes
  $stateProvider.state('quotesJs', {
    templateUrl: '/app/quotes/quotes-js.html',
    controller: 'QuotesController'
  });


}]);

myApp.run(function($rootScope, $state){
  $rootScope.$state = $state;
});



// For Starcraft View
myApp.filter('skip', function() {
  return function(data, index) {
    return data.slice(index);
  };
});