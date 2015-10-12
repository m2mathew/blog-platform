var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="footer-box">
                <a href="#about" className="footer-link">About</a>
                <p>A product of Mike Mathew for The Iron Yard in 2015</p>
            </div>
        );
    }
});
