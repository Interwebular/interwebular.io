var React = require('react');
var ProjectsList = require('../Projects/ProjectsList');
var scroll  = require('react-scroll').animateScroll;
var Link = require('react-router').Link;

var Projects = React.createClass({

    componentWillMount: function() {
        scroll.scrollToTop({
            duration: 0
        });
    },

    render: function() {
        return (
            <div>
                <section className="section section--padded">
                    <div className="section__content">
                        <div className="section__content__inner">
                            Projects
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
        );
    }
});

module.exports = Projects;
