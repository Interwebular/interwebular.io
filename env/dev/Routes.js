var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Template = require('../Components/Template');
var Landing = require('../Components/Landing/Landing');
var FourOhFour = require('../Components/Errors/FourOhFour');
var Project = require('../Components/Projects/Project');
var Projects = require('../Components/Projects/Projects');
var Contact = require('../Components/Contact/Contact');

var Routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Template}>
            <IndexRoute component={Landing} />
            <Route path="project/:slug" component={Project} />
            <Route path="projects" component={Projects} />
            <Route path="contact" component={Contact} />
            <Route path="*" component={FourOhFour} />
        </Route>
    </Router>
);

module.exports = Routes;
