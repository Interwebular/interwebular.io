var React = require('react');
var Link = require('react-router').Link;
var projects = require('../../Data/projects');
var ScrollLink = require('react-scroll').Link;
var scroll  = require('react-scroll').animateScroll;

var Landing = React.createClass({

    componentWillMount: function() {
        scroll.scrollToTop({
            duration: 0
        });
    },

    _getProjects: function() {
        return projects;
    },

    render: function() {
        return (
            <div>
                <header className="header header--fullscreen" style={{backgroundImage: 'url(https://s3.amazonaws.com/interwebular-cdn/Branding/bg.jpg)'}}>
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
                    <div className="portfolio" id="projects">
                        {this._getProjects().map(function(item, index){
                            return (
                                <div key={index} className="portfolio__item" style={{ backgroundImage: item.background }}>
                                    <span className="portfolio__project-type">{ item.type }</span>
                                    <div className="portfolio__project-content">
                                        <img src={item.img} />
                                    </div>
                                    <div className="portfolio__link" style={{ display: item.active ? 'block' : 'none' }}>
                                        <Link to={ '/project/' + item.slug } className="cta cta--small">
                                            View {item.client}
                                        </Link>
                                    </div>
                                </div>
                            )
                        }.bind(this))}
                    </div>
                </section>

                <section className="section section--padded">
                    <div className="section__content">
                        <div className="section__content__inner">
                            <Link to="/contact" className="cta cta--inverted">
                                Start A Project
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports = Landing;
