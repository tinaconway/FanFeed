(function() {
  'use strict';
  angular.module('profile')
    .factory('accountService', function($http) {
      return {
        getProfile: function() {
          return $http.get('/api/me');
        },
        updateProfile: function(profileData) {
          return $http.put('/api/me', profileData);
        }
      };
    });
}());
