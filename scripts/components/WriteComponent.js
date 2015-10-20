var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var BlogModel = require('../models/BlogModel');

module.exports = React.createClass({
    getInitialState: function() {
        return { error: null };
    },
    render: function() {
        var errorElement = null;
        if(this.state.error) {
            errorElement = (
                <p className="error-box">{this.state.error}</p>
            );
        }
        return (
            <div className="story-container">
                <form className="blog-form" onSubmit={this.onAddBlog}>
                    <h1>Tell your story</h1>
                    {errorElement}
                    <div className="input-field">
                        <input type="text" ref="title" className="title-input" />
                        <label>Story title</label>
                    </div>

                    <div className="input-field">
                        <textarea className="blog-textarea" ref="story"></textarea>
                        <label>Write your story</label>
                    </div>

                    <div className="input-tag">
                        <input type="text" className="validate" ref="tag" />
                        <label>Tag</label>
                    </div>

                    <div className="button-container">
                        <button className="add-blog-button">Submit story</button>
                    </div>
                </form>
            </div>
        );
    },
    onAddBlog: function(e) {
        e.preventDefault();

        var newStory = new BlogModel({
            title: this.refs.title.value,
            story: this.refs.story.value,
            tag: this.refs.tag.value
        });
        newStory.save();
        this.props.router.navigate('top', {trigger: true});
    }
});
