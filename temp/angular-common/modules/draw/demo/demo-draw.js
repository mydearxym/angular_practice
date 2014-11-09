(function() {

    'use strict';

    angular.module("demo.draw", [
        'common.draw'
    ])

        .controller('DemoDrawCtrl', ['$scope', function($scope) {
            $scope.changeLog = function() {
                console.log('change');
            };

            $scope.strokeColor = "#a00000";
            $scope.strokeWidth = 5;

            $scope.codeExample = "<canvas\n" +
            "   width='500'\n" +
            "   height='300'\n" +
            "   stroke-width='strokeWidth'\n" +
            "   stroke-color='strokeColor'\n" +
            "   ng-change='changeLog()'\n" +
            "   ng-model='firstCanvas'\n" +
            "   draw></canvas>";
        }]);

})();