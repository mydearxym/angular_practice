'use strict';

//var myappApp = angular.module('myappApp', ['ngAnimate']);


var myappApp = angular.module('myappApp', ['ngAnimate'])


myappApp.controller("MainController", function() {
  var self = this;

  self.lat = "main Ctrl lat data";

});



myappApp.directive("outer", function() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      lat:"="
    },
    controller: function(){
      this.outerlat = "outer lat data";
    },
    controllerAs: "outerCtrl",
    template: "<div class='text-danger'>outer: lat: {{lat}}<div ng-transclude></div></div>"
  }

})

myappApp.directive("inside", function() {
  return {
    restrict: "E",
    require: "^outer",
    scope: {
      lat:"="
    },

//    template: "<div class='text-danger'>inside: lat: {{lat}}</div>",
    template: "<div class='text-danger'>inside: lat: {{outerlat}}</div>",

    link: function(scope, el,attr,outerCtrl){
      scope.outerlat = outerCtrl.outerlat;
    }
  }
})






