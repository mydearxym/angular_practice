(function() {

    "use strict";

    angular.module('demo.modal', [
        'common.modal'
    ])

    .controller('DemoModalCtrl', ['$scope', function($scope) {
        $scope.codeExample = "<button\n" +
        "   modal='modules/modal/demo/demo.modal.html'\n" +
        "   class='btn btn-default'>\n" +
        "   Open Modal\n" +
        "</button>";
    }]);

})();