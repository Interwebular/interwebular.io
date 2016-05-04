var React = require('react');
var projects = require('../../Data/projects');
var Link = require('react-router').Link;

var ProjectsList = React.createClass({

    _getProjects: function() {
        return projects;
    },

    render: function() {
        return (
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
        );
    }

});

module.exports = ProjectsList;
