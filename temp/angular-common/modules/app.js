(function() {

    "use strict";

    angular.module('angular-common', [
        'demo.confirm',
        'demo.daterange',
        'demo.drag',
        'demo.dragdrop',
        'demo.draw',
        'demo.modal',
        'demo.sortable',
        'demo.strings',
        'demo.time',
        'demo.upload',
        'demo.youtube'
    ])

    .config(['$sceProvider', '$compileProvider', function($sceProvider, $compileProvider) {
        $sceProvider.enabled(false);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|skype):/) ;
    }])

    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.modules = [
            'confirm',
            'dateRange',
            'drag',
            'dragdrop',
            'draw',
            'modal',
            'sortable',
            'strings',
            'time',
            'upload',
            'youtube'
        ];
    }])

    .directive('scrollOnClick', [function() {
        return {
            restrict: 'A',
            link: function(scope, $elm, attrs) {
                var idToScroll = attrs.href;
                $elm.on('click', function() {
                    var $target;
                    if (idToScroll) {
                        $target = $(idToScroll);
                    } else {
                        $target = $elm;
                    }

                    $("body").animate({
                        scrollTop: $target.offset().top
                    }, "slow");
                });
            }
        };
    }]);

})();
