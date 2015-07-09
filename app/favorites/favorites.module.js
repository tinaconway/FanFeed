(function () {
  'use strict';
angular.module('favorites', [
  'ngRoute'

])

.config(function($routeProvider) {
  $routeProvider
    .when('/favorites', {
      templateUrl: 'favorites/views/list.html',
      controller: 'FavoritesController'
    })


  });
})();
