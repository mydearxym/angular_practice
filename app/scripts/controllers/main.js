'use strict';

var myappApp = angular.module('myappApp', ['ngAnimate']);

myappApp.factory('shareData', function($rootScope){
    var data = ['one', 'two', 'three'];

//    return {data: data};

    return {
        all: function() {
            return data;
        },

        add: function(v){
            data.push(v);
        },

        set: function() {
            data = [1,2,3]
            console.log("$broadcast.....");
            $rootScope.$broadcast('data:update',data);
        }
    }

})


myappApp.controller("FirstCtrl", function($scope, shareData){
//    var appctrl = this;

    $scope.shareData = shareData.all();
    $scope.showData = shareData;

    $scope.addValue = function(val) {
        shareData.add(val);
    };

    $scope.setNewValue = function() {
//        alert("do nothing, it is testing");
        shareData.set()
        $scope.shareData = shareData.all();
//        $scope.$apply()
    }

});

myappApp.controller("SecondCtrl", function($scope, shareData){
//    var appctrl2 = this;

    $scope.shareData = shareData.all();
    $scope.showData = shareData;

    $scope.$on('data:update', function(event,data) {
        console.log("event:", event);
        $scope.shareData = data;
    });

//    $scope.$watch('shareData.data', function(newV,oldV,scope){
//        console.log("all watched: ", newV, oldV);
//    })
//    $scope.$watch('shareData.data', function(newV,oldV,scope){
//        console.log("all watched: ", newV, oldV);
//    })


});







