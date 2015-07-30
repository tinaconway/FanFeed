var nfl;
var mlb;
var nhl;
var nba;
var extra;
(function() {
  angular.module('feed')
    .factory('FeedService', function($http, $rootScope, $q) {
      var seeit = function () {
        $http.get('/api/getFeeds').success(function (data) {
          console.log('nflArray from new endpoint: ',data);
        })
      }
      var getNfl = function () {
        return $http.get('/api/me').then(function(data) {
          var teamObject = {};
            teamObject.nfl = data.data.favoriteNFL;

            nfl = data.data.favoriteNFL;

          return teamObject
        }).then(function (teams) {
          var finalTeams = {}
          var nfl = [];
          var nflArray = [];
          var promisesNFL = [];
        teams.nfl.forEach(function (el) {
          var deferred = $q.defer();
          if (el === "Pittsburgh Steelers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.steelers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
              deferred.resolve(articles);
            })
          }
          if (el === "Baltimore Ravens") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.baltimoreravens.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Cleveland Browns") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.clevelandbrowns.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Cincinatti Bengals") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.bengals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%2520Stories%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Indianapolis Colts") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.colts.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Tampa Bay Buccaneers") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buccaneers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Green Bay Packers") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.packers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Denver Broncos") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.denverbroncos.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "San Fransisco 49ers") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.49ers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Houston Texans") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.houstontexans.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "New England Patriots") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.patriots.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "New York Jets") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.newyorkjets.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Miami Dolphins") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.miamidolphins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Jacksonville Jaguars") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fprod.www.jaguars.clubs.nfl.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "St. Louis Rams") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.stlouisrams.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Atlanta Falcons") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.atlantafalcons.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Carolina Panthers") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.panthers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "New Orleans Saints") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.neworleanssaints.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "New York Giants") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.giants.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Philadelphia Eagles") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.philadelphiaeagles.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Dallas Cowboys") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.dallascowboys.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Washington Redskins") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.redskins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Arizona Cardinals") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.azcardinals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Tennesse Titans") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.titansonline.com%2Fcda-web%2Frss-module.htm%3FtagName%3DTeam%2520News%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Kansas City Chiefs") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.kcchiefs.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Oakland Raiders") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.raiders.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Buffalo Bills") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buffalobills.com%2Fcda-web%2Frss-module.htm%3FtagName%3DLatestHeadlines%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Minnesota Vikings") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.vikings.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Detroit Lions") {
            $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.detroitlions.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Chicago Bears") {
            $http.jsonp('').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "San Diego Chargers") {
            $http.jsonp('').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          if (el === "Seattle Seahawks") {
            $http.jsonp('').success(function(articles) {
            nfl.push(articles.query.results);
            deferred.resolve(articles);
            })
          }
          promisesNFL.push(deferred.promise);

        }); // foreach
        $q.all(promisesNFL).then(function (results) {
          setTimeout(function () {
          finalTeams.nfl = _.chain(nfl).map(function(it) {
            var postDate = new Date(it.pubDate);
            var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
            it.pubDate = pubDate;
            return it.item;
          }).flatten().value();
          }, 1000);
        });
        return finalTeams;
}); // then



      };
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
          return teamObject
        }).then(function(teams) {
          var finalTeams = {}
          var nfl = [];
          var nflArray = [];
          var mlb = [];
          var mlbArray = [];
          var nhl = [];
          var nhlArray = [];
          var nba = [];
          var nbaArray = [];
          var extra = [];
          var extraArray = [];
          var promisesNFL = [];
          var promisesMLB = [];
          var promisesNHL = [];
          var promisesNBA = [];
          var promisesExtra = [];
            teams.nfl.forEach(function(el) {
              var deferred = $q.defer();
            if (el === "Pittsburgh Steelers") {
                $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.steelers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
                deferred.resolve(articles);
              })
            }
            if (el === "Baltimore Ravens") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.baltimoreravens.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Cleveland Browns") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.clevelandbrowns.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Cincinatti Bengals") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.bengals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%2520Stories%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Indianapolis Colts") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.colts.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Tampa Bay Buccaneers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buccaneers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Green Bay Packers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.packers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Denver Broncos") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.denverbroncos.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "San Fransisco 49ers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.49ers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Houston Texans") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.houstontexans.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "New England Patriots") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.patriots.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "New York Jets") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.newyorkjets.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Miami Dolphins") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.miamidolphins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Jacksonville Jaguars") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fprod.www.jaguars.clubs.nfl.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "St. Louis Rams") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.stlouisrams.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Atlanta Falcons") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.atlantafalcons.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Carolina Panthers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.panthers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "New Orleans Saints") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.neworleanssaints.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "New York Giants") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.giants.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Philadelphia Eagles") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.philadelphiaeagles.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Dallas Cowboys") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.dallascowboys.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Washington Redskins") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.redskins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Arizona Cardinals") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.azcardinals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Tennesse Titans") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.titansonline.com%2Fcda-web%2Frss-module.htm%3FtagName%3DTeam%2520News%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Kansas City Chiefs") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.kcchiefs.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Oakland Raiders") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.raiders.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Buffalo Bills") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buffalobills.com%2Fcda-web%2Frss-module.htm%3FtagName%3DLatestHeadlines%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Minnesota Vikings") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.vikings.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Detroit Lions") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.detroitlions.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Chicago Bears") {
              $http.jsonp('').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "San Diego Chargers") {
              $http.jsonp('').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            if (el === "Seattle Seahawks") {
              $http.jsonp('').success(function(articles) {
              nfl.push(articles.query.results);
              deferred.resolve(articles);
              })
            }
            promisesNFL.push(deferred.promise);
          });
          teams.mlb.forEach(function(el) {
            var deferredMLB = $q.defer();
            if (el === "Baltimore Orioles") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fbal.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
                deferredMLB.resolve(articles);
              })
            }
            if (el === "Boston Red Sox") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fbos.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "New York Yankees") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fnyy.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Tampa Bay Rays") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftb.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Toronto Blue Jays") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftor.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Atlanta Braves") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fatl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Miami Marlins") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fatl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "New York Mets") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fnym.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Philadelphia Phillies") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fphi.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Washington Nationals") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fwas.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Chicago White Sox") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcws.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Cleveland Indians") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcle.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Detroit Tigers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fdet.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Kansas City Royals") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fkc.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Minnesota Twins") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fmin.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Chicago Cubs") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fchc.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Cincinatti Reds") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcin.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Milwaukee Brewers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fmil.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Pittsburgh Pirates") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fpit.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "St. Louis Cardinals") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fstl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Houston Astros") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fhou.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Los Angeles Angels") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fana.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Oakland Athletics") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Foak.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Seattle Mariners") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsea.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Texas Rangers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftex.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Arizona Diamondbacks") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fari.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Colorado Rockies") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcol.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "Los Angeles Dodgers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fla.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "San Diego Padres") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsd.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
            if (el === "San Fransisco Giants") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsf.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              mlb.push(articles.query.results);
              deferredMLB.resolve(articles);
              })
            }
              promisesMLB.push(deferredMLB.promise);

          });
          teams.nhl.forEach(function(el) {
            var deferredNHL = $q.defer();
            if (el === "Anaheim Ducks") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fducks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
                deferredNHL.resolve(articles);
              })
            }
            if (el === "Arizona Coyotes") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcoyotes.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Calgary Flames") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fflames.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Edmonton Oileres") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Foilers.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Los Angeles Kings") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fkings.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "San Jose Sharks") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsharks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Vancouver Canucks") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcanucks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Winnipeg Jets") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fjets.nhl.com%2Frss%2Fmobilenews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "St. Louis Blues") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fblues.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Nashville Predators") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpredators.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Minnesota Wild") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwild.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Dallas Stars") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fstars.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Colorado Avalanche") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Favalanche.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Chicago Blackhawks") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fblackhawks.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Boston Bruins") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fbruins.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Buffalo Sabres") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsabres.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Detroit Red Wings") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fredwings.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Florida Panthers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpanthers.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Montreal Canadians") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcanadiens.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Ottawa Senators") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsenators.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Tampa Bay Lightning") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Flightning.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Toronto Maple Leafs") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmapleleafs.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Washington Capitals") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcapitals.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Pittsburgh Penguins") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpenguins.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Texas Rangers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Frangers.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "New York Islanders") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fislanders.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "New Jersey Devils") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fdevils.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Columbus Blue Jackets") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fbluejackets.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Carolina Hurricanees") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fhurricanes.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
            if (el === "Philadelphia Flyers") {
              $http.jsonp('').success(function(articles) {
              nhl.push(articles.query.results);
              deferredNHL.resolve(articles);
              })
            }
              promisesNHL.push(deferredNHL.promise);

          });
          teams.nba.forEach(function(el) {
            var deferredNBA = $q.defer();
            if (el === "Milwaukee Bucks") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fbucks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
                deferredNBA.resolve(articles);
              })
            }
            if (el === "Chicago Bulls") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fbulls%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Cleveland Cavaliers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fcavaliers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Boston Celtics") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fceltics%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Los Angeles Clippers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fclippers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Memphis Grizzlies") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fgrizzlies%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Atlanta Hawks") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fhawks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Miami Heat") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fheat%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Charlotte Hornets") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fhornets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Utah Jazz") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fjazz%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Sacramento Kings") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fkings%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "New York Knicks") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fknicks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Los Angeles Lakers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Flakers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Orlando Magic") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fmagic%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Dallas Mavericks") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.mavs.com%2Ffeed%2F%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Brooklyn Nets") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fnets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Denver Nuggets") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fnuggets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Indiana Pacers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpacers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "New Orleans Pelicans") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpelicans%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Detroit Pistons") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpistons%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Toronto Raptors") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fraptors%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Houston Rockets") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Frockets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Philadelphis Sixers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fsixers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "San Antonio Spurs") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fspurs%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Phoenix Suns") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fsuns%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Oklahoma City Thunder") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fthunder%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Portland Trail Blazers") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fblazers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Minnesota Timberwolves") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Ftimberwolves%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Golden State Warriors") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fwarriors%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
            if (el === "Washington Wizards") {
              $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fwizards%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
              nba.push(articles.query.results);
              deferredNBA.resolve(articles);
              })
            }
              promisesNBA.push(deferredNBA.promise);

          });
          teams.extra.forEach(function(el) {
              var deferredExtra = $q.defer();
              if (el === "NFL Headlines") {
                $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnfl%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
                extra.push(articles.query.results);
                deferredExtra.resolve(articles);
                })
              }
              if (el === "MLB Headlines") {
                $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fmlb%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
                extra.push(articles.query.results);
                deferredExtra.resolve(articles);
                })
              }
              if (el === "NHL Headlines") {
                $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnhl%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
                extra.push(articles.query.results);
                deferredExtra.resolve(articles);
                })
              }
              if (el === "NBA Headlines") {
                $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnba%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK').success(function(articles) {
                extra.push(articles.query.results);
                deferredExtra.resolve(articles);
                })
              }
                  promisesExtra.push(deferredExtra.promise);

          });

          $q.all(promisesNFL, promisesMLB, promisesNHL, promisesNBA, promisesExtra).then(
                 function(results) {
                   setTimeout(function () {
                      finalTeams.mlb = _.chain(mlb).map(function(it) {
                        var postDate = new Date(it.pubDate);
                        var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                        it.pubDate = pubDate;
                        return it.item;
                      }).flatten().value();
                   }, 1000);
                    setTimeout(function () {
                      finalTeams.nba = _.chain(nba).map(function(it) {
                        var postDate = new Date(it.pubDate);
                        var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                        it.pubDate = pubDate;
                        return it.item;
                      }).flatten().value();
                     }, 1000);
                     setTimeout(function () {
                      finalTeams.nhl = _.chain(nhl).map(function(it) {
                        var postDate = new Date(it.pubDate);
                        var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                        it.pubDate = pubDate;
                        return it.item;
                      }).flatten().value();
                      }, 1000);
                      setTimeout(function () {
                      finalTeams.nfl = _.chain(nfl).map(function(it) {
                        var postDate = new Date(it.pubDate);
                        var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                        it.pubDate = pubDate;
                        return it.item;
                      }).flatten().value();
                      }, 1000);
                      setTimeout(function () {
                      finalTeams.extra = _.chain(extra).map(function(it) {
                        var postDate = new Date(it.pubDate);
                        var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                        it.pubDate = pubDate;
                        return it.item;
                      }).flatten().value();
                      }, 1000);

                 },
                 function(response) {
                 }
             );
             return finalTeams;
        })

      }

      return {
        getProfile: getProfile,
        getNfl: getNfl,
        seeit: seeit
      }

    });
}());
