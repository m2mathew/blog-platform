var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="about-box">
                <h1>A little about me</h1>
                <p>I enjoy learning new things and learning to code</p>
                <p>Follow my adventures at <a href="http://www.drumsensei.com/">Drumsensei.com</a></p>
            </div>
        );
    }
});
