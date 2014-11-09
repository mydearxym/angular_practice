(function() {

    "use strict";

    angular.module('common.youtube', [])

        .service('Youtube', [function() {
            var regex = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;

            return {
                regex: function() {
                    return regex;
                }
            };
        }])

        .filter('youtubeIframe', ['$filter', 'Youtube', function($filter, Youtube){
            return function (value) {
                if (!value) {
                    return value;
                }

                var videoid = value.match(Youtube.regex());

                if (videoid === null) {
                    return "";
                }

                return "//www.youtube.com/embed/" + videoid[1];
            };
        }])

        .filter('youtubeImage', ['$filter', 'Youtube', function($filter, Youtube){
            return function (value, quality) {
                quality = quality || 'default';

                if (!value) {
                    return value;
                }

                var videoid = value.match(Youtube.regex());

                if (videoid === null) {
                    return "";
                }

                return "https://img.youtube.com/vi/" + videoid[1] + "/" + quality + ".jpg";
            };
        }]);

})();
