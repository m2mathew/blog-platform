var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var moment = require('moment');
var BlogModel = require('../models/BlogModel');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            stories: []
        };
    },
    componentWillMount: function() {
        var query = new Parse.Query(BlogModel);
        query
        .descending('createdAt')
        .find().then(
            (story) => {
                this.setState({ stories: story });
            },
            (err) => {
                console.log(err);
            }
        );
    },
    render: function() {
        function shorten(text, maxLength) {
            var ret = text;
            if (ret.length > maxLength) {
                ret = ret.substr(0, maxLength-3) + "...";
            }
            return ret;
        }

        var content = (<div> loading... </div>);

        if(this.state.stories) {
            content = this.state.stories.map(function(story) {
                var storyShort = shorten(story.get('story'), 140);
                var dateCreated = story.get('createdAt');
                return (
                    <div key={story.id} className="each-story">
                        <span className="job-row-time-stamp">
                            {moment(dateCreated).fromNow()}
                        </span>
                        <h2 className="story-title">
                            <a href="#details">{story.get('title')}</a>
                        </h2>
                        <div className="story-preview">{storyShort}</div>
                        <h4>{story.get('tag')}</h4>
                    </div>
                );
            });
        }
        return (
            <div className="story-container">
                <div className="title-row">
                    <h1>Top Stories</h1>
                </div>

                <div>
                    {content}
                </div>
            </div>
        );
    }
});
