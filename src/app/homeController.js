var app = angular.module('repeat-web-application');

  app.controller('HomeController', 
  function($scope, $rootScope, $stateParams, $state, LoginService) {
    $scope.user = $rootScope.userName;
    
  });