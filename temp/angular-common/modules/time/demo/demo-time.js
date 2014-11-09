(function() {

    "use strict";

    angular.module('demo.time', [
        'common.time'
    ])

    .controller('DemoTimeCtrl', ['$scope', function($scope) {
        $scope.timeExample = moment().format("YYYY-MM-DD H:mm:ss");
        $scope.codeExample = "{{ timeExample | moment:'MMM D, YYYY - h:mma' }}\n" +
        "{{ timeExample | fromNow }}\n" +
        "{{ timeExample | smallFromNow }}";
    }]);

})();