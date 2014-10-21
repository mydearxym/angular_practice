'use strict';

//var myappApp = angular.module('myappApp', ['ngAnimate']);


var myappApp = angular.module('myappApp', ['ngAnimate'])

myappApp.controller("AppCtrl", function($scope) {
  $scope.callHome = function(message) {
    alert(message)
  }
})

myappApp.controller("AppCtrl2", function() {
  var that = this;

  that.callHome = function() {
    alert("message")
  }
})

myappApp.directive("phone", function() {
  return {
    scope: {
      addProtocolItem: "&"
//      dial: "&"
    },
    template: '<div class="btn btn-primary" ng-click="addProtocolItem()">Call home!</div>'
//    template: '<input type="text" ng-model="value">' +
//      '<div class="btn btn-primary" ng-click="dial({message:value})">Call home!</div>'
  }
})






