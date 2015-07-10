(function() {
  'use strict';


angular.module('places')
  .factory('PlaceService', function($http) {

    window.onload = function() {
      var mapDiv = document.getElementById('map');
      var latLng = new google.maps.LatLng(37.09, -95.71);

      var options = {
        center: latLng,
        zoom: 4,
        mapTypeId: google.maps.mapTypeId.ROADMAP
      };

      var map = new google.maps.Map(mapDiv, options);
    }

  });
})();
