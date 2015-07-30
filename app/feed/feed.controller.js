(function() {
    'use strict';
angular.module('feed')
  .controller('FeedController', function($scope, $auth, $alert, $routeParams, $rootScope, FeedService, $q, $http, $cacheFactory, $sce) {
  FeedService.seeit();
  FeedService.getNfl().then(function(teams) {
    window.holdme = teams;
    console.log('raw var', holdme.nfl);
    localStorage.setItem('teams', JSON.stringify(holdme));

    console.log('teams from service in controller: ', teams);
    console.log('teams.nfl ', teams.nfl);
    $scope.nflArray = teams.nfl;
    // $scope.mlbArray = teams.mlb;
    // $scope.nhlArray = teams.nhl;
    // $scope.nbaArray = teams.nba;
    // $scope.extraArray = teams.extra;
  });

  $scope.tabs = [{
          title: 'NFL',
          url: 'nfl.tpl.html'
      }, {
          title: 'MLB',
          url: 'mlb.tpl.html'
      }, {
          title: 'NHL',
          url: 'nhl.tpl.html'
      }, {
        title: 'NBA',
        url: 'nba.tpl.html'
      }, {
        title: 'Extras',
        url: 'extra.tpl.html'
      }
    ];

  $scope.currentTab = 'nfl.tpl.html';

  $scope.onClickTab = function (tab) {
      $scope.currentTab = tab.url;
  }

  $scope.isActiveTab = function(tabUrl) {
      return tabUrl == $scope.currentTab;
  }
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

    var watchCallback = function() {

    }

    $scope.$on('preference:changed', watchCallback)

});
})();
