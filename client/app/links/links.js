angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // Contain logic for link view
  // Configures and manages the $scope object

  $scope.data = {};

  Links.getAll()
  .then(function(data) {
    $scope.data.links = data;
  });

});
