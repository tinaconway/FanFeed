(function() {
  angular.module('feed')
    .factory('feedService', function($http, $rootScope, $q) {

      var getProfile = function() {
        return $http.get('/api/me').then(function(data) {
          return data.data;
        });
      };

      var getNFL = function(starred) {
        var nflArr = [];
        var nflPromise = [];
        return $http.get('/api/getNFL').then(function(resp) {
          resp.data.forEach(function(team) {
            var deferred = $q.defer();
            $http.jsonp(team.url).then(function(data) {
              nflArr.push(data.data.query.results.item);
              deferred.resolve(data);
            });
            nflPromise.push(deferred.promise);
          });
          return $q.all(nflPromise).then(function(results) {
            var allArticles = [];
            nflArr.forEach(function(article) {
              article.forEach(function(item) {
                if (starred.indexOf(item.link) > -1) {
                  item.starred = true;
                }
                var postDate = new Date(item.pubDate);
                var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                item.pubDate = pubDate;
                allArticles.push(item);
              });
            });
            return allArticles;
          });
        });
      };

      var getMLB = function() {
        var mlbArr = [];
        var mlbPromise = [];
        return $http.get('/api/getMLB').then(function(resp) {
          resp.data.forEach(function(team) {
            var deferred = $q.defer();
            $http.jsonp(team.url).then(function(data) {
              mlbArr.push(data.data.query.results.item);
              deferred.resolve(data);
            });
            mlbPromise.push(deferred.promise);
          });
          return $q.all(mlbPromise).then(function(results) {
            var allArticles = [];
            mlbArr.forEach(function(article) {
              article.forEach(function(item) {
                var postDate = new Date(item.pubDate);
                var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                item.pubDate = pubDate;
                allArticles.push(item);
              });
            });
            return allArticles;
          });
        });
      };

      var getNHL = function() {
        var nhlArr = [];
        var nhlPromise = [];
        return $http.get('/api/getNHL').then(function(resp) {
          resp.data.forEach(function(team) {
            var deferred = $q.defer();
            $http.jsonp(team.url).then(function(data) {
              if (data.data.query.count > 0) {
                nhlArr.push(data.data.query.results.item);
              }
              deferred.resolve(data);
            });
            nhlPromise.push(deferred.promise);
          });
          return $q.all(nhlPromise).then(function(results) {
            var allArticles = [];
            nhlArr.forEach(function(article) {
              article.forEach(function(item) {
                var postDate = new Date(item.pubDate);
                var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                item.pubDate = pubDate;
                allArticles.push(item);
              });
            });
            return allArticles;
          });
        });
      };

      var getNBA = function() {
        var nbaArr = [];
        var nbaPromise = [];
        return $http.get('/api/getNBA').then(function(resp) {
          resp.data.forEach(function(team) {
            var deferred = $q.defer();
            $http.jsonp(team.url).then(function(data) {
              nbaArr.push(data.data.query.results.item);
              deferred.resolve(data);
            });
            nbaPromise.push(deferred.promise);
          });
          return $q.all(nbaPromise).then(function(results) {
            var allArticles = [];
            nbaArr.forEach(function(article) {
              article.forEach(function(item) {
                var postDate = new Date(item.pubDate);
                var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                item.pubDate = pubDate;
                allArticles.push(item);
              });
            });
            return allArticles;
          });
        });
      };

      var getExtra = function() {
        var extraArr = [];
        var extraPromise = [];
        return $http.get('/api/getExtra').then(function(resp) {
          resp.data.forEach(function(team) {
            var deferred = $q.defer();
            $http.jsonp(team.url).then(function(data) {
              extraArr.push(data.data.query.results.item);
              deferred.resolve(data);
            });
            extraPromise.push(deferred.promise);
          });
          return $q.all(extraPromise).then(function(results) {
            var allArticles = [];
            extraArr.forEach(function(article) {
              article.forEach(function(item) {
                var postDate = new Date(item.pubDate);
                var pubDate = (postDate.getMonth() + 1) + "/" + postDate.getDate() + "/" + postDate.getFullYear();
                item.pubDate = pubDate;
                allArticles.push(item);
              });
            });
            return allArticles;
          });
        });
      };

      var getStarred = function() {
        var id = localStorage.getItem('userId');
        var url = '/api/collections' + '/' + id;
        return $http.get(url);
      };

      var addToStarred = function(article) {
        var id = localStorage.getItem('userId');
        var url = '/api/collections' + '/' + id;
        return $http.get(url).then(function(starred) {
          console.log(starred);
          if (starred.data.length < 1) {
            $http.post(url, article);
          }
          else if(!_.contains(starred.data, article.title)) {
              $http.post(url, article);
          }
        })
      };
      var deleteStarred = function(article) {
        var id = localStorage.getItem('userId');
        var url = '/api/collections' + '/' + id;
        return $http.delete(url + '/' + article._id);
      };


      return {
        getProfile: getProfile,
        getNFL: getNFL,
        getMLB: getMLB,
        getNHL: getNHL,
        getNBA: getNBA,
        getExtra: getExtra,
        getStarred: getStarred,
        addToStarred: addToStarred,
        deleteStarred: deleteStarred
      }
      //
    });
}());
