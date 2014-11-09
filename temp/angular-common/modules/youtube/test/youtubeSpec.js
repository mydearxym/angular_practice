describe('angular.common: youtube |', function() {
    var youtubeUrl = "https://www.youtube.com/watch?v=FGHqotI8iYc";

    beforeEach(module('common.youtube'));

    describe('youtubeIframe |', function() {
        it("should return a youtube iframe compatible url",  inject(function(youtubeIframeFilter) {
            var iframeUrl = "//www.youtube.com/embed/FGHqotI8iYc";
            expect(youtubeIframeFilter(youtubeUrl)).toBe(iframeUrl);
        }));
    });

    describe('youtubeImage |', function() {
        it("should return the url to the image for this youtube url",  inject(function(youtubeImageFilter) {
            var imageUrl = "https://img.youtube.com/vi/FGHqotI8iYc/default.jpg";
            expect(youtubeImageFilter(youtubeUrl)).toBe(imageUrl);

            imageUrl = "https://img.youtube.com/vi/FGHqotI8iYc/maxresdefault.jpg";
            expect(youtubeImageFilter(youtubeUrl, 'maxresdefault')).toBe(imageUrl);
        }));
    });
});