var React     = require("react"),
    ReactDOM  = require("react-dom"),
    expect    = require("expect"),
    $         = require("jQuery"),
    TestUtils = require("react-addons-test-utils"),
    Clock     = require("Clock");

describe("Clock", () => {
    it("should exist", () => {
        expect(Clock).toExist();
    });
    describe("render", () => {
        it("should render clock to output", () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find(".clock-text").text();

            expect(actualText).toBe("01:02");
        });
    });

    describe("formatSeconds", () => {
        it("should format seconds", () => {
            // Use TestUtils to get the component
            var clock    = TestUtils.renderIntoDocument(<Clock/>);
            var seconds  = 615;
            var expected = "10:15";
            var actual   = clock.formatSeconds(seconds);
            
            expect(actual).toBe(expected);
        });
        it("should format seconds when min/sec are less than 10", () => {
            // Use TestUtils to get the component
            var clock    = TestUtils.renderIntoDocument(<Clock/>);
            var seconds  = 61;
            var expected = "01:01";
            var actual   = clock.formatSeconds(seconds);
            
            expect(actual).toBe(expected);
        });
    });
});