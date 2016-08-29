angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    console.log('link', $scope.link);
    Links.addOne($scope.link)
      .then(function() {
        $location.path('/');
      })
      .catch(function() {
        console.log(error);
      })
  };

});
