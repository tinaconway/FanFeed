var express = require('express');
var router = express.Router();
var User = require('../entities/User');
var config = require('../config');
var ensureAuthenticated = require('./helpers').ensureAuthenticated;
var request = require('request');

router.route('/getNFL')
  .all(ensureAuthenticated)
  .get(function(req, res) {
    User.findById(req.user, function(err, user) {
      var nfl = [];
      user.nfl.forEach(function(el) {
        if (el === "Pittsburgh Steelers") {
          nfl.push({
            name: "Pittsburgh Steelers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.steelers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Baltimore Ravens") {
          nfl.push({
            name: "Baltimore Ravens",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.baltimoreravens.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Cleveland Browns") {
          nfl.push({
            name: "Cleveland Browns",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.clevelandbrowns.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Cincinatti Bengals") {
          nfl.push({
            name: "Cincinatti Bengals",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.bengals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%2520Stories%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Indianapolis Colts") {
          nfl.push({
            name: "Indianapolis Colts",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.colts.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Tampa Bay Buccaneers") {
          nfl.push({
            name: "Tampa Bay Buccaneers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buccaneers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Green Bay Packers") {
          nfl.push({
            name: "Green Bay Packers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.packers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Denver Broncos") {
          nfl.push({
            name: "Denver Broncos",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.denverbroncos.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "San Fransisco 49ers") {
          nfl.push({
            name: "San Fransisco 49ers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.49ers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Houston Texans") {
          nfl.push({
            name: "Houston Texans",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.houstontexans.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New England Patriots") {
          nfl.push({
            name: "New England Patriots",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.patriots.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New York Jets") {
          nfl.push({
            name: "New York Jets",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.newyorkjets.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Miami Dolphins") {
          nfl.push({
            name: "Miami Dolphins",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.miamidolphins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Jacksonville Jaguars") {
          nfl.push({
            name: "Jacksonville Jaguars",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fprod.www.jaguars.clubs.nfl.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "St. Louis Rams") {
          nfl.push({
            name: "St. Louis Rams",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.stlouisrams.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Atlanta Falcons") {
          nfl.push({
            name: "Atlanta Falcons",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.atlantafalcons.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Carolina Panthers") {
          nfl.push({
            name: "Carolina Panthers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.panthers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New Orleans Saints") {
          nfl.push({
            name: "New Orleans Saints",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.neworleanssaints.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New York Giants") {
          nfl.push({
            name: "New York Giants",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.giants.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Philadelphia Eagles") {
          nfl.push({
            name: "Philadelphia Eagles",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.philadelphiaeagles.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Dallas Cowboys") {
          nfl.push({
            name: "Dallas Cowboys",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.dallascowboys.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Washington Redskins") {
          nfl.push({
            name: "Washington Redskins",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.redskins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Arizona Cardinals") {
          nfl.push({
            name: "Arizona Cardinals",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.azcardinals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Tennesse Titans") {
          nfl.push({
            name: "Tennesse Titans",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.titansonline.com%2Fcda-web%2Frss-module.htm%3FtagName%3DTeam%2520News%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Kansas City Chiefs") {
          nfl.push({
            name: "Kansas City Chiefs",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.kcchiefs.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Oakland Raiders") {
          nfl.push({
            name: "Oakland Raiders",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.raiders.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Buffalo Bills") {
          nfl.push({
            name: "Buffalo Bills",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buffalobills.com%2Fcda-web%2Frss-module.htm%3FtagName%3DLatestHeadlines%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Minnesota Vikings") {
          nfl.push({
            name: "Minnesota Vikings",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.vikings.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Detroit Lions") {
          nfl.push({
            name: "Detroit Lions",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.detroitlions.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Chicago Bears") {
          nfl.push({
            name: "Chicago Bears",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.yardbarker.com%2Frss%2Fteam%2F50%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "San Diego Chargers") {
          nfl.push({
            name: "San Diego Chargers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.yardbarker.com%2Frss%2Fteam%2F45%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Seattle Seahawks") {
          nfl.push({
            name: "Seattle Seahawks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.yardbarker.com%2Frss%2Fteam%2F59%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
      });
      res.send(nfl);
    });
  });


router.route('/getMLB')
  .all(ensureAuthenticated)
  .get(function(req, res) {
    User.findById(req.user, function(err, user) {
      var mlb = [];
      user.mlb.forEach(function(el) {
        if (el === "Baltimore Orioles") {
          mlb.push({
            name: "Balimore Orioles",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fbal.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Boston Red Sox") {
          mlb.push({
            name: "Boston Red Sox",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fbos.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New York Yankees") {
          mlb.push({
            name: "New York Yankees",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fnyy.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Los Angeles Dodgers") {
          mlb.push({
            name: "Los Angeles Dodgers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fla.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Detroit Tigers ") {
          mlb.push({
            name: "Detroit Tigers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fdet.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Chicago Cubs") {
          mlb.push({
            name: "Chicago Cubs",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fchc.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "San Fransisco Giants") {
          mlb.push({
            name: "San Fransisco Giants",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsf.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Toronto Blue Jays") {
          mlb.push({
            name: "Toronto Blue Jays",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftor.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New York Mets") {
          mlb.push({
            name: "New York Mets",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fnym.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "St. Louis Cardinals") {
          mlb.push({
            name: "St. Louis Cardinals",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fstl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Kansas City Royals") {
          mlb.push({
            name: "Kansas City Royals",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fkc.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Atlanta Braves") {
          mlb.push({
            name: "Atlanta Braves",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fatl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Pittsburgh Pirates") {
          mlb.push({
            name: "Pittsburgh Pirates",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fpit.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Seattle Mariners") {
          mlb.push({
            name: "Seattle Mariners",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsea.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "San Diego Padres") {
          mlb.push({
            name: "San Diego Padres",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsd.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Chicago White Sox") {
          mlb.push({
            name: "Chicago White Sox",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcws.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Los Angeles Angels") {
          mlb.push({
            name: "Los Angeles Angels",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fana.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Philadelphia Philies") {
          mlb.push({
            name: "Philadelphia Phillies",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fphi.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Cincinatti Reds") {
          mlb.push({
            name: "Cincinatti Reds",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcin.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Minnesota Twins") {
          mlb.push({
            name: "Minnesota Twins",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fmin.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Texas Rangers") {
          mlb.push({
            name: "Texas Rangers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftex.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Washington Nationals") {
          mlb.push({
            name: "Washington Nationals",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fwas.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Cleveland Indians") {
          mlb.push({
            name: "Cleveland Indians",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcle.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Houston Astros") {
          mlb.push({
            name: "Houston Astros",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fhou.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Tampa Bay Rays") {
          mlb.push({
            name: "Tampa Bay Rays",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftb.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Miami Marlins") {
          mlb.push({
            name: "Miami Marlins",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fatl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Oakland Athletics") {
          mlb.push({
            name: "Oakland Athletics",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Foak.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Milwaukee Brewers") {
          mlb.push({
            name: "Milwaukee Brewers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fmil.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Colorado Rockies") {
          mlb.push({
            name: "Colorado Rockies",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcol.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Arizona Diamondbacks") {
          mlb.push({
            name: "Arizona Diamondbacks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fari.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
      });
      res.send(mlb);
    });
  });

router.route('/getNHL')
  .all(ensureAuthenticated)
  .get(function(req, res) {
    User.findById(req.user, function(err, user) {
      var nhl = [];
      user.nhl.forEach(function(el) {
        if (el === "Chicago Blackhawks") {
          nhl.push({
            name: "Chicago Blackhawks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fblackhawks.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Montreal Canadiens") {
          nhl.push({
            name: "Montreal Canadiens",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcanadiens.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Vancouver Canucks") {
          nhl.push({
            name: "Vancouver Canucks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcanucks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Boston Bruins") {
          nhl.push({
            name: "Boston Bruins",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fbruins.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Detroit Red Wings") {
          nhl.push({
            name: "Detroit Red Wings",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fredwings.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Pittsburgh Penguins") {
          nhl.push({
            name: "Pittsburgh Penguins",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpenguins.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Calgary Flames") {
          nhl.push({
            name: "Calgary Flames",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fflames.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Toronto Maple Leafs") {
          nhl.push({
            name: "Toronto Maple Leafs",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmapleleafs.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Tampa Bay Lightning") {
          nhl.push({
            name: "Tampa Bay Lightning",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Flightning.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Anaheim Ducks") {
          nhl.push({
            name: "Anaheim Ducks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fducks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Minnesota Wild") {
          nhl.push({
            name: "Minnesota Wild",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwild.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Ottawa Senators") {
          nhl.push({
            name: "Ottawa Senators",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsenators.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Washington Capitals") {
          nhl.push({
            name: "Washington Capitals",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcapitals.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Edmonton Oilers") {
          nhl.push({
            name: "Edmonton Oilers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Foilers.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Winnipeg Jets") {
          nhl.push({
            name: "Winnipeg Jets",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fjets.nhl.com%2Frss%2Fmobilenews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New York Islanders") {
          nhl.push({
            name: "New York Islanders",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fislanders.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Los Angeles Kings") {
          nhl.push({
            name: "Los Angeles Kings",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fkings.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "St. Louis Blues") {
          nhl.push({
            name: "St. Louis Blues",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fblues.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Buffalo Sabres") {
          nhl.push({
            name: "Buffalo Sabres",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsabres.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Nashville Predators") {
          nhl.push({
            name: "Nashville Preadators",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpredators.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Philadelphia Flyers") {
          nhl.push({
            name: "Philadelphia Flyers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.yardbarker.com%2Frss%2Fteam%2F95%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "San Jose Sharks") {
          nhl.push({
            name: "San Jose Sharks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsharks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Arizona Coyotes") {
          nhl.push({
            name: "Arizona Coyotes",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcoyotes.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Colorado Avalanche") {
          nhl.push({
            name: "Colorado Avalanche",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Favalanche.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Columbus Blue Jackets") {
          nhl.push({
            name: "Columbus Blue Jackets",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fbluejackets.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Carolina Hurricanes") {
          nhl.push({
            name: "Carolina Hurricanes",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fhurricanes.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Florida Panthers") {
          nhl.push({
            name: "Florida Panthers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpanthers.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Dallas Stars") {
          nhl.push({
            name: "Dallas Stars",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fstars.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New Jersey Devils") {
          nhl.push({
            name: "New Jersey Devils",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fdevils.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "New York Rangers") {
          nhl.push({
            name: "New York Rangers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Frangers.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
      });
      res.send(nhl);
    });
  });



router.route('/getNBA')
  .all(ensureAuthenticated)
  .get(function(req, res) {
    User.findById(req.user, function(err, user) {
      var nba = [];
      user.nba.forEach(function(el) {
        if (el === "Boston Celtics") {
          nba.push({
            name: "Boston Celtics",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fceltics%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Dallas Mavericks") {
          nba.push({
            name: "Dallas Mavericks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.mavs.com%2Ffeed%2F%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Houston Rockets") {
          nba.push({
            name: "Houston Rockets",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Frockets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Brooklyn Nets") {
          nba.push({
            name: "Brooklyn Nets",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fnets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New York Knicks") {
          nba.push({
            name: "New York Knicks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fknicks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Memphis Grizzlies") {
          nba.push({
            name: "Memphis Grizzlies",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fgrizzlies%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Philadelphia Sixers") {
          nba.push({
            name: "Philadelphia Sixers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fsixers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "New Orleans Pelicans") {
          nba.push({
            name: "New Orleans Pelicans",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpelicans%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Toronto Raptors") {
          nba.push({
            name: "Toronto Raptors",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fraptors%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "San Antonio Spurs") {
          nba.push({
            name: "San Antonio Spurs",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fspurs%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Chicago Bulls") {
          nba.push({
            name: "Chicago Bulls",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fbulls%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Denver Nuggets") {
          nba.push({
            name: "Denver Nuggets",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fnuggets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Cleveland Cavaliers") {
          nba.push({
            name: "Cleveland Cavaliers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fcavaliers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Minnesota Timberwolves") {
          nba.push({
            name: "Minnesota Timberwolves",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Ftimberwolves%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Detroit Pistons") {
          nba.push({
            name: "Detroit Pistons",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpistons%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Oklahoma City Thunder") {
          nba.push({
            name: "Oklahoma City Thunder",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fthunder%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Indiana Pacers") {
          nba.push({
            name: "Indiana Pacers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpacers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Portland Trail Blazers") {
          nba.push({
            name: "Portland Trail Blazers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fblazers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Milwaukee Bucks") {
          nba.push({
            name: "Milwaukee Bucks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fbucks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Utah Jazz") {
          nba.push({
            name: "Utah Jazz",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fjazz%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Atlanta Hawks") {
          nba.push({
            name: "Atlanta Hawks",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fhawks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Golden State Warriors") {
          nba.push({
            name: "Golden State Warriors",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fwarriors%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Charlotte Hornets") {
          nba.push({
            name: "Charlotte Hornets",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fhornets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Los Angeles Clippers") {
          nba.push({
            name: "Los Angeles Clippers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fclippers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Miami Heat") {
          nba.push({
            name: "Miami Heat",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fheat%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Los Angeles Lakers") {
          nba.push({
            name: "Los Angeles Lakers",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Flakers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Orlando Magic") {
          nba.push({
            name: "Orlando Magic",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fmagic%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Phoenix Suns") {
          nba.push({
            name: "Phoneix Suns",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fsuns%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });

        }
        if (el === "Washington Wizards") {
          nba.push({
            name: "Washington Wizards",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fwizards%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }
        if (el === "Sacramento Kings") {
          nba.push({
            name: "Sacramento Kings",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fkings%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          });
        }

      });
      res.send(nba);
    });
  });

router.route('/getExtra')
  .all(ensureAuthenticated)
  .get(function(req, res) {
    User.findById(req.user, function(err, user) {
      var extra = [];
      user.extra.forEach(function(el) {
        if (el === "NFL Headlines") {
          extra.push({
            name: "NFL Headlines",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnfl%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          })
        }
        if (el === "MLB Headlines") {
          extra.push({
            name: "MLB Headlines",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fmlb%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          })

        }
        if (el === "NHL Headlines") {
          extra.push({
            name: "NHL Headlines",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnhl%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          })

        }

        if (el === "NBA Headlines") {
          extra.push({
            name: "NBA Headlines",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnba%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"
          })
        }
      });
      res.send(extra);
    });
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
        return res.status(400).send({
          message: 'User not found'
        });
      }
      // add any new user properties here as well as entities/User.js and routes/profile.js
      // user.newProperty = req.body.newProperty || user.newProperty
      user.displayName = req.body.displayName || user.displayName;
      user.email = req.body.email || user.email;
      console.log("THE BODY ", req.body);
      user.nfl = req.body.nfl || [];
      user.mlb = req.body.mlb || [];
      user.nhl = req.body.nhl || [];
      user.nba = req.body.nba || [];
      user.extra = req.body.extra || [];

      user.save(function(err) {
        res.status(200).end();
      });
    });
  });

module.exports = router;
