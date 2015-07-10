(function() {
    'use strict';


angular.module('places')
  .controller('PlacesController', function($scope, $auth, $alert, Account) {
    $scope.map = { center: { latitude: 32.7833, longitude: -79.931051 }, zoom: 8 };

  });
})();
