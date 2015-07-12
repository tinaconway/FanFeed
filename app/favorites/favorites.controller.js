(function() {
  'use strict';
  angular
  .module('favorites')
  .controller('FavoritesController', function ($scope, FavoritesService, $routeParams) {

    FavoritesService.getFavorites().then(function (data) {
      $scope.favorites = data;
    });

    FavoritesService.getFavorite($routeParams.listingId).then(function (place) {
      $scope.place = listing;
    });

    $scope.addToFavorites = function (place) {
      FavoritesService.addFavorite(place);
    };

    $scope.deleteFavorite = function (id) {
      console.log(id);
      FavoritesService.delete(id);
    };

    // $scope.barIcon =
    //
    // FavoritesService.iconSprite()

  });
}());
