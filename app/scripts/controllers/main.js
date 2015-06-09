'use strict';

//var myappApp = angular.module('myappApp', ['ngAnimate']);


var myapp = angular.module('myappApp', [
  'ngAnimate',
  'ui.bootstrap',
  'angular-velocity'
  // 'formFor.materialTemplates'
  // 'formFor.bootstrapTemplates'
  ]);



myapp.controller("MainController", function($q, $log, $scope, $timeout){
  var self = $scope;

  self.items1 = ["djfei", "djfei2", "djfei3", "djfei4", "djfei5", "djfei6", "djfei7", "djfei8", "djfei9"]
  self.items2 = ["123", "456", "789", "131123", "45896", "782329", "4532323", "23958", "18289494"]

  self.items = self.items1

  self.change = function() {
  	
  	if( self.items == self.items1) {
  		self.items = []
  		self.items = self.items2
  	} else {
  		self.items = []
  		self.items = self.items1
  	}

  }

});

