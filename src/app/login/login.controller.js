'use strict';

angular.module('hrmsFrontend')
  .controller('LoginCtrl', function ($scope, $resource) {
    $scope.user = {
      email: '',
      password: ''
    };
    var csrf = $resource('/api/csrfToken').get(function () {
      $scope.user._csrf = csrf._csrf;
    });
    $scope.submit = function () {
      var data = $scope.user;
      $resource('/api/auth/local').save(data);
    };
  });
