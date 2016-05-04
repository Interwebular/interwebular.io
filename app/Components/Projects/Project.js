var React = require('react');
var projects = require('../../Data/projects');
var _ = require('lodash');
var scroll  = require('react-scroll').animateScroll;
require('../../Styles/Project.scss');
var Link = require('react-router').Link;

var Project = React.createClass({

    getInitialState: function() {
        return {
            project: {},
            nextProject: {},
            prevProject: {}
        };
    },

    componentWillMount: function() {
        scroll.scrollToTop({ duration: 0 });

        var slug = this.props.params.slug;

        var project = _.find(projects, ['slug', slug]);

        var projectIndex = _.findIndex(projects, ['slug', slug]);

        var lastIndex = _.findLastIndex(projects);

        var prevIndex, nextIndex;

        if(projectIndex === 0) {
            prevIndex = lastIndex;
        }
        else {
            prevIndex = projectIndex - 1;
        }

        if(projectIndex === lastIndex) {
            nextIndex = 0;
        }
        else {
            nextIndex = projectIndex + 1;
        }

        var nextProject = projects.slice(nextIndex, nextIndex+1);
        var prevProject = projects.slice(prevIndex, prevIndex+1);

        this.setState({
            project: project,
            nextProject: nextProject[0],
            prevProject: prevProject[0]
        });
    },

    render: function() {
        return (
            <div className="project">
                <div className="project__header" style={{ backgroundImage: this.state.project.background }}>
                    <div className="project__header__content">
                        <img src={this.state.project.img} className="project__header__logo" style={{ maxWidth: this.state.project.imgWidth }}/>

                        <h1>
                            { this.state.project.client }
                        </h1>

                        <div className="project__header__features">
                            {this.state.project.features.map(function(item, index){
                                return (
                                    <span key={index}>{item}</span>
                                )
                            }.bind(this))}
                        </div>

                        <div className="project__header__link">
                            <a href={this.state.project.link} className="cta cta--small cta--small-forced" target="_blank">View Live</a>
                        </div>
                    </div>

                    <div className="project__other_project_fade"></div>

                    <Link className="project__other_project project__other_project--next" to={ '/project/' + this.state.nextProject.slug }>
                        <small>Next Project</small>
                        {this.state.nextProject.client}
                    </Link>

                    <Link className="project__other_project project__other_project--prev" to={ '/project/' + this.state.prevProject.slug }>
                        <small>Previous Project</small>
                        {this.state.prevProject.client}
                    </Link>

                    { /*
                    <div className="project__header__more">
                        Scroll To Read More <i className="fa fa-arrow-circle-down" style={{ marginLeft: '10px' }} aria-hidden="true"></i>
                    </div>
                    */ }

                </div>
            </div>
        );
    }
});

module.exports = Project;
