(function() {
  'use strict';
  angular
  .module('favorites')
  .factory('FavoritesService', function ($http, $rootScope) {
    var url = 'http://tiy-fee-rest.herokuapp.com/collections/barsNstripes1';
    console.log($rootScope.username);
    var addFavorite = function (place) {
      $http.post(url, place).success(function (resp) {
        console.log("place:", place);
      }).error(function (err) {
        console.log(err);
      });
    };
    var getFavorites = function () {
      return $http.get(url).then(function (data) {
        return data.data
      })
    };

    var getFavorite = function (id) {
      return $http.get(url + '/' + id);
    };

    var deleteFavorite = function (id) {
      $http.delete(url + '/' + id).then(function () {
        console.log("deleted"); })
      // .then(function (response) {
      //   $rootScope.$broadcast('favorite:deleted');
      // });
};

    var iconSprite = function (place) {
      var barIcon = ''



    }

    return {
      delete: deleteFavorite,
      addFavorite: addFavorite,
      getFavorites: getFavorites,
      getFavorite: getFavorite
    };
  });
}());
