'use strict';

var myappApp = angular.module('myappApp', ['ngAnimate']);


myappApp.controller("AppCtrl",function($q, $interval){

//  注意这里的timer是一个 promise object , 所以需要 $q
    // 100ms 运行 10 次
    var timer = $interval(function () {
    }, 100, 10);

    function success() {
        console.log("done");
    }

    function error() {
        console.log("cancelled or error");
    }

    function notify() {
        console.log("updating");
    }

    timer.then(success, error, notify)

    this.cancel = function () {
        $interval.cancel(timer);
    }
});









