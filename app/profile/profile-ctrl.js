(function() {
  angular.module('profile')
    .controller('ProfileController', function($scope, $auth, $alert, accountService) {
      $scope.nfl = [
        'Arizona Cardinals',
        'Atlanta Falcons',
        'Baltimore Ravens',
        'Buffalo Bills',
        'Carolina Panthers',
        'Chicago Bears',
        'Cincinatti Bengals',
        'Cleveland Browns',
        'Dallas Cowboys',
        'Denver Broncos',
        'Detroit Lions',
        'Green Bay Packers',
        'Houston Texans',
        'Indianapolis Colts',
        'Jacksonville Jaguars',
        'Kansas City Chiefs'
      ];

      $scope.nfl2 = [
        'Miami Dolphins',
        'Minnesota Vikings',
        'New England Patriots',
        'New Orleans Saints',
        'New York Giants',
        'New York Jets',
        'Oakland Raiders',
        'Philadelphia Eagles',
        'Pittsburgh Steelers',
        'San Diego Chargers',
        'San Fransisco 49ers',
        'Seattle Seahawks',
        'St.Louis Rams',
        'Tampa Bay Buccaneers',
        'Tennesse Titans',
        'Washington Redskins'
      ];

      $scope.mlb = [
        'Arizona Diamondbacks',
        'Atlanta Braves',
        'Baltimore Orioles',
        'Boston Red Sox',
        'Chicago Cubs',
        'Chicago White Sox',
        'Cincinnati Reds',
        'Cleveland Indians',
        'Colorado Rockies',
        'Detroit Tigers',
        'Florida Marlins',
        'Houston Astros',
        'Kansas City Royals',
        'Los Angeles Angels',
        'Los Angeles Dodgers'
      ];

      $scope.mlb2 = [
        'Milwaukee Brewers',
        'Minnesota Twins',
        'New York Mets',
        'New York Yankees',
        'Oakland Athletics',
        'Philadelphia Phillies',
        'Pittsburgh Pirates',
        'San Diego Padres',
        'San Francisco Giants',
        'Seattle Mariners',
        'St. Louis Cardinals',
        'Tampa Bay Rays',
        'Texas Rangers',
        'Toronto Blue Jays',
        'Washington Nationals'
      ];

      $scope.nhl = [
        'Anaheim Ducks',
        'Atlanta Thrashers',
        'Boston Bruins',
        'Buffalo Sabres',
        'Calgary Flames',
        'Carolina Hurricanes',
        'Chicago Blackhawks',
        'Colorado Avalanche',
        'Columbus Blue Jackets',
        'Dallas Stars',
        'Detroit Red Wings',
        'Edmonton OIlers',
        'Florida Panthers',
        'Los Angeles Kings',
        'Minnesota Wild'
      ];

      $scope.nhl2 = [
        'Montreal Canadiens',
        'Nashville Predators',
        'New Jersey Devils',
        'New Rork Islanders',
        'New York Rangers',
        'Ottawa Senators',
        'Philadelphia Flyers',
        'Phoenix Coyotes',
        'Pittsburgh Penguins',
        'Saint Louis Blues',
        'San Jose Sharks',
        'Tampa Bay Lightning',
        'Toronto Maple Leafs',
        'Vancouver Canucks',
        'Washington Capitals'
      ];

      $scope.nba = [
        'Atlanta Hawks',
        'Boston Celtics',
        'Brooklyn Nets',
        'Charlotte Hornets',
        'Chicago Bulls',
        'Cleveland Cavaliers',
        'Dallas Mavericks',
        'Denver Nuggets',
        'Detroit Pistons',
        'Golden State Warriors',
        'Houston Rockets',
        'Indiana Pacers',
        'Los Angeles Clippers',
        'Los Angeles Lakers',
        'Memphis Grizzlies'
      ];

      $scope.nba2 = [
        'Miami Heat',
        'Milwaukee Bucks',
        'Minnesota Timberwolves',
        'New Orleans Pelicans',
        'New York Knicks',
        'Oklahoma City Thunder',
        'Orlando Magic',
        'Philadelphia Sixers',
        'Phoenix Suns',
        'Portland Trail Blazers',
        'Sacramento Kings',
        'San Antonio Spurs',
        'Toronto Raptors',
        'Utah Jazz',
        'Washington Wizards'
      ];

      $scope.extra = [
        'NFL Headlines',
        'MLB Headlines',
        'NHL Headlines',
        'NBA Headlines'
      ];
      /**
       * Get user's profile information.
       */
      accountService.getProfile()
        .success(function(data) {
          $scope.user = data;
          $scope.favorites = {
            nfl: $scope.user.nfl,
            nfl2: $scope.user.nfl,
            mlb: $scope.user.mlb,
            mlb2: $scope.user.mlb,
            nhl: $scope.user.nhl,
            nhl2: $scope.user.nhl,
            nba: $scope.user.nba,
            nba2: $scope.user.nba,
            extra: $scope.user.extra
          };
        })
        .error(function(error) {
          $alert({
            content: error.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });

      /**
       * Update user's profile information.
       */
      $scope.updateProfile = function(favorites) {
        accountService.updateProfile({
          displayName: $scope.user.displayName,
          email: $scope.user.email,
          nfl: favorites.nfl || [],
          mlb: favorites.mlb || [],
          nhl: favorites.nhl || [],
          nba: favorites.nba || [],
          extra: favorites.extra || []
        }).then(function() {
          $alert({
            content: 'Profile has been updated',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
      };
    });
}());
