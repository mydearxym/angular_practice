(function() {
    
    "use strict";
    
    angular.module('common.drag', [])
    
    // Would like to remove dependency on jqueryui
    // http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    .directive('drag', ['$timeout', function ($timeout) {
        return {
            scope: {
                drag: '=',
            },
            link: function (scope, element) {
                $(element).draggable({
                    stop: function(event, ui) {
                        $timeout(function() {
                            scope.drag.top = ui.position.top;
                            scope.drag.left = ui.position.left;
                        });
                    }
                });
            }
        };
    }]);

})();