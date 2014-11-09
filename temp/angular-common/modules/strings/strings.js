(function() {

    "use strict";

    angular.module('common.strings', [])



    //
    // NOTE Title Case
    // --------------------------------------------------

    .filter('titleCase', function() {
        var titleCaseFilter = function(input) {
            if (!input) {
                return;
            }

            var words = input.split(' ');
            for (var i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }

            return words.join(' ');
        };

        return titleCaseFilter;
    })



    //
    // NOTE Lower Case
    // --------------------------------------------------

    .filter('lowerCase', function() {
        var titleCaseFilter = function(input) {
            var words = input.split(' ');
            for (var i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1);
            }

            return words.join(' ');
        };
        return titleCaseFilter;
    })



    //
    // NOTE nl2br
    // --------------------------------------------------

    .filter('nl2br', [function(){
        return function (value) {
            if (!value) {
                return value;
            }

            value = value + '';

            return value.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
        };
    }])



    //
    // NOTE Truncate
    // --------------------------------------------------

    /**
     * Truncate Filter
     * @Param text
     * @Param length, default is 10
     * @Param end, default is "..."
     * @return string
     *
     * Usage
     * var myText = "This is an example.";
     *
     * {{myText|Truncate}}
     * {{myText|Truncate:5}}
     * {{myText|Truncate:25:" ->"}}
     *
     * Output
     * "This is..."
     * "Th..."
     * "This is an e ->"
     */
    .filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length)) {
                length = 10;
            }

            if (end === undefined) {
                end = "...";
            }

            if (!text) {
                return text;
            }

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            } else {
                return String(text).substring(0, length-end.length) + end;
            }
        };
    })



    //
    // NOTE encodeURIComponent
    // --------------------------------------------------

    .filter('encodeURIComponent', function() {
        return window.encodeURIComponent;
    })



    //
    // NOTE 〉Slugify
    // --------------------------------------------------

    .directive('slugify', ['$parse', function($parse) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.ngModel, function(value) {
                    if (!value) {
                        return;
                    }

                    $parse(attrs.ngModel).assign(scope, value.toLowerCase().replace(/[\W\s]/g, '-'));
                });
            }
        };
    }])


    //
    // NOTE Strip Html Tags
    // --------------------------------------------------

    .filter('stripHtml', [function () {
        return function(text) {
            return String(text).replace(/<(?:.|\n)*?>/gm, '');
        }
    }]);

})();