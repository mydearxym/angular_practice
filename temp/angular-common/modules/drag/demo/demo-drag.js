(function() {
    
    "use strict";
    
    angular.module('demo.drag', [
        'common.drag'
    ])

    .controller('DemoDragCtrl', ['$scope', function($scope) {
        $scope.object = {
            top: 0,
            left: 0
        };
        
        $scope.codeExample = "<div drag='object'></div>";
    }]);
    
})();