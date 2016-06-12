angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'auth',
  'feed',
  'profile',
  'toaster'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'feed/feed-tpl.html',
      controller: 'FeedController',
      resolve: {
        checkAuth: function ($auth, $q, $location) {
          var deferred = $q.defer();
          if(!$auth.isAuthenticated()) {
            $location.path('/login');
          } else {
            deferred.resolve();
          }
          return deferred.promise;

        }
      }
    })
    .when('/404', {
      template: '<h1>Sorry, page not found</h1>'
    })
    .otherwise({
      redirectTo: '/404'
    });

});
