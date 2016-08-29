angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // Contains logic for link view
  // Configures and manages the $scope object

  $scope.data = {};

  var getLinks = function() {
    console.log('inside controller getLinks');
    Links.getAll()
    .then(function(links) {
      $scope.data.links = links;
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  getLinks();

});
