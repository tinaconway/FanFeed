var tabObj = {};
var nfl;
var mlb;
var nhl;
var nba;
var extra;

(function() {
  angular.module('feed')
    .factory('FeedService', function($http, $rootScope, $q) {
      var getProfileTeams = function() {
        return $http.get('/api/me').then(function(data) {
          var teamObject = {};
            teamObject.nfl = data.data.favoriteNFL;
            teamObject.mlb = data.data.favoriteMLB;
            teamObject.nhl = data.data.favoriteNHL;
            teamObject.nba = data.data.favoriteNBA;
            teamObject.extra = data.data.favoriteExtra;
            tabObj.mlb = data.data.favoriteMLB;
            tabObj.nfl = data.data.favoriteNFL;
            tabObj.nhl = data.data.favoriteNHL;
            tabObj.nba = data.data.favoriteNBA;
            tabObj.extra = data.data.favoriteExtra;

          return teamObject
        })
      }
      var getProfile= function() {
        return $http.get('/api/me').then(function(data) {
          var teamObject = {};
            teamObject.nfl = data.data.favoriteNFL;
            teamObject.mlb = data.data.favoriteMLB;
            teamObject.nhl = data.data.favoriteNHL;
            teamObject.nba = data.data.favoriteNBA;
            teamObject.extra = data.data.favoriteExtra;
            tabObj.mlb = data.data.favoriteMLB;
            tabObj.nfl = data.data.favoriteNFL;
            tabObj.nhl = data.data.favoriteNHL;
            tabObj.nba = data.data.favoriteNBA;
            tabObj.extra = data.data.favoriteExtra;

          return teamObject
        })
        .then(function(teams) {
          var teamObj = {}
          if (tabObj.nfl.length > 0) {
          var nflArr = [];
          teams.nfl.forEach(function(el) {
            if (el === "Pittsburgh Steelers") {
                  nflArr.push({name: "Pittsburgh Steelers",
                          url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.steelers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Baltimore Ravens") {
                   nflArr.push({name: "Baltimore Ravens",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.baltimoreravens.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Cleveland Browns") {
                   nflArr.push({name: "Cleveland Browns",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.clevelandbrowns.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Cincinatti Bengals") {
                   nflArr.push({name: "Cincinatti Bengals",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.bengals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%2520Stories%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Indianapolis Colts") {
                   nflArr.push({name: "Indianapolis Colts",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.colts.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Tampa Bay Buccaneers") {
                   nflArr.push({name: "Tampa Bay Buccaneers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buccaneers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Green Bay Packers") {
                   nflArr.push({name: "Green Bay Packers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.packers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Denver Broncos") {
                   nflArr.push({name: "Denver Broncos",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.denverbroncos.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "San Fransisco 49ers") {
                   nflArr.push({name: "San Fransisco 49ers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.49ers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Houston Texans") {
                   nflArr.push({name: "Houston Texans",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.houstontexans.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New England Patriots") {
                   nflArr.push({name: "New England Patriots",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.patriots.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New York Jets") {
                   nflArr.push({name: "New York Jets",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.newyorkjets.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Miami Dolphins") {
                   nflArr.push({name: "Miami Dolphins",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.miamidolphins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Jacksonville Jaguars") {
                   nflArr.push({name: "Jacksonville Jaguars",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fprod.www.jaguars.clubs.nfl.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "St. Louis Rams") {
                   nflArr.push({name: "St. Louis Rams",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.stlouisrams.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Atlanta Falcons") {
                   nflArr.push({name: "Atlanta Falcons",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.atlantafalcons.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Carolina Panthers") {
                   nflArr.push({name: "Carolina Panthers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.panthers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New Orleans Saints") {
                   nflArr.push({name: "New Orleans Saints",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.neworleanssaints.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New York Giants") {
                   nflArr.push({name: "New York Giants",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.giants.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Philadelphia Eagles") {
                   nflArr.push({name: "Philadelphia Eagles",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.philadelphiaeagles.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Dallas Cowboys") {
                   nflArr.push({name: "Dallas Cowboys",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.dallascowboys.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Washington Redskins") {
                   nflArr.push({name: "Washington Redskins",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.redskins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Arizona Cardinals") {
                  nflArr.push({name: "Arizona Cardinals",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.azcardinals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Tennesse Titans") {
                  nflArr.push({name: "Tennesse Titans",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.titansonline.com%2Fcda-web%2Frss-module.htm%3FtagName%3DTeam%2520News%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Kansas City Chiefs") {
                  nflArr.push({name: "Kansas City Chiefs",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.kcchiefs.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Oakland Raiders") {
                  nflArr.push({name: "Oakland Raiders",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.raiders.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Buffalo Bills") {
                   nflArr.push({name: "Buffalo Bills",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buffalobills.com%2Fcda-web%2Frss-module.htm%3FtagName%3DLatestHeadlines%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Minnesota Vikings") {
                   nflArr.push({name: "Minnesota Vikings",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.vikings.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Detroit Lions") {
                   nflArr.push({name: "Detroit Lions",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.detroitlions.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
               }
               if (el === "Chicago Bears") {
                 nflArr.push({name: "Chicago Bears",
                      url: ""})
                }
               if (el === "San Diego Chargers") {
                 nflArr.push({name: "San Diego Chargers",
                      url: ""})
               }
               if (el === "Seattle Seahawks") {
                nflArr.push({name: "Seattle Seahawks",
                      url: ""})
               }
          })
          teamObj.nfl = nflArr;
        }
        if (tabObj.mlb.length > 0) {
          var mlbArr = [];
          teams.mlb.forEach(function(el) {
            if (el === "Baltimore Orioles") {
                  mlbArr.push({name: "Balimore Orioles",
                          url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fbal.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
               }
               if (el === "Boston Red Sox") {
                   mlbArr.push({name: "Boston Red Sox",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fbos.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New York Yankees") {
                   mlbArr.push({name: "New York Yankees",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fnyy.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Los Angeles Dodgers") {
                   mlbArr.push({name: "Los Angeles Dodgers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fla.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Detroit Tigers ") {
                   mlbArr.push({name: "Detroit Tigers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fdet.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Chicago Cubs") {
                   mlbArr.push({name: "Chicago Cubs",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fchc.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "San Fransisco Giants") {
                   mlbArr.push({name: "San Fransisco Giants",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsf.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Toronto Blue Jays") {
                   mlbArr.push({name: "Toronto Blue Jays",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftor.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New York Mets") {
                   mlbArr.push({name: "New York Mets",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fnym.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "St. Louis Cardinals") {
                   mlbArr.push({name: "St. Louis Cardinals",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fstl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Kansas City Royals") {
                   mlbArr.push({name: "Kansas City Royals",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fkc.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Atlanta Braves") {
                   mlbArr.push({name: "Atlanta Braves",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fatl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Pittsburgh Pirates") {
                   mlbArr.push({name: "Pittsburgh Pirates",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fpit.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Seattle Mariners") {
                   mlbArr.push({name: "Seattle Mariners",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsea.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "San Diego Padres") {
                   mlbArr.push({name: "San Diego Padres",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsd.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Chicago White Sox") {
                   mlbArr.push({name: "Chicago White Sox",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcws.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Los Angeles Angels") {
                   mlbArr.push({name: "Los Angeles Angels",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fana.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Philadelphia Philies") {
                   mlbArr.push({name: "Philadelphia Phillies",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fphi.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Cincinatti Reds") {
                   mlbArr.push({name: "Cincinatti Reds",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcin.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Minnesota Twins") {
                   mlbArr.push({name: "Minnesota Twins",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fmin.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Texas Rangers") {
                   mlbArr.push({name: "Texas Rangers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftex.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Washington Nationals") {
                   mlbArr.push({name: "Washington Nationals",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fwas.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Cleveland Indians") {
                  mlbArr.push({name: "Cleveland Indians",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcle.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Houston Astros") {
                  mlbArr.push({name: "Houston Astros",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fhou.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Tampa Bay Rays") {
                  mlbArr.push({name: "Tampa Bay Rays",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftb.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Miami Marlins") {
                  mlbArr.push({name: "Miami Marlins",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fatl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Oakland Athletics") {
                   mlbArr.push({name: "Oakland Athletics",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Foak.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Milwaukee Brewers") {
                   mlbArr.push({name: "Milwaukee Brewers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fmil.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Colorado Rockies") {
                   mlbArr.push({name: "Colorado Rockies",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcol.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
               }
               if (el === "Arizona Diamondbacks") {
                 mlbArr.push({name: "Arizona Diamondbacks",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fari.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
                }

          })
          teamObj.mlb = mlbArr;
        }
        if (tabObj.nhl.length > 0) {
          var nhlArr = [];
          teams.nhl.forEach(function(el) {
            if (el === "Chicago Blackhawks") {
                  nhlArr.push({name: "Chicago Blackhawks",
                          url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fblackhawks.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
               }
               if (el === "Montreal Canadiens") {
                   nhlArr.push({name: "Montreal Canadiens",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcanadiens.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Vancouver Canucks") {
                   nhlArr.push({name: "Vancouver Canucks",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcanucks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Boston Bruins") {
                   nhlArr.push({name: "Boston Bruins",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fbruins.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Detroit Red Wings") {
                   nhlArr.push({name: "Detroit Red Wings",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fredwings.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Pittsburgh Penguins") {
                   nhlArr.push({name: "Pittsburgh Penguins",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpenguins.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Calgary Flames") {
                   nhlArr.push({name: "Calgary Flames",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fflames.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Toronto Maple Leafs") {
                   nhlArr.push({name: "Toronto Maple Leafs",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmapleleafs.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Tampa Bay Lightning") {
                   nhlArr.push({name: "Tampa Bay Lightning",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Flightning.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Anaheim Ducks") {
                   nhlArr.push({name: "Anaheim Ducks",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fducks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Minnesota Wild") {
                   nhlArr.push({name: "Minnesota Wild",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwild.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Ottawa Senators") {
                   nhlArr.push({name: "Ottawa Senators",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsenators.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Washington Capitals") {
                   nhlArr.push({name: "Washington Capitals",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcapitals.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Edmonton Oilers") {
                   nhlArr.push({name: "Edmonton Oilers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Foilers.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Winnipeg Jets") {
                   nhlArr.push({name: "Winnipeg Jets",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fjets.nhl.com%2Frss%2Fmobilenews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New York Islanders") {
                   nhlArr.push({name: "New York Islanders",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fislanders.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Los Angeles Kings") {
                   nhlArr.push({name: "Los Angeles Kings",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fkings.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "St. Louis Blues") {
                   nhlArr.push({name: "St. Louis Blues",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fblues.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Buffalo Sabres") {
                   nhlArr.push({name: "Buffalo Sabres",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsabres.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Nashville Predators") {
                   nhlArr.push({name: "Nashville Preadators",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpredators.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Philadelphia Flyers") {
                   nhlArr.push({name: "Philadelphia Flyers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftex.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "San Jose Sharks") {
                   nhlArr.push({name: "San Jose Sharks",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsharks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Arizona Coyotes") {
                  nhlArr.push({name: "Arizona Coyotes",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcoyotes.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Colorado Avalanche") {
                  nhlArr.push({name: "Colorado Avalanche",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Favalanche.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Columbus Blue Jackets") {
                  nhlArr.push({name: "Columbus Blue Jackets",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fbluejackets.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Carolina Hurricanes") {
                  nhlArr.push({name: "Carolina Hurricanes",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fhurricanes.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Florida Panthers") {
                   nhlArr.push({name: "Florida Panthers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpanthers.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Dallas Stars") {
                   nhlArr.push({name: "Dallas Stars",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fstars.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New Jersey Devils") {
                   nhlArr.push({name: "New Jersey Devils",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fdevils.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
               }
               if (el === "New York Rangers") {
                 nhlArr.push({name: "New York Rangers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Frangers.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
                }

          })
          teamObj.nhl = nhlArr;
        }
        if (tabObj.nba.length > 0) {
          var nbaArr = [];
          teams.nba.forEach(function(el) {
            if (el === "Boston Celtics") {
                  nbaArr.push({name: "Boston Celtics",
                          url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fceltics%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
               }
               if (el === "Dallas Mavericks") {
                   nbaArr.push({name: "Dallas Mavericks",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.mavs.com%2Ffeed%2F%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Houston Rockets") {
                   nbaArr.push({name: "Houston Rockets",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Frockets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Brooklyn Nets") {
                   nbaArr.push({name: "Brooklyn Nets",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fnets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New York Knicks") {
                   nbaArr.push({name: "New York Knicks",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fknicks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Memphis Grizzlies") {
                   nbaArr.push({name: "Memphis Grizzlies",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fgrizzlies%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Philadelphia Sixers") {
                   nbaArr.push({name: "Philadelphia Sixers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fsixers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "New Orleans Pelicans") {
                   nbaArr.push({name: "New Orleans Pelicans",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpelicans%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Toronto Raptors") {
                   nbaArr.push({name: "Toronto Raptors",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fraptors%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "San Antonio Spurs") {
                   nbaArr.push({name: "San Antonio Spurs",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fspurs%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Chicago Bulls") {
                   nbaArr.push({name: "Chicago Bulls",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fbulls%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Denver Nuggets") {
                   nbaArr.push({name: "Denver Nuggets",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fnuggets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Cleveland Cavaliers") {
                   nbaArr.push({name: "Cleveland Cavaliers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fcavaliers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Minnesota Timberwolves") {
                   nbaArr.push({name: "Minnesota Timberwolves",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Ftimberwolves%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Detroit Pistons") {
                   nbaArr.push({name: "Detroit Pistons",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpistons%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Oklahoma City Thunder") {
                   nbaArr.push({name: "Oklahoma City Thunder",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fthunder%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Indiana Pacers") {
                   nbaArr.push({name: "Indiana Pacers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpacers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Portland Trail Blazers") {
                   nbaArr.push({name: "Portland Trail Blazers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fblazers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Milwaukee Bucks") {
                   nbaArr.push({name: "Milwaukee Bucks",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fbucks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Utah Jazz") {
                   nbaArr.push({name: "Utah Jazz",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fjazz%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Atlanta Hawks") {
                   nbaArr.push({name: "Atlanta Hawks",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fhawks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Golden State Warriors") {
                   nbaArr.push({name: "Golden State Warriors",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fwarriors%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Charlotte Hornets") {
                  nbaArr.push({name: "Charlotte Hornets",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fhornets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Los Angeles Clippers") {
                  nbaArr.push({name: "Los Angeles Clippers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fclippers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Miami Heat") {
                  nbaArr.push({name: "Miami Heat",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fheat%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Los Angeles Lakers") {
                  nbaArr.push({name: "Los Angeles Lakers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Flakers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Orlando Magic") {
                   nbaArr.push({name: "Orlando Magic",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fmagic%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Phoenix Suns") {
                   nbaArr.push({name: "Phoneix Suns",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fsuns%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "Washington Wizards") {
                   nbaArr.push({name: "Washington Wizards",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fwizards%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
               }
               if (el === "Sacramento Kings") {
                 nbaArr.push({name: "Sacramento Kings",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fkings%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
                }

          })
          teamObj.nba = nbaArr;
        }
        if (tabObj.extra.length > 0) {
          var extraArr = [];
          teams.extra.forEach(function(el) {
            if (el === "NFL Headlines") {
                  extraArr.push({name: "NFL Headlines",
                          url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnfl%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
               }
               if (el === "MLB Headlines") {
                   extraArr.push({name: "MLB Headlines",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fmlb%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }
               if (el === "NHL Headlines") {
                   extraArr.push({name: "NHL Headlines",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnhl%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

               }

               if (el === "NBA Headlines") {
                   extraArr.push({name: "NBA Headlines",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnba%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
               }
          })
          teamObj.extra = extraArr;
        }
          return teamObj;
        })
      }
    var getNFL = function() {
      return getProfileTeams().then(function(teams) {
        var teamObj = {};
        var nflArr = [];
        teams.nfl.forEach(function(el) {
          if (el === "Pittsburgh Steelers") {
                nflArr.push({name: "Pittsburgh Steelers",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.steelers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Baltimore Ravens") {
                 nflArr.push({name: "Baltimore Ravens",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.baltimoreravens.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Cleveland Browns") {
                 nflArr.push({name: "Cleveland Browns",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.clevelandbrowns.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Cincinatti Bengals") {
                 nflArr.push({name: "Cincinatti Bengals",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.bengals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%2520Stories%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Indianapolis Colts") {
                 nflArr.push({name: "Indianapolis Colts",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.colts.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Tampa Bay Buccaneers") {
                 nflArr.push({name: "Tampa Bay Buccaneers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buccaneers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Green Bay Packers") {
                 nflArr.push({name: "Green Bay Packers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.packers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Denver Broncos") {
                 nflArr.push({name: "Denver Broncos",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.denverbroncos.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "San Fransisco 49ers") {
                 nflArr.push({name: "San Fransisco 49ers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.49ers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Houston Texans") {
                 nflArr.push({name: "Houston Texans",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.houstontexans.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New England Patriots") {
                 nflArr.push({name: "New England Patriots",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.patriots.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New York Jets") {
                 nflArr.push({name: "New York Jets",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.newyorkjets.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Miami Dolphins") {
                 nflArr.push({name: "Miami Dolphins",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.miamidolphins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Jacksonville Jaguars") {
                 nflArr.push({name: "Jacksonville Jaguars",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fprod.www.jaguars.clubs.nfl.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "St. Louis Rams") {
                 nflArr.push({name: "St. Louis Rams",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.stlouisrams.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Atlanta Falcons") {
                 nflArr.push({name: "Atlanta Falcons",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.atlantafalcons.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Carolina Panthers") {
                 nflArr.push({name: "Carolina Panthers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.panthers.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New Orleans Saints") {
                 nflArr.push({name: "New Orleans Saints",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.neworleanssaints.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New York Giants") {
                 nflArr.push({name: "New York Giants",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.giants.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Philadelphia Eagles") {
                 nflArr.push({name: "Philadelphia Eagles",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.philadelphiaeagles.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Dallas Cowboys") {
                 nflArr.push({name: "Dallas Cowboys",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.dallascowboys.com%2Frss%2Farticle%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Washington Redskins") {
                 nflArr.push({name: "Washington Redskins",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.redskins.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Arizona Cardinals") {
                nflArr.push({name: "Arizona Cardinals",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.azcardinals.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Tennesse Titans") {
                nflArr.push({name: "Tennesse Titans",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.titansonline.com%2Fcda-web%2Frss-module.htm%3FtagName%3DTeam%2520News%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Kansas City Chiefs") {
                nflArr.push({name: "Kansas City Chiefs",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.kcchiefs.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Oakland Raiders") {
                nflArr.push({name: "Oakland Raiders",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.raiders.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Buffalo Bills") {
                 nflArr.push({name: "Buffalo Bills",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.buffalobills.com%2Fcda-web%2Frss-module.htm%3FtagName%3DLatestHeadlines%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Minnesota Vikings") {
                 nflArr.push({name: "Minnesota Vikings",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.vikings.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Detroit Lions") {
                 nflArr.push({name: "Detroit Lions",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.detroitlions.com%2Fcda-web%2Frss-module.htm%3FtagName%3DNews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
             }
             if (el === "Chicago Bears") {
               nflArr.push({name: "Chicago Bears",
                    url: ""})
              }
             if (el === "San Diego Chargers") {
               nflArr.push({name: "San Diego Chargers",
                    url: ""})
             }
             if (el === "Seattle Seahawks") {
              nflArr.push({name: "Seattle Seahawks",
                    url: ""})
             }
        })
        teamObj.nfl = nflArr;
        return teamObj;
      })

    }
    var getMLB = function() {
      return getProfileTeams().then(function(teams) {
        var teamObj = {};
        var mlbArr = [];
        teams.mlb.forEach(function(el) {
          if (el === "Baltimore Orioles") {
                mlbArr.push({name: "Balimore Orioles",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fbal.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
             }
             if (el === "Boston Red Sox") {
                 mlbArr.push({name: "Boston Red Sox",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fbos.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New York Yankees") {
                 mlbArr.push({name: "New York Yankees",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fnyy.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Los Angeles Dodgers") {
                 mlbArr.push({name: "Los Angeles Dodgers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fla.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Detroit Tigers ") {
                 mlbArr.push({name: "Detroit Tigers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fdet.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Chicago Cubs") {
                 mlbArr.push({name: "Chicago Cubs",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fchc.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "San Fransisco Giants") {
                 mlbArr.push({name: "San Fransisco Giants",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsf.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Toronto Blue Jays") {
                 mlbArr.push({name: "Toronto Blue Jays",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftor.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New York Mets") {
                 mlbArr.push({name: "New York Mets",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fnym.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "St. Louis Cardinals") {
                 mlbArr.push({name: "St. Louis Cardinals",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fstl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Kansas City Royals") {
                 mlbArr.push({name: "Kansas City Royals",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fkc.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Atlanta Braves") {
                 mlbArr.push({name: "Atlanta Braves",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fatl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Pittsburgh Pirates") {
                 mlbArr.push({name: "Pittsburgh Pirates",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fpit.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Seattle Mariners") {
                 mlbArr.push({name: "Seattle Mariners",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsea.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "San Diego Padres") {
                 mlbArr.push({name: "San Diego Padres",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fsd.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Chicago White Sox") {
                 mlbArr.push({name: "Chicago White Sox",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcws.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Los Angeles Angels") {
                 mlbArr.push({name: "Los Angeles Angels",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fana.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Philadelphia Philies") {
                 mlbArr.push({name: "Philadelphia Phillies",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fphi.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Cincinatti Reds") {
                 mlbArr.push({name: "Cincinatti Reds",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcin.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Minnesota Twins") {
                 mlbArr.push({name: "Minnesota Twins",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fmin.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Texas Rangers") {
                 mlbArr.push({name: "Texas Rangers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftex.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Washington Nationals") {
                 mlbArr.push({name: "Washington Nationals",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fwas.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Cleveland Indians") {
                mlbArr.push({name: "Cleveland Indians",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcle.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Houston Astros") {
                mlbArr.push({name: "Houston Astros",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fhou.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Tampa Bay Rays") {
                mlbArr.push({name: "Tampa Bay Rays",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftb.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Miami Marlins") {
                mlbArr.push({name: "Miami Marlins",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fatl.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Oakland Athletics") {
                 mlbArr.push({name: "Oakland Athletics",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Foak.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Milwaukee Brewers") {
                 mlbArr.push({name: "Milwaukee Brewers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fmil.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Colorado Rockies") {
                 mlbArr.push({name: "Colorado Rockies",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fcol.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
             }
             if (el === "Arizona Diamondbacks") {
               mlbArr.push({name: "Arizona Diamondbacks",
                    url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fari.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
              }
        })
        teamObj.mlb = mlbArr;
        return teamObj;
      })

    }
    var getNHL = function() {
      return getProfileTeams().then(function(teams) {
        var teamObj = {};
        var nhlArr = [];
        teams.nhl.forEach(function(el) {
          if (el === "Chicago Blackhawks") {
                nhlArr.push({name: "Chicago Blackhawks",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fblackhawks.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
             }
             if (el === "Montreal Canadiens") {
                 nhlArr.push({name: "Montreal Canadiens",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcanadiens.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Vancouver Canucks") {
                 nhlArr.push({name: "Vancouver Canucks",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcanucks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Boston Bruins") {
                 nhlArr.push({name: "Boston Bruins",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fbruins.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Detroit Red Wings") {
                 nhlArr.push({name: "Detroit Red Wings",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fredwings.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Pittsburgh Penguins") {
                 nhlArr.push({name: "Pittsburgh Penguins",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpenguins.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Calgary Flames") {
                 nhlArr.push({name: "Calgary Flames",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fflames.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Toronto Maple Leafs") {
                 nhlArr.push({name: "Toronto Maple Leafs",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmapleleafs.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Tampa Bay Lightning") {
                 nhlArr.push({name: "Tampa Bay Lightning",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Flightning.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Anaheim Ducks") {
                 nhlArr.push({name: "Anaheim Ducks",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fducks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Minnesota Wild") {
                 nhlArr.push({name: "Minnesota Wild",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwild.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Ottawa Senators") {
                 nhlArr.push({name: "Ottawa Senators",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsenators.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Washington Capitals") {
                 nhlArr.push({name: "Washington Capitals",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcapitals.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Edmonton Oilers") {
                 nhlArr.push({name: "Edmonton Oilers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Foilers.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Winnipeg Jets") {
                 nhlArr.push({name: "Winnipeg Jets",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fjets.nhl.com%2Frss%2Fmobilenews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New York Islanders") {
                 nhlArr.push({name: "New York Islanders",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fislanders.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Los Angeles Kings") {
                 nhlArr.push({name: "Los Angeles Kings",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fkings.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "St. Louis Blues") {
                 nhlArr.push({name: "St. Louis Blues",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fblues.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Buffalo Sabres") {
                 nhlArr.push({name: "Buffalo Sabres",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsabres.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Nashville Predators") {
                 nhlArr.push({name: "Nashville Preadators",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpredators.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Philadelphia Flyers") {
                 nhlArr.push({name: "Philadelphia Flyers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fmlb.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Ftex.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "San Jose Sharks") {
                 nhlArr.push({name: "San Jose Sharks",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsharks.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Arizona Coyotes") {
                nhlArr.push({name: "Arizona Coyotes",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fcoyotes.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Colorado Avalanche") {
                nhlArr.push({name: "Colorado Avalanche",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Favalanche.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Columbus Blue Jackets") {
                nhlArr.push({name: "Columbus Blue Jackets",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fbluejackets.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Carolina Hurricanes") {
                nhlArr.push({name: "Carolina Hurricanes",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fhurricanes.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Florida Panthers") {
                 nhlArr.push({name: "Florida Panthers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fpanthers.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Dallas Stars") {
                 nhlArr.push({name: "Dallas Stars",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fstars.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New Jersey Devils") {
                 nhlArr.push({name: "New Jersey Devils",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fdevils.nhl.com%2Frss%2Fnews.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
             }
             if (el === "New York Rangers") {
               nhlArr.push({name: "New York Rangers",
                    url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Frangers.nhl.com%2Frss%2Ftop-stories.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
              }
        })
        teamObj.nhl = nhlArr;
        return teamObj;
      })

    }
    var getNBA = function() {
      return getProfileTeams().then(function(teams) {
        var teamObj = {};
        var nbaArr = [];
        teams.nba.forEach(function(el) {
          if (el === "Boston Celtics") {
                nbaArr.push({name: "Boston Celtics",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fceltics%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
             }
             if (el === "Dallas Mavericks") {
                 nbaArr.push({name: "Dallas Mavericks",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.mavs.com%2Ffeed%2F%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Houston Rockets") {
                 nbaArr.push({name: "Houston Rockets",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Frockets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Brooklyn Nets") {
                 nbaArr.push({name: "Brooklyn Nets",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fnets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New York Knicks") {
                 nbaArr.push({name: "New York Knicks",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fknicks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Memphis Grizzlies") {
                 nbaArr.push({name: "Memphis Grizzlies",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fgrizzlies%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Philadelphia Sixers") {
                 nbaArr.push({name: "Philadelphia Sixers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fsixers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "New Orleans Pelicans") {
                 nbaArr.push({name: "New Orleans Pelicans",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpelicans%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Toronto Raptors") {
                 nbaArr.push({name: "Toronto Raptors",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fraptors%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "San Antonio Spurs") {
                 nbaArr.push({name: "San Antonio Spurs",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fspurs%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Chicago Bulls") {
                 nbaArr.push({name: "Chicago Bulls",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fbulls%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Denver Nuggets") {
                 nbaArr.push({name: "Denver Nuggets",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fnuggets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Cleveland Cavaliers") {
                 nbaArr.push({name: "Cleveland Cavaliers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fcavaliers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Minnesota Timberwolves") {
                 nbaArr.push({name: "Minnesota Timberwolves",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Ftimberwolves%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Detroit Pistons") {
                 nbaArr.push({name: "Detroit Pistons",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpistons%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Oklahoma City Thunder") {
                 nbaArr.push({name: "Oklahoma City Thunder",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fthunder%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Indiana Pacers") {
                 nbaArr.push({name: "Indiana Pacers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fpacers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Portland Trail Blazers") {
                 nbaArr.push({name: "Portland Trail Blazers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fblazers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Milwaukee Bucks") {
                 nbaArr.push({name: "Milwaukee Bucks",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fbucks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Utah Jazz") {
                 nbaArr.push({name: "Utah Jazz",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fjazz%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Atlanta Hawks") {
                 nbaArr.push({name: "Atlanta Hawks",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fhawks%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Golden State Warriors") {
                 nbaArr.push({name: "Golden State Warriors",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fwarriors%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Charlotte Hornets") {
                nbaArr.push({name: "Charlotte Hornets",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fhornets%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Los Angeles Clippers") {
                nbaArr.push({name: "Los Angeles Clippers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fclippers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Miami Heat") {
                nbaArr.push({name: "Miami Heat",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fheat%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Los Angeles Lakers") {
                nbaArr.push({name: "Los Angeles Lakers",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Flakers%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Orlando Magic") {
                 nbaArr.push({name: "Orlando Magic",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fmagic%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Phoenix Suns") {
                 nbaArr.push({name: "Phoneix Suns",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fsuns%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "Washington Wizards") {
                 nbaArr.push({name: "Washington Wizards",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fwizards%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
             }
             if (el === "Sacramento Kings") {
               nbaArr.push({name: "Sacramento Kings",
                    url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.nba.com%2Fkings%2Frss.xml%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
              }
        })
        teamObj.nba = nbaArr;
        return teamObj;


      })

    }
    var getExtra = function() {
      return getProfileTeams().then(function(teams) {
        var teamObj = {};
        var extraArr = [];
        teams.extra.forEach(function(el) {
          if (el === "NFL Headlines") {
                extraArr.push({name: "NFL Headlines",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnfl%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
             }
             if (el === "MLB Headlines") {
                 extraArr.push({name: "MLB Headlines",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fmlb%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }
             if (el === "NHL Headlines") {
                 extraArr.push({name: "NHL Headlines",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnhl%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})

             }

             if (el === "NBA Headlines") {
                 extraArr.push({name: "NBA Headlines",
                      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnba%2Fnews%22&format=json&diagnostics=true&callback=JSON_CALLBACK"})
             }
        })
        teamObj.extra = extraArr;
        return teamObj;
      })
    }

  var getStarred = function() {
      var id = localStorage.getItem('userId');
    var url = '/api/collections' + '/' + id;
    return $http.get(url);

  };
  var addToStarred = function(article) {
    console.log('i am in add to starred');
    var id = localStorage.getItem('userId');
    var url = '/api/collections' + '/' + id;
    return $http.get(url).then(function(starred) {
      if (starred.data.length < 1) {
        $http.post(url, article);
      }
      starred.data.forEach(function(el) {
        if (el.title !== "article.title") {
          console.log('im in post');
          return $http.post(url, article);
        }
      });
    })
  };
  var deleteStarred = function(article) {
      var id = localStorage.getItem('userId');
    var url = '/api/collections' + '/' + id;
    $http.delete(url + '/' + article._id).success(function() {
        $rootScope.$broadcast('article:deleted');
    });

  };

      return {
        getProfile: getProfile,
        getProfileTeams: getProfileTeams,
        getNFL: getNFL,
        getMLB: getMLB,
        getNHL: getNHL,
        getNBA: getNBA,
        getExtra: getExtra,
        getStarred: getStarred,
        addToStarred: addToStarred,
        deleteStarred: deleteStarred
      }

    });
}());
