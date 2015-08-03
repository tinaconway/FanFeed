var preferences = [];

(function() {

  angular.module('profile')
    .controller('ProfileController', function($scope, $auth, $alert, Account, $rootScope, $http) {

  $rootScope.rolesNFL = [
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
  $rootScope.rolesNFL2 = [
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

  $rootScope.rolesMLB = [
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
$rootScope.rolesMLB2 = [
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

  $rootScope.rolesNHL = [
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
$rootScope.rolesNHL2 = [
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

  $rootScope.rolesNBA = [
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
$rootScope.rolesNBA2 = [
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
  $rootScope.rolesExtra = [
    'NFL Headlines',
    'MLB Headlines',
    'NHL Headlines',
    'NBA Headlines',
    'Fantasy News'
  ];

$scope.saveTeams = function(users) {

  Account.updateProfile({
    displayName: $scope.user.displayName,
    email: $scope.user.email,
    favoriteNFL: users.rolesNFL || [],
    favoriteMLB: users.rolesMLB || [],
    favoriteNHL: users.rolesNHL || [],
    favoriteNBA: users.rolesNBA || [],
    favoriteExtra: users.rolesExtra || []
  })
};
      /**
       * Get user's profile information.
       */
        Account.getProfile()
          .success(function(data) {
            $rootScope.user = data;
            $rootScope.username = data.displayName;
            $rootScope.favoriteNFL = data.favoriteNFL;
            $rootScope.favoriteMLB = data.favoriteMLB;
            $rootScope.favoriteNBA = data.favoriteNBA;
            $rootScope.favoriteNHL = data.favoriteNHL;
            $rootScope.favoriteExtra = data.favoriteExtra;
          })
          .error(function(error) {
            $alert({
              content: error.message,
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          })
          .then(function() {
            $rootScope.users = {
              rolesNFL: $rootScope.favoriteNFL,
              rolesNFL2: $rootScope.favoriteNFL,
              rolesMLB: $rootScope.favoriteMLB,
              rolesMLB2: $rootScope.favoriteMLB,
              rolesNHL: $rootScope.favoriteNHL,
              rolesNHL2: $rootScope.favoriteNHL,
              rolesNBA: $rootScope.favoriteNBA,
              rolesNBA2: $rootScope.favoriteNBA,
              rolesExtra: $rootScope.favoriteExtra
            };


          });


      /**
       * Update user's profile information.
       */
      $scope.updateProfile = function(users) {
        Account.updateProfile({
          displayName: $scope.user.displayName,
          email: $scope.user.email,
          favoriteNFL: users.rolesNFL || [],
          favoriteMLB: users.rolesMLB || [],
          favoriteNHL: users.rolesNHL || [],
          favoriteNBA: users.rolesNBA || [],
          favoriteExtra: users.rolesExtra || []
        }).then(function() {
          $alert({
            content: 'Profile has been updated',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
      };

      /**
       * Link third-party provider.
       */
      $scope.link = function(provider) {
        $auth.link(provider)
          .then(function() {
            $alert({
              content: 'You have successfully linked ' + provider + ' account',
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          })
          .then(function() {
            $scope.getProfile();
          })
          .catch(function(response) {
            $alert({
              content: response.data.message,
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          });
      };

      /**
       * Unlink third-party provider.
       */
      $scope.unlink = function(provider) {
        $auth.unlink(provider)
          .then(function() {
            $alert({
              content: 'You have successfully unlinked ' + provider + ' account',
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          })
          .then(function() {
            $scope.getProfile();
          })
          .catch(function(response) {
            $alert({
              content: response.data ? response.data.message : 'Could not unlink ' + provider + ' account',
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          });
      };

    });
}());
