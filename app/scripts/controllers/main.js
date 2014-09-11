'use strict';

// var canvas = document.getElementById("canvas");
// var context = canvas.getContext('2d');
// context.moveTo(100,100);
// context.lineTo(700,700);
// context.lineTo(100,700);
// context.lineTo(100,100);

// context.fillStyle="rgb(2,100,30)"
// context.fill()
// context.lineWidth = 5;
// context.strokeStyle = "red";
// context.stroke();
// context.lineWidth = 5;
// context.strokeStyle = "blue"
// context.arc(300,300,200,0,1.5*Math.PI)
// context.stroke();



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




var myappApp = angular.module('myappApp');

myappApp.config(function($logProvider){
   // 可以将某个 level 的使能关掉,类似的有 debug ingo warn etc...
    $logProvider.debugEnabled(false);
});


myappApp.run(function($rootScope,$log){
    //做全局使用
    $rootScope.$log = $log;
})

// 用 controller as 这种语法不需要注入 $scope
// $scope 将只用在 $watch $apply 等时刻
myappApp.controller("AppCtrl", function(){

    this.openDoor = function(){
        alert("open door");
    }

    this.buttonTitle = "i am a button";
    this.foo = "room foo";

})

myappApp.controller("OtherCtrl", function(){
    this.foo = "other foo";
});








