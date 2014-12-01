'use strict';

//var myappApp = angular.module('myappApp', ['ngAnimate']);


var myapp = angular.module('myappApp', [
  'ngAnimate'
]);

myapp.service("myservice",function($rootScope){

    var showmsg = {val: true};


    this.get = function(){
      return showmsg["val"];
    };

    this.change = function(){

      console.log("change before " + showmsg['val']);
      showmsg["val"] = !showmsg["val"];
      console.log("change after " + showmsg["val"]);

      $rootScope.$broadcast('change:showmsg', showmsg["val"])

      return showmsg["val"];
    };


});

myapp.factory("myfactory",function(){

    var self = {
      msg: true
    };

    return {

      get : function(){
        var self = this;
        if ( undefined == self.msg ) {
          self.msg = true;
        }

        return self.msg;
      },

      change: function(){
        var self = this;

        console.log("change before " + self.msg);
        self.msg = !self.msg;
        console.log("change after " + self.msg);

        return self.msg;
      }
    }

  });



myapp.controller("MainController", function($scope, myservice){
  var self = this;

  self.showmsg = myservice.get();
  console.log("in Ctrl showmsg2: " + self.showmsg);
  self.change = myservice.change;

  $scope.$on('change:showmsg', function(event, data) {
    console.log("see me: " + data);
    self.showmsg = data;
  });
//  $scope.$watch(angular.bind(this, function(showmsg){
//    return this.showmsg;
//  }), function(newVal) {
//    console.log("show msg changed to " + newVal);
//  })



});


  myapp.directive("test", function(){
    return {
      restrict: "E",
      scope: {
        showmsg: "=",
        get: "&",
        change: "&"
      },
      template: '<button class="btn btn-default" ng-click="change()">change it</button>\n<div ng-show="showmsg">\n  {{showmsg}}---blablabla\n</div>'
    }
  })







