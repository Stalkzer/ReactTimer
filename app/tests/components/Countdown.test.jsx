var React     = require("react"),
    ReactDOM  = require("react-dom"),
    expect    = require("expect"),
    $         = require("jQuery"),
    TestUtils = require("react-addons-test-utils");

var Countdown = require("Countdown");


describe("Countdown", ()=> {
    it("should exist", () => {
        expect(Countdown).toExist();
    });

    describe("handleSetCountdown", () => {
        // Use done parameter if using asynchronus function (like timeout)
        it("should set state to started and countdown", (done) => {
            // Renders the component 
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            // access Handlesetcountdown method
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            setTimeout(() => {
             expect(countdown.state.count).toBe(9);
             done();
            },1001);
        });
        
        it("should not have a negative count value", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);

            countdown.handleSetCountdown(1);
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
                },3001);
        });

        it("should pause countdown on paused status", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange("paused");

            setTimeout(() => {
               expect(countdown.state.count).toBe(3); 
               expect(countdown.state.countdownStatus).toBe("paused");
               done(); 
            },1001)
        });
        it("should reset countdown on stopped status", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange("stopped");

            setTimeout(() => {
               expect(countdown.state.count).toBe(0); 
               expect(countdown.state.countdownStatus).toBe("stopped");
               done(); 
            },1001)
        });
    });
});
