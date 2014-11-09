(function() {

    "use strict";

    angular.module('demo.strings', [
        'common.strings'
    ])

    .controller('DemoStringsCtrl', ['$scope', function($scope) {
        $scope.examples = {
            slugify: "my blog example here",
            stripHtml: "<p>test</p>"
        };

        $scope.codeExample = "{{ 'title case' | titleCase }}\n" +
        "{{ 'Lower Case' | lowerCase }}\n" +
        "{{ 'nl\\nbr' | nl2br }}\n" +
        "{{ 'I soooo loooonnnggggg' | truncate:15 }}\n" +
        "{{ 'http://www.google.com' | encodeURIComponent }}\n" +
        "{{ htmlString | stripHtml }}\n" +
        "<input type='text' ng-model='examples.slugify' slugify>";
    }]);

})();