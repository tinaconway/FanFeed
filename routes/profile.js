var express = require('express');
var router = express.Router();
var User = require('../entities/User');
var config = require('../config');
var ensureAuthenticated = require('./helpers').ensureAuthenticated;
var request = require('request');

router.route('/getFeeds')
  .all(ensureAuthenticated)
  .get(function (req, res) {
    // 
    // var nflTeams = {
    //   "pittsburg_steelers": {
    //     url: "myurl"
    //     name: "Pittsburgh Steelers"
    //   }
    // }
    // function getTeam(teamSlug) {
    //   return nflTeams[teamSlug]
    // }
    //
    // getTeam("pittsburg_steelers").url

    User.findById(req.user, function (err, user) {
      user.favoriteNFL.forEach(function (el) {
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
      res.send(user.favoriteNFL);
    })
  });

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
router.route('/me')
  .all(ensureAuthenticated)
  .get(function(req, res) {
    User.findById(req.user, function(err, user) {
      res.send(user);
    });
  })
  .put(function(req, res) {
    User.findById(req.user, function(err, user) {
      if (!user) {
        return res.status(400).send({ message: 'User not found' });
      }
      // add any new user properties here as well as entities/User.js and routes/profile.js
      // user.newProperty = req.body.newProperty || user.newProperty
      user.displayName = req.body.displayName || user.displayName;
      user.email = req.body.email || user.email;
      console.log("THE BODY ", req.body);
      user.favoriteNFL = req.body.favoriteNFL || [];
      user.favoriteMLB = req.body.favoriteMLB || [];
      user.favoriteNHL = req.body.favoriteNHL || [];
      user.favoriteNBA = req.body.favoriteNBA || [];
      user.favoriteExtra = req.body.favoriteExtra || [];

      user.save(function(err) {
        res.status(200).end();
      });
    });
  });

module.exports = router;
