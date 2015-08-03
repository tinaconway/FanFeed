(function() {
  'use strict';

  angular
    .module('feed', [
      'ngRoute',
      'toaster',
      'ngAnimate'
    ])
    .config(function($routeProvider) {

      $routeProvider
        .when('/starred', {
          templateUrl: 'feed/views/starred.html',
          controller: 'FeedController'
        })




    });

})();
