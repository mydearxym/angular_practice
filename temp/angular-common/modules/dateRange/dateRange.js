(function() {

    "use strict";

    angular.module('common.dateRange', [])

    .directive('dateRange', ['$window', '$timeout', function ($window, $timeout) {
        return {
            restrict: 'A',
            scope: {
                dateRange: '=',
                ngUpdate: '&'
            },
            template: "<i class='icon-calendar'></i> <span></span> <b class='caret'></b>",
            link: function (scope, element) {
                scope.dateRangeOptions = {
                    ranges: {
                        'Today': [new Date(), new Date()],
                        'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                        'Last 7 Days': [moment().subtract('days', 6), new Date()],
                        'Last 30 Days': [moment().subtract('days', 29), new Date()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                    },
                    format: 'YYYY-MM-DD',
                    displayFormat: 'M/DD/YYYY',
                    separator: ' to ',
                    startDate: moment().subtract('days', 7).format("M/DD/YYYY"),
                    endDate: moment().format("M/DD/YYYY"),
                    locale: {
                        applyLabel: 'Submit',
                        fromLabel: 'From',
                        toLabel: 'To',
                        customRangeLabel: 'Custom Range',
                        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        firstDay: 1
                    },
                    showWeekNumbers: false,
                    buttonClasses: ['btn-danger'],
                    dateLimit: false
                };

                scope.dateRange = angular.extend(scope.dateRangeOptions, scope.dateRange);

                var displayStart = $window.moment(scope.dateRange.startDate).format(scope.dateRangeOptions.displayFormat);
                var displayEnd = $window.moment(scope.dateRange.endDate).format(scope.dateRangeOptions.displayFormat);

                $(element)
                    .find('span')
                    .html(displayStart + ' - ' + displayEnd);

                element.daterangepicker(scope.dateRange, function(start, end){
                    displayStart = start.format(scope.dateRangeOptions.displayFormat);
                    displayEnd = end.format(scope.dateRangeOptions.displayFormat);

                    $(element)
                        .find('span')
                        .html(displayStart + ' - ' + displayEnd);

                    start = start.format(scope.dateRangeOptions.format);
                    end = end.format(scope.dateRangeOptions.format);

                    $timeout(function() {
                        scope.ngUpdate({ start: start, end: end });
                    });
                });
            }
        };
    }]);

})();