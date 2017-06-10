var React     = require("react"),
    ReactDOM  = require("react-dom"),
    expect    = require("expect"),
    $         = require("jQuery"),
    TestUtils = require("react-addons-test-utils");

var Controls  = require("Controls");

describe("Controls", () => {
    it("should exist", () => {
        expect(Controls).toExist();
    });

    describe("render", () => {
        it("should render pause when started", () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={"started"}/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            // :contains is a special jQuery filter that checks the element content
            var $pauseButton = $el.find("button:contains(Pause)");
            
            // .length on a jQuery selector returns the number of elements Found 
            expect($pauseButton.length).toBe(1);
       });

       it("should render start when paused", () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={"paused"}/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find("button:contains(Start)");

            expect($startButton.length).toBe(1);
        });
    });
});