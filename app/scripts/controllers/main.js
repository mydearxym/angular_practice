'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
// angular.module('myappApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });


//我一直想要，和你一起，走上那条美丽的小路。有柔风，有白云，有你在我身旁，倾听我快乐和感激的心。——席慕容
// 你信不信我一巴掌把你踢出去
//管杀不管埋
// 问题我也是人，又不是穿山甲
// 我引用一下我自己说过的话。

var myappApp = angular.module('myappApp')

myappApp.factory('Data', function(){
  return {msg: "i am from a service"}
})

myappApp.filter('reverse',function(){
  return function(text) {
    return text.split("").reverse().join("");
  }

})

myappApp.controller('firstCtrl', function($scope, Data) {
  $scope.data = Data;
  // Data=$scope.data ;//= Data;
})

myappApp.controller('secondCtrl', function($scope, Data) {
  $scope.data = Data;
  // Data=$scope.data ;//= Data;

  $scope.reversedMsg = function(message){
    // return $scope.data.msg.split("").reverse().join("");
    return message.split("").reverse().join("");
  }
})



