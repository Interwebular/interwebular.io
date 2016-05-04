var React = require('react');
var Link = require('react-router').Link;

var style = {
    wrap: {
        position: 'absolute',
        top: 0, right: 0, bottom: 0, left: 0,
        background: '#000'
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color: '#fff'
    }
};

var FourOhFour = React.createClass({

    render: function() {
        return (
            <div style={style.wrap}>
                <div style={style.content}>
                    <h1 style={style.h1}>404, yo.</h1>
                    <p>
                        How did you end up here? Who knows.
                    </p>
                    <Link to='/'>Back To The Homepage</Link>
                </div>
            </div>
        );
    }

});

module.exports = FourOhFour;
