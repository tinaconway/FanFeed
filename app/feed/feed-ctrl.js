(function() {
  'use strict';
  angular.module('feed')
    .controller('FeedController', function($scope, $auth, $window, $alert, $routeParams, $rootScope, feedService, $q, $http, $cacheFactory, $sce, toaster) {

      function getArticles(active) {
        feedService.getStarred().success(function(starred) {
          $scope.starred = starred;
          var starred = starred.map(function(article) {
            return article.link;
          });
          if (active === 'NFL') {
            feedService.getNFL(starred).then(function(res) {
              $scope.nfl = res;
            });
          }
          if (active === 'MLB') {
            feedService.getMLB(starred).then(function(res) {
              $scope.mlb = res;
            });
          }
          if (active === 'NHL') {
            feedService.getNHL(starred).then(function(res) {
              $scope.nhl = res;
            });
          }
          if (active === 'NBA') {
            feedService.getNBA(starred).then(function(res) {
              $scope.nba = res;
            });
          }
          if (active === 'Extras') {
            feedService.getExtra(starred).then(function(res) {
              $scope.extra = res;
            });
          }
        });
      }

      $scope.init = function() {
        feedService.getProfile().then(function(teams) {
          $scope.teams = teams;
          $scope.tabs = [];
          if (teams.extra.length > 0) {
            $scope.tabs.splice(0, 0, {
              title: 'Extras',
              url: 'extra.tpl.html'
            });
            $scope.currentTab = 'extra.tpl.html';
          }
          if (teams.nba.length > 0) {
            $scope.tabs.splice(0, 0, {
              title: 'NBA',
              url: 'nba.tpl.html'
            });
            $scope.currentTab = 'nba.tpl.html';
          }
          if (teams.nhl.length > 0) {
            $scope.tabs.splice(0, 0, {
              title: 'NHL',
              url: 'nhl.tpl.html'
            });
            $scope.currentTab = 'nhl.tpl.html';
          }
          if (teams.mlb.length > 0) {
            $scope.tabs.splice(0, 0, {
              title: 'MLB',
              url: 'mlb.tpl.html'
            });
            $scope.currentTab = 'mlb.tpl.html';
          }
          if (teams.nfl.length > 0) {
            $scope.tabs.splice(0, 0, {
              title: 'NFL',
              url: 'nfl.tpl.html'
            });
            $scope.currentTab = 'nfl.tpl.html';
          }
          if (teams.nfl.length < 1 && teams.mlb.length < 1 && teams.nhl.length < 1 && teams.nba.length < 1 && teams.extra.length < 1) {
            $scope.tabs.splice(0, 0, {
              title: 'Get Started',
              url: 'setup.tpl.html'
            });
            $scope.currentTab = 'setup.tpl.html';
          }
          var active = $scope.tabs[0].title;
          getArticles(active);
        });
      };

      $scope.init();


      $scope.goToTab = function(tab) {
        $scope.currentTab = tab.url;
        var active = tab.title;
        getArticles(active);
      };

      $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
      };
      $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
      };

      $scope.add = function(article) {
        feedService.addToStarred(article).then(function() {
          toaster.pop('note', "Added to Favorites");
          article.starred = true;
        });
      };

      $scope.delete = function(article) {
        feedService.deleteStarred(article).then(function(res) {
          for (var i = 0; i < $scope.starred.length; i ++) {
            if ($scope.starred[i]._id === article._id) {
              $scope.starred.splice(i, 1);
              break;
            }
          }
        });
      };

      $scope.isAuthenticated = function() {
        return $auth.isAuthenticated();
      };
    });
})();
