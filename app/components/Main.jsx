var React = require("react"),
    Navigation   = require("Navigation");

var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Navigation/>
                    <h3> Main.jsx Rendered</h3>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;