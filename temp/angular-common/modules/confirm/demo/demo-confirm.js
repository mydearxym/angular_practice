(function() {

    "use strict";

    // angular.module('demo.confirm', [
    angular.module('angular-common', [
        'common.confirm'
    ])

    .controller('DemoConfirmCtrl', ['$scope', function($scope) {
        // $scope.deleteObject = function() {
        //     $scope.objectDeleted = "Twas deleted or whatever the function is you put here!";
        // };

        // $scope.objectDeleted = "jjjfie";

        $scope.codeExample = "<button\n" +
        "   class='btn btn-default'\n" +
        "   confirm='deleteObject(objectId)'\n" +
        "   confirm-title='Delete this object?'\n" +
        "   confirm-placement='left'>\n" +
        "   Click Me\n" +
        "</button>";
    }]
    );

})();