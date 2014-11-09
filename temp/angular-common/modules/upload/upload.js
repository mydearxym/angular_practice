(function() {
    
    "use strict";
    
    angular.module('common.upload', [])
    
    .directive('upload', ['$timeout', function($timeout) {
        return {
            restrict: 'EA',
            replace: false,
            scope: {
                upload: '=',
                ngModel: '=',
                ngChange: '&',
                ngError: '&'
            },
            transclude: true,
            template: "<form style='margin: 0;' method='POST' enctype='multipart/form-data'>" +
                "<input type='file' name='{{ uploadName }}' style='display: none;'/>" +
                "<span style='float: left; position: relative;' class='fake-uploader' readonly='readonly' ng-model='avatar'>" +            
                    "<span ng-transclude></span>" +
                    "<strong ng-show='progress > 0' ng-class='{ \"text-success\": progress == 100, \"text-info\": progress < 100 }' style='width: {{ progress }}%'>{{ progress }}%</strong>" +
                "</span>" +
            "</form>",
            link: function(scope, element, attrs) {
                scope.uploadName = attrs.uploadName || "file";

                scope.progress = 0;
                scope.avatar = '';

                element.find('.fake-uploader').click(function() {
                    element.find('input[type="file"]').click();
                });

                element.find('.progress').css({
                    width: element.find('.fake-uploader').width
                });
                
                element.find('input').change(function() {
                    var $this = $(this);
                    var $form = $this.parents('form');
                
                    if ($this.val() === '') {
                        return false;
                    }

                    $form.attr('action', scope.upload);

                    scope.$apply(function() {
                        scope.progress = 0;
                    });

                    $form.ajaxSubmit({
                        type: 'POST',
                        dataType: 'json',
                        uploadProgress: function(event, position, total, percentComplete) {
                            scope.$apply(function() {
                                // upload the progress bar during the upload
                                scope.progress = percentComplete;
                            });
                        },
                        error: function(event, statusText, responseText, form) {
                            // remove the action attribute from the form
                            $form.removeAttr('action');

                            $timeout(function () {
                                scope.ngError({
                                    event: event,
                                    responseText: responseText,
                                    statusText: statusText,
                                    form: form,
                                });
                            });
                        },
                        // responseText, statusText, xhr, form
                        success: function(responseText) {
                            // remove the action attribute from the form
                            $form.removeAttr('action');
                            var data = angular.fromJson(responseText);

                            if (data.filename !== undefined) {
                                scope.ngModel = data.filename;
                            }

                            $timeout(function () {
                                scope.ngChange({ responseText: responseText });
                                scope.progress = 0;
                            });
                        },
                    });
                });
            }
        };
    }]);

})();