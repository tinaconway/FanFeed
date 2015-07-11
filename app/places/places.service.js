(function() {
  'use strict';


angular.module('places')
  .factory('PlaceService', function($http) {
    var url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
    var detailUrl = 'https://maps.googleapis.com/maps/api/place/details/json?reference='
    var photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';
    var getBars = function(lat, long) {

      return $http.post('/api/collections/placesProxy', {url: url + lat + ',' + long + '&radius=500&types=bar&key=AIzaSyB1fCDWOWVBXPWLGos-z9XwKo14_gChZOo'}).then(function (data) {
        // console.log(JSON.parse(data.data).results)
        var listArray = [];
        var listings = JSON.parse(data.data.data);
        console.log(listings);

        listings.results.forEach(function(el) {
          var barObj = {
            name: el.name,
            rating: el.rating,
            address: el.vicinity,
            photo: el.photos,
            ref: el.reference
          }
          if (typeof(el.photos) === 'object' && el.photos.length > 0) {
            el.photos = el.photos[0].photo_reference;
          }
          listArray.push(barObj);
        });
        console.log(listArray);
        return listArray;

      }).then(function(data) {


        data.forEach(function(el) {
          var el = el;
          $http.post('/api/collections/placesProxy', {url: detailUrl + el.ref + '&key=AIzaSyB1fCDWOWVBXPWLGos-z9XwKo14_gChZOo'}).then(function(stuff) {

            var listingsDetail = JSON.parse(stuff.data.data);
            el.reviews = listingsDetail.result.reviews;
            el.hours = listingsDetail.result.opening_hours.weekday_text;
            el.website = listingsDetail.result.website;
            console.log(listingsDetail);

          })

        })
        return data;


      })

    };
    return {
      getBars: getBars
    };


  });
})();
