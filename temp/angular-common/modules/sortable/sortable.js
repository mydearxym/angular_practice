(function() {

    'use strict';

    angular.module('common.sortable', [])

        .directive('sortable', ['$timeout', function($timeout) {
            return {
                scope: {
                    ngModel: '=',
                    ngChange: '&'
                },
                link: function(scope, element, attrs) {
                    var toUpdate;
                    var startIndex = -1;
                    element.sortable({
                        start: function (event, ui) {
                            // on start we define where the item is dragged from
                            startIndex = $(ui.item).index();
                        },
                        stop: function (event, ui) {
                            // on stop we determine the new index of the
                            // item and store it there
                            var newIndex = $(ui.item).index();
                            var toMove = toUpdate[startIndex];
                            toUpdate.splice(startIndex, 1);
                            toUpdate.splice(newIndex, 0, toMove);

                            // we move items in the array, if we want
                            // to trigger an update in angular use $apply()
                            // since we're outside angulars lifecycle
                            $timeout(function() {
                                scope.ngChange();
                            });
                        }
                    });

                    scope.$watch('ngModel', function() {
                        $timeout(function() {
                            toUpdate = scope.ngModel;
                        });
                    });
                }
            }
        }]);

})();
