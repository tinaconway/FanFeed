angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'auth',
  'profile',
  'posts',
  'feed',
  'toaster'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/views/home.html',
      controller: 'FeedController',
      resolve: {
        checkAuth: function ($auth, $q, $location) {
          var dfd = $q.defer();
          if(!$auth.isAuthenticated()) {
            $location.path('/login');
          } else {
            dfd.resolve();
          }
          return dfd.promise;

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
