var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="footer">
                <a href="#about" className="footer-link">About</a>
            </div>
        );
    }
});
