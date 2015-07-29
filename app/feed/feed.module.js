(function() {
  'use strict';

  angular
    .module('feed', [
      'ngRoute'
    ])
    .config(function($routeProvider) {

      $routeProvider
        .when('/feed', {
          templateUrl: 'feed/views/feed.html',
          controller: 'FeedController'
        })


    });

})();
