angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    console.log('link', $scope.link);
    // why does this work for both returning Links.addOne AND w/o return?
    // why does this work for tests?
    // return Links.addOne(link)
    // .then(function(resp) {
    //   return resp;
    // });
  };

});
