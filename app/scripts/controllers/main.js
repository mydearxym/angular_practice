'use strict';

//var myappApp = angular.module('myappApp', ['ngAnimate']);


var myapp = angular.module('myappApp', [
  'ngAnimate',
  'ui.bootstrap'
]);

myapp.service("validService", function($q){
  var self = this;

  self.eq1 = function(number){
    var deferred = $q.defer();

    if(number == 1){
      deferred.resolve(" = 1");
    } else {
      deferred.reject(" != 1");
    }

    return deferred.promise;
  }

  self.lt3 = function(number){
    var deferred = $q.defer();

    if(number >= 3){
      deferred.resolve(" > 3 !");
    } else {
      deferred.reject(" < 3 ");
    }

    return deferred.promise;
  }

});


myapp.controller("MainController", function($q, $log, validService, $scope){
  var self = $scope;


  self.fruits = ["Apple","Apricot","Avocado","Banana","Breadfruit","Bilberry","Blackberry","Blackcurrant","Blueberry","Boysenberry","Cantaloupe","Currant","Cherry","Cherimoya","Cloudberry","Coconut","Cranberry","Cucumber","Damson","Date","Dragonfruit","Durian"];

  self.removeit = function(item){
    console.log("removeit: ", item);
    _.remove(self.fruits, function(v){
      return v == item
    })

  }

  self.articles = [
    '11111',
    '22222',
    '33333',
    'jfiejf',
    '11121',
    '11141',
    '1111h1',
    '1111fei1'
  ]



  self.isCollapsed2 = false;
});












