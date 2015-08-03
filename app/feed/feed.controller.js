(function() {
    'use strict';
angular.module('feed')
  .controller('FeedController', function($scope, $auth, $window, $alert, $routeParams, $rootScope, FeedService, $q, $http, $cacheFactory, $sce, toaster) {
    FeedService.getStarred().success(function(starred) {
      $scope.starred = starred;
    })
    $scope.add = function(article){
       toaster.pop('note', "Added to Favorites");
       FeedService.addToStarred(article).then(function() {
         $rootScope.$broadcast('article:added');
       })
   };
   $scope.delete = function(article){
      FeedService.deleteStarred(article)
  };
    $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
    };
    if($routeParams && $auth.isAuthenticated) {
      console.log('in $routeParams');
        FeedService.getNFL().then(function(data) {
          var nflArr = [];
          var promisesNFL = [];
          data.nfl.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              nflArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesNFL.push(deferred.promise);
          })
          $q.all(promisesNFL).then(function (results) {
            $scope.nflArray = [];
            console.log('NFL Array ', nflArr);
            nflArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.nflArray.push(elm);
              })
            })
          })
        })

        FeedService.getMLB().then(function(data) {
          var mlbArr = [];
          var promisesMLB = [];
          data.mlb.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              mlbArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesMLB.push(deferred.promise);
          })
          $q.all(promisesMLB).then(function (results) {
            $scope.mlbArray = [];
            console.log('MLB Array ', mlbArr);
            mlbArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.mlbArray.push(elm);
              })
            })
          })
        })

        FeedService.getNHL().then(function(data) {
          var nhlArr = [];
          var promisesNHL = [];
          data.nhl.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              nhlArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesNHL.push(deferred.promise);
          })
          $q.all(promisesNHL).then(function (results) {
            $scope.nhlArray = [];
            nhlArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.nhlArray.push(elm);
              })
            })
          })
        })

        FeedService.getNBA().then(function(data) {
          var nbaArr = [];
          var promisesNBA = [];
          data.nba.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              nbaArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesNBA.push(deferred.promise);
          })
          $q.all(promisesNBA).then(function (results) {
            $scope.nbaArray = [];
            nbaArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.nbaArray.push(elm);
              })
            })
          })
        })

        FeedService.getExtra().then(function(data) {
          var extraArr = [];
          var promisesExtra = [];
          data.extra.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              extraArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesExtra.push(deferred.promise);
          })
          $q.all(promisesExtra).then(function (results) {
            $scope.extraArray = [];
            extraArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.extraArray.push(elm);
              })
            })
          })
        })
    };
if($auth.isAuthenticated()) {
FeedService.getProfile().then(function(teams) {
  console.log(teams);
$scope.tabs = [];
    if (tabObj.nfl.length < 1 && tabObj.mlb.length < 1 && tabObj.nhl.length < 1 && tabObj.nba.length < 1 && tabObj.extra.length < 1) {
      $scope.tabs.push({
              title: 'Get Started',
              url: 'setup.tpl.html'
          })
    }
    if (tabObj.nfl.length > 0) {
      $scope.tabs.push({
              title: 'NFL',
              url: 'nfl.tpl.html'
          })
    }
    if (tabObj.mlb.length > 0) {
      $scope.tabs.push({
          title: 'MLB',
          url: 'mlb.tpl.html'
      })
    }
    if (tabObj.nhl.length > 0) {
      $scope.tabs.push({
              title: 'NHL',
              url: 'nhl.tpl.html'
          })
    }
    if (tabObj.nba.length > 0) {
      $scope.tabs.push({
              title: 'NBA',
              url: 'nba.tpl.html'
          })
    }
    if (tabObj.extra.length > 0) {
      $scope.tabs.push({
              title: 'Extras',
              url: 'extra.tpl.html'
          })
    }
    if (tabObj.extra.length > 0) {
        $scope.currentTab = 'extra.tpl.html'
    }
    if (tabObj.nba.length > 0) {
        $scope.currentTab = 'nba.tpl.html'
    }
    if (tabObj.nhl.length > 0) {
        $scope.currentTab = 'nhl.tpl.html'
    }
    if (tabObj.mlb.length > 0) {
        $scope.currentTab = 'mlb.tpl.html'
    }
    if (tabObj.nfl.length > 0) {
        $scope.currentTab = 'nfl.tpl.html'
    }
    if (tabObj.nfl.length < 1 && tabObj.mlb.length < 1 && tabObj.nhl.length < 1 && tabObj.nba.length < 1 && tabObj.extra.length < 1) {
      $scope.currentTab = 'setup.tpl.html'
    }


    var finalTeams = {};
    var nflArr = [];
    var promisesNFL = [];
    var mlbArr = [];
    var promisesMLB = [];
    var nhlArr = [];
    var promisesNHL = [];
    var nbaArr = [];
    var promisesNBA = [];
    var extraArr = [];
    var promisesExtra = [];

if (teams.nfl) {
    teams.nfl.forEach(function(el) {
      var deferred = $q.defer();
      $http.jsonp(el.url).then(function(data) {
        nflArr.push(data.data.query.results.item);
        deferred.resolve(data);
      })
      promisesNFL.push(deferred.promise);
    })
  }
  if (teams.mlb) {

    teams.mlb.forEach(function(el) {
      var deferredMLB = $q.defer();
      $http.jsonp(el.url).then(function(data) {
        mlbArr.push(data.data.query.results.item);
        deferredMLB.resolve(data);
      })
      promisesMLB.push(deferredMLB.promise);
    })
  }
  if (teams.nhl) {
    teams.nhl.forEach(function(el) {
      var deferredNHL = $q.defer();
      $http.jsonp(el.url).then(function(data) {
        nhlArr.push(data.data.query.results.item);
        deferredNHL.resolve(data);
      })
      promisesNHL.push(deferredNHL.promise);
    })
  }

  if (teams.nba) {
    teams.nba.forEach(function(el) {
      var deferredNBA = $q.defer();
      $http.jsonp(el.url).then(function(data) {
        nbaArr.push(data.data.query.results.item);
        deferredNBA.resolve(data);
      })
      promisesNBA.push(deferredNBA.promise);
    })
  }
  if (teams.extra) {
    teams.extra.forEach(function(el) {
      var deferredExtra = $q.defer();
      $http.jsonp(el.url).then(function(data) {
        extraArr.push(data.data.query.results.item);
        deferredExtra.resolve(data);
      })
      promisesExtra.push(deferredExtra.promise);
    })
  }
    $q.all(promisesNFL, promisesMLB, promisesNHL, promisesNBA, promisesExtra).then(function (results) {
      $scope.nflArray = [];
      $scope.mlbArray = [];
      $scope.nhlArray = [];
      $scope.nbaArray = [];
      $scope.extraArray = [];
      nflArr.forEach(function(el) {
        el.forEach(function(elm) {
          var postDate = new Date(elm.pubDate);
             var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
             elm.pubDate = pubDate;
          $scope.nflArray.push(elm);
        })
      })
      mlbArr.forEach(function(el) {
        el.forEach(function(elm) {
          var postDate = new Date(elm.pubDate);
             var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
             elm.pubDate = pubDate;
          $scope.mlbArray.push(elm);
        })
      })
      nhlArr.forEach(function(el) {
        el.forEach(function(elm) {
          var postDate = new Date(elm.pubDate);
             var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
             elm.pubDate = pubDate;
             $scope.nhlArray.push(elm);
        })
      })
      nbaArr.forEach(function(el) {
        el.forEach(function(elm) {
          var postDate = new Date(elm.pubDate);
             var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
             elm.pubDate = pubDate;
          $scope.nbaArray.push(elm);
        })
      })
      extraArr.forEach(function(el) {
        el.forEach(function(elm) {
          var postDate = new Date(elm.pubDate);
             var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
             elm.pubDate = pubDate;
          $scope.extraArray.push(elm);
        })
      })


    });
  });
}// end is auth for getProfile

  $scope.onClickTab = function (tab) {
      $scope.currentTab = tab.url;
      if (tab.title === "NFL") {
        FeedService.getNFL().then(function(data) {
          var nflArr = [];
          var promisesNFL = [];
          data.nfl.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              nflArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesNFL.push(deferred.promise);
          })
          $q.all(promisesNFL).then(function (results) {
            $scope.nflArray = [];
            nflArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.nflArray.push(elm);
              })
            })
          })
        })
      }
      if (tab.title === "MLB") {
        FeedService.getMLB().then(function(data) {
          var mlbArr = [];
          var promisesMLB = [];
          data.mlb.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              mlbArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesMLB.push(deferred.promise);
          })
          $q.all(promisesMLB).then(function (results) {
            $scope.mlbArray = [];
            console.log('MLB Array ', mlbArr);
            mlbArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.mlbArray.push(elm);
              })
            })
          })
        })
      }
      if (tab.title === "NHL") {
        FeedService.getNHL().then(function(data) {
          var nhlArr = [];
          var promisesNHL = [];
          data.nhl.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              nhlArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesNHL.push(deferred.promise);
          })
          $q.all(promisesNHL).then(function (results) {
            $scope.nhlArray = [];
            nhlArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.nhlArray.push(elm);
              })
            })
          })
        })
      }
      if (tab.title === "NBA") {
        FeedService.getNBA().then(function(data) {
          var nbaArr = [];
          var promisesNBA = [];
          data.nba.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              nbaArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesNBA.push(deferred.promise);
          })
          $q.all(promisesNBA).then(function (results) {
            $scope.nbaArray = [];
            nbaArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.nbaArray.push(elm);
              })
            })
          })
        })
      }
      if (tab.title === "Extras") {
        FeedService.getExtra().then(function(data) {
          var extraArr = [];
          var promisesExtra = [];
          data.extra.forEach(function(el) {
            var deferred = $q.defer();
            $http.jsonp(el.url).then(function(data) {
              extraArr.push(data.data.query.results.item);
              deferred.resolve(data);
            })
            promisesExtra.push(deferred.promise);
          })
          $q.all(promisesExtra).then(function (results) {
            $scope.extraArray = [];
            extraArr.forEach(function(el) {
              el.forEach(function(elm) {
                var postDate = new Date(elm.pubDate);
                   var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                   elm.pubDate = pubDate;
                $scope.extraArray.push(elm);
              })
            })
          })
        })
      }

  };

  $scope.isActiveTab = function(tabUrl) {
      return tabUrl == $scope.currentTab;
  };
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

  var watchCallback = function() {
    FeedService.getStarred().success(function(starred) {
      $scope.starred = starred;
    });
  };

  $scope.$on('article:added', watchCallback)
  $scope.$on('article:deleted', watchCallback)

});
})();
