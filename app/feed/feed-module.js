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
          templateUrl: 'feed/starred-tpl.html',
          controller: 'FeedController',
          resolve: {
            authenticated: function($q, $location, $auth) {
              var deferred = $q.defer();
              if (!$auth.isAuthenticated()) {
                $location.path('/login');
              } else {
                deferred.resolve();
              }
              return deferred.promise;
            }
          }
        })
    });
})();
