(function() {

    "use strict";

    angular.module('demo.daterange', [
        'common.dateRange'
    ])

    .controller('DemoDateRangeCtrl', ['$scope', function($scope) {
        $scope.startDate = moment().subtract('days', 50).format("YYYY-MM-DD");
        $scope.endDate = moment().format("YYYY-MM-DD");

        $scope.dateRangeOptions = {
            startDate: $scope.startDate,
            endDate: $scope.endDate
        };

        $scope.updateDates = function(start, end) {
            $scope.startDate = start;
            $scope.endDate = end;
        };

        $scope.codeExample = "<button\n" +
        "   date-range='dateRangeOptions'\n" +
        "   ng-update='updateDates(start, end)'></button>";
    }]);

})();