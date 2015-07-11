(function() {
  // 'use strict';


angular.module('places')
  .factory('PlaceService', function($http, $routeParams) {
    var url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
    var detailUrl = 'https://maps.googleapis.com/maps/api/place/details/json?reference='
    var photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';
    var getBars = function() {

      return $http.post('/api/collections/placesProxy', {url: url + lat + ',' + long + '&radius=500&types=bar&key=AIzaSyDh3JutHi19Cdas8AyY36-R2Mn9mkMw-YA'}).then(function (data) {
      console.log(data);
        var listArray = [];
        var listings = JSON.parse(data.data.data);
        console.log(listings);
        listings.results.forEach(function(el) {
          var barObj = {
            id: el.id,
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

        return listArray;

      }).then(function(data) {

        data.forEach(function(el) {
          var el = el;
          $http.post('/api/collections/placesProxy', {url: detailUrl + el.ref + '&key=AIzaSyDh3JutHi19Cdas8AyY36-R2Mn9mkMw-YA'}).then(function(stuff) {

            var listingsDetail = JSON.parse(stuff.data.data);
            el.reviews = listingsDetail.result.reviews;
            el.hours = listingsDetail.result.opening_hours.weekday_text;
            el.website = listingsDetail.result.website;
            el.phone = listingsDetail.result.formatted_phone_number;
            el.address = listingsDetail.result.formatted_address;

          })

        });

        return data;

      });


    };
    var getSingleBar = function(id, lat, long) {
      var listingId = id;
  return getBars().then(function(data) {
        console.log(data);
          var filteredArray = [];
          data.forEach(function(el) {
            el.id = el.id.toString();
            if (el.id === listingId) {
              filteredArray.push(el);
            }

          });
          console.log(filteredArray[0]);
          return(filteredArray[0]);
      });

    }

    var commentsUrl = 'http://tiy-fee-rest.herokuapp.com/collections/barsandstripescomments';

    var getComments = function () {
       return $http.get(commentsUrl);
     };

     var createComment = function (newComment) {
         $http.post(commentsUrl, newComment).success(function () {
           $rootScope.$broadcast('comment:created');
         });
       };

    return {
      getComments: getComments,
      createComment: createComment,
      getBars: getBars,
      getSingleBar: getSingleBar
    };


  });
})();
