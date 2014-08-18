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

var myappApp = angular.module('myappApp')

myappApp.factory('Data', function(){
  return {msg: "i am from a service"}
})

myappApp.directive("zippy",function(){
    return {
        restrict: "E",
        transclude:true,
        scope: {
            title:"@"
        },
        template:'<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude>hello simon</div></div>',
        link: function(scope) {
            scope.isContentVisible = false;
            scope.isContentVisible = false;
            scope.toggleContent = function() {
                scope.isContentVisible = !scope.isContentVisible;
            }

        }
    }

})


myappApp.directive("superman",function(){
  return {
    restrict: "E",
    template:"<div>here i am to save the day</div>"
  }
})


myappApp.directive("superman2", function(){
  return {
    restrict: "A",
    link: function() {
      console.log(" i'am  working");
    }

  }
})

myappApp.directive("enter", function(){
  return function(scope, element, attrs){
      element.bind("mouseenter",function(){
        // console.log("i am inside of you: "+attrs.enter);
        scope.$apply(attrs.enter)
      })
  }

})

myappApp.directive("panel", function(){
   return {
       restrict:"E",
       transclude:true,
       template: '<div class="alert-success" ng-transclude>sorry is a alert</div>'
   }

});

myappApp.directive("superhero", function(){
  return {
    restrict: "E",
    controller:function($scope){
      $scope.abilities = []
      this.addStength = function() {
        $scope.abilities.push("strength");
      }
      this.addSpeed = function(){
        $scope.abilities.push("speed");
      }
      this.addFlight = function(){
        $scope.abilities.push("flight");
      }
    },

    link: function(scope, element){
      element.bind("mouseenter", function(){
        console.log(scope.abilities);
      })

    }

  }
})

myappApp.directive("strength", function(){
  return {
    require:"superhero",
    link: function(scope, element,attrs, superheroCtrl) {
      superheroCtrl.addStength();
    }
  }

})
myappApp.directive("speed", function(){
  return {
    require:"superhero",
    link: function(scope, element,attrs, superheroCtrl) {
      superheroCtrl.addSpeed();
    }
  }

})
myappApp.directive("flight", function(){
  return {
    require:"superhero",
    link: function(scope, element,attrs, superheroCtrl) {
      superheroCtrl.addFlight();
    }
  }

})

myappApp.directive("kid", function(){
  return {
    restrict: "E",
    scope:{},
    template: '<input type="text" ng-model="chore">{{chore}}<br>'
  }
})

myappApp.directive("drink", function(){
  return {
    // restrict: "E",
    scope:{
      // 把 index.html 中 flavor 属性对应的表达式就值，并将结果赋值给这里的 flavor
      flavor:"@" // read the it in as string attrs.flavor
    },
    template: '<div>{{flavor}}</div>'
    // link: function(scope, element, attrs) {
    //   scope.flavor = attrs.flavor;
    // }
  }
})


myappApp.directive("drink2", function(){
  return {
    scope:{
      // = 是用来双向绑定更新的，按照类ng-model的语法，index.html 中ctrlFlavor也不需要{{}}了
      flavor:"=" // read the it in as string attrs.flavor
    },
    // 这里的 flavor 代表 scope 中 flavor所指代的 flavor=ctrlFlavor的值，并且是双向绑定
    template: '<input type="text" ng-model="flavor">'
  }
})



myappApp.directive("phone", function(){
  return {
    scope: {
      dial:"&"
    },
    
    template:'<input type="text" ng-model="value">'+'<div class="button" ng-click="dial({msg:value})">Call home!</div>'
    // template:'<div class="button">Call home!</div>',

  }
})


myappApp.filter('reverse',function(){
  return function(text) {
    return text.split("").reverse().join("");
  }
})

myappApp.controller('testfunc', function($scope, Data) {
  $scope.ctrlFlavor = "xigua";
  $scope.callHome = function(msg) {
    console.log("called home from testfunc Ctrl" + msg);
  }

  $scope.sayHi = function(){
    console.log("testfunc say hi ~");
  }
  // Data=$scope.data ;//= Data;
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



