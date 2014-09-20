'use strict';

var myappApp = angular.module('myappApp', ['ngAnimate']);

myappApp.directive("bank",function(){
    return {
        restrict: "E",
        scope: {},
        template: '<div class="btn btn-primary">存钱（每次10块）</div>',
        require: "ngModel",
        // 这里的第四个参数是 ngModel 的 'controller'
        link: function(scope, element, attrs, ngModel){
            element.on("click", function(){
                ngModel.$setViewValue(ngModel.$viewValue + 10);
                scope.$apply();
            })
        }

    }

})


myappApp.controller("AppCtrl",function($q, $interval){

});









