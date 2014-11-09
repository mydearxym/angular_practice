(function() {

    "use strict";

    angular.module('demo.youtube', [
        'common.youtube'
    ])

    .controller('DemoYoutubeCtrl', ['$scope', function($scope) {
        $scope.youtubeUrl = 'http://www.youtube.com/watch?v=WrO9PTpuSSs';
        $scope.codeExample1 = "<img ng-src='{{ youtubeUrl | youtubeImage }}'>";
        $scope.codeExample2 = "<iframe frameborder='0' ng-src='{{ youtubeUrl | youtubeIframe }}'></iframe>";
    }]);

})();