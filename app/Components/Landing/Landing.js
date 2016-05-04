var React = require('react');
var Link = require('react-router').Link;
var ScrollLink = require('react-scroll').Link;
var scroll  = require('react-scroll').animateScroll;
var ProjectsList = require('../Projects/ProjectsList');


var Landing = React.createClass({

    componentWillMount: function() {
        scroll.scrollToTop({
            duration: 0
        });
    },

    render: function() {
        return (
            <div>
                <header className="header header--fullscreen" style={{backgroundImage: 'url(https://d2ool86j2b0dy2.cloudfront.net/Branding/bg.jpg)'}}>
                    <div className="header__content">
                        <h1>Interwebular</h1>
                        <h2>Crafting Kick-Ass Websites Since 2013</h2>
                    </div>
                    <div className="header__spacer"></div>
                    <div className="header__cta">
                        <ScrollLink className="cta" to="projects" spy={true} smooth={true} offset={-40} duration={1000}>
                            See For Yourself <i className="fa fa-arrow-circle-down" style={{ marginLeft: '10px' }} aria-hidden="true"></i>
                        </ScrollLink>
                    </div>
                </header>

                <section className="section section--padded">
                    <div className="section__content">
                        <div className="section__content__inner">
                            We are a tech savvy group of digital artisans based out of Vancouver, BC.
                        </div>
                    </div>
                </section>

                <section className="section">
                    <ProjectsList />
                </section>

                <section className="section section--padded">
                    <div className="section__content">
                        <div className="section__content__inner">
                            <Link to="/contact" className="cta cta--inverted cta--small">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports = Landing;
