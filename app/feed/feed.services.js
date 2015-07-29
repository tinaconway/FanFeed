var nfl;
var mlb;
var nhl;
var nba;
var extra;
(function() {
  angular.module('feed')
    .factory('FeedService', function($http, $rootScope, $q) {
      var getProfile= function() {
        return $http.get('/api/me').then(function(data) {
          var teamObject = {};
            teamObject.nfl = data.data.favoriteNFL;
            teamObject.mlb = data.data.favoriteMLB;
            teamObject.nhl = data.data.favoriteNHL;
            teamObject.nba = data.data.favoriteNBA;
            teamObject.extra = data.data.favoriteExtra;
            nfl = data.data.favoriteNFL;
            mlb = data.data.favoriteMLB;
            nhl = data.data.favoriteNHL;
            nba = data.data.favoriteNBA;
            extra = data.data.favoriteExtra;
          return teamObject;
        })

      }





      return {
        getProfile: getProfile
      }

    });
}());
