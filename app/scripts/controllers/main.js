'use strict';

//var myappApp = angular.module('myappApp', ['ngAnimate']);


var myappApp = angular.module('myappApp', ['ngAnimate'])


myappApp.controller("AppCtrl2", function() {
  var self = this;

  self.parentScopeFunction = function(arg1,arg2) {
    console.log(arg1 + "  " + arg2);
  }

});



myappApp.directive("phone", function() {
  return {
    restrict: "E",
    template: "<button ng-click=\"myDirective({funcParam: \'blah blah\', secondParam: \'blah blah\'})\">It can be executed from inside the DOM too!</button>",

    scope: {
      myDirective: '&'
    },

    link: function(scope, element, attributes){

      //IMPORTANT: if scope.parentScopeFunction was not defined on the parent scope, then '&' interpolates it into a NOOP function, it is still a FUNCTION type
      //if the DOM attribute was not defined, scope.property would also still return a noop function

      //if it's defined as something other than a function, an error occurs!

      //parameters passed into the bound function expression must be in the form of an object map
      scope.myDirective(
        {
          funcParam: 'This is the value that is going to be passed in as the funcParam',
          secondParam: 'This is another param!'
        }
      );

    }
  };
})






