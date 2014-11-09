describe('angular.common: strings |', function() {
    beforeEach(module('common.strings'));

    describe('stripHtml | ', function() {
        it("should remove all html",  inject(function(stripHtmlFilter) {
            var strings = [
                '<p>test</p>',
                '<div><p>test</p></div>',
                '<div><p></div>test</p>',
                'test'
            ];

            _.each(strings, function(string, key) {
                expect(stripHtmlFilter(string)).toBe('test');
            });
        }));
    });
});