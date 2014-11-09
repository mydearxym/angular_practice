(function() {

    'use strict';

    angular.module('demo.sortable', [
        'common.sortable'
    ])

        .controller('DemoSortableCtrl', ['$scope', function($scope) {
            $scope.users = [
                {
                    name: 'Michael'
                },
                {
                    name: 'John'
                },
                {
                    name: 'Stephen'
                },
                {
                    name: 'Robbie'
                }
            ];

            $scope.orderChange = function() {
                console.log('Order change!');
            };

            $scope.codeExample = "<ul\n" +
            "   sortable\n" +
            "   ng-model='users'\n" +
            "   ng-change='orderChange()'>\n" +
            "   <li ng-repeat='user in users'>\n" +
            "       {{ user.name }}\n" +
            "   </li>\n" +
            "</ul>";
        }]);

})();