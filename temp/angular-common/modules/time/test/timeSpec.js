describe('angular.common: time |', function() {
    beforeEach(module('common.time'));

    describe('moment |', function() {
        it("should a base time with a format",  inject(function(momentFilter) {
            var time = '2013-12-31 21:30:00';

            expect(momentFilter(time, "YYYY")).toBe("2013");
            expect(momentFilter(time, "MMM")).toBe("Dec");
            expect(momentFilter(time, "D")).toBe("31");
            expect(momentFilter(time, "MMM DD, YYYY - h:mma")).toBe("Dec 31, 2013 - 9:30pm");
        }));
    });

    describe('fromNow |', function() {
        it("should display the difference between now and a base date",  inject(function(fromNowFilter) {
            var startDateTime = '2013-12-31 21:30:00';
            var endDateTime = '2014-01-04 21:30:00';

            var from = moment(startDateTime).from(endDateTime);
            expect(from).toBe("4 days ago");
        }));
    });

    describe('smallFromNow |', function() {
        it("should display a shortened version of fromNow",  inject(function(smallFromNowFilter) {
            var startDateTime = moment('2013-03-05 21:30:00').valueOf();
            var endDateTime = moment('2014-01-04 10:30:00').valueOf();
            expect(smallFromNowFilter(startDateTime, endDateTime)).toBe('10mon');

            startDateTime = moment('2013-12-25 21:30:00').valueOf();
            endDateTime = moment('2013-12-26 21:30:00').valueOf();
            expect(smallFromNowFilter(startDateTime, endDateTime)).toBe('a day');

            startDateTime = moment('2013-12-25 21:30:00').valueOf();
            endDateTime = moment('2013-12-25 22:30:00').valueOf();
            expect(smallFromNowFilter(startDateTime, endDateTime)).toBe('1h');
        }));
    });
});