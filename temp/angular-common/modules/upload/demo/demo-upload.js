(function() {

    "use strict";

    angular.module('demo.upload', [
        'common.upload'
    ])

    .controller('DemoUploadCtrl', ['$scope', function($scope) {
        $scope.fileUploaded = function(data) {
            console.log(data);
        };

        $scope.codeExample = "<button\n" +
        "   class='btn btn-default'\n" +
        "   ng-model='newFile.filename'\n" +
        "   ng-change='optionFileUploaded(data)'\n" +
        "   upload='\"/your/upload/location\"'>\n" +
        "   Choose Image\n" +
        "</button>";
    }]);

})();