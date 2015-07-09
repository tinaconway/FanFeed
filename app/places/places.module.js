(function () {
  'use strict';
angular.module('places', [
  'ngRoute'

])

.config(function($routeProvider) {
  $routeProvider
    .when('/places', {
      templateUrl: 'places/views/list.html',
      controller: 'PlacesController'
    })
    .when('/places/:placeId', {
      templateUrl: 'places/views/detail.html',
      controller: 'PlacesController'
    })

  });
})();
