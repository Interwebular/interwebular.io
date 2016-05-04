var React = require('react');
var Link = require('react-router').Link;

require('../Styles/Normalize.scss');
require('../Styles/Nav.scss');
require('../Styles/Headers.scss');
require('../Styles/Buttons.scss');
require('../Styles/Sections.scss');
require('../Styles/Portfolio.scss');
require('../Styles/Transition.scss');
require('../Styles/Footer.scss');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Template = React.createClass({
    render: function() {
        return (
            <div>
                <div className="nav-background"></div>
                <nav className="nav">
                    <div className="nav__branding">
                        <Link to="/">
                            <img src="https://d2ool86j2b0dy2.cloudfront.net/Branding/logo_square%40500.png" className="nav__logo" alt="Interwebular" />
                        </Link>
                    </div>

                    <div className="nav__links">
                        <Link to="/contact" className="nav__link">
                            Start A Project
                        </Link>
                    </div>
                </nav>

                {/*this.props.children*/}

                <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>

                <footer className="footer">
                    &copy; Interwebular 2016
                    <a href="https://www.instagram.com/interwebular.io/" target="_blank">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/interwebular" target="_blank">
                        <i className="fa fa-facebook"></i>
                    </a>
                </footer>
            </div>
        )
    }
});



module.exports = Template;
