'use strict';

angular.module('hrmsFrontend')
  .controller('SideNavCtrl', function ($scope, $timeout, $mdSidenav, $log, $state) {
    $scope.close = function() {
      $mdSidenav('left').close()
                        .then(function(){
                          $log.debug("close LEFT is done");
                        });
    };

    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle()
                        .then(function(){
                            $log.debug("toggle left is done");
                        });
    };

    var states = $state.get();
    states.shift();
    $scope.navigationItems = states;
  });
