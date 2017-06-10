var React = require("react"),
    {IndexLink,Link} = require("react-router");



var Navigation = (props) => {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">
                                React Time App
                            </li>
                           <li>
                             <IndexLink to="/" activeClassName="active-link"> Timer </IndexLink>
                           </li>
                           <li>
                             <Link to="/countdown" activeClassName="active-link"> Countdown </Link>
                           </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li className="menu-text">
                                Created By <a href="#" target="_blank">Mohamed Tm</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };

module.exports = Navigation;