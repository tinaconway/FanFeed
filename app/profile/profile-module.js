angular.module('profile', ['ngMessages', 'ngRoute', 'mgcrea.ngStrap', 'checklist-model'])
  .config(function($routeProvider, $authProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'profile/profile-tpl.html',
        controller: 'ProfileController',
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
      });
  });
