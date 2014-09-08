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


//我一直想要，和你一起，走上那条美丽的小路。有柔风，有白云，有你在我身旁，倾听我快乐和感激的心。——席慕容
// 你信不信我一巴掌把你踢出去
//管杀不管埋
// 问题我也是人，又不是穿山甲
// 我引用一下我自己说过的话。
//“圣贤为伍，师友同行”

var myappApp = angular.module('myappApp');

myappApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            template: "<h2 class=\"text-success\">this is Home page</h2>",
            controller: "AppCtrl",
            resolve: {
               // 这里任何一个失败都会触发 $routeChangeError
               loadData: myappApp.loadData,
               prepData: myappApp.prepData
            }
        })
})

// 这里的 rootCtrl 是作为全局的 listener
myappApp.controller("rootCtrl", function($rootScope){

//    $rootScope.$on("$routeChangeError",function(){
    $rootScope.$on("$routeChangeError",function(event, current,previous, rejection){
        console.log("route change error: "+rejection);
    })

})

// 另一种方法是用 directive
myappApp.directive("error", function($rootScope){
    return {
        restrict: "E",
//        template: "<div class=\"text-danger\" ng-show='isError'>Error happend!</div>",
        template: "<div class=\"text-danger\" ng-show='isError'>{{rejection}}</div>",
        link: function(scope) {
            $rootScope.$on("$routeChangeError",function(event, current,previous, rejection){
//                console.log("route change error: "+rejection);
                scope.rejection = rejection;
                scope.isError = true;
            })
        }
    }
})



myappApp.controller("AppCtrl", function($scope){

    $scope.model = {
        message :"Address: "
    }

})

myappApp.loadData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
//        defer.resolve();
        defer.reject("your netword is down!");
        console.log("loadData done")
    },1000)
    return defer.promise
}

myappApp.prepData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.resolve();
        console.log("preData done")
    },2000)
    return defer.promise
}




