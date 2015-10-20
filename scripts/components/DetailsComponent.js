var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var moment = require('moment');
var BlogModel = require('../models/BlogModel');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			singleStory: null
		}
	},
	componentWillMount: function() {
		var query = new Parse.Query(BlogModel);
		query
		.get(this.props.post).then(
			(story) => {
				this.setState({ singleStory: story });
			},
			(err) => {
				console.log(err);
			}
		);
	},
	render: function() {

		var content = (
			<p>loading...</p>
		);

		if (this.state.singleStory) {
			var dateCreated = this.state.singleStory.get('createdAt');
			content =  (
				<div>
					<span className="job-row-time-stamp">
						{moment(dateCreated).fromNow()}
					</span>
					<h1>{this.state.singleStory.get('title')}</h1>
					<div>{this.state.singleStory.get('story')}</div>
					<div>{this.state.singleStory.get('tag')}</div>
				</div>
			);
		}

		return (
			<div className="details-box">
				{content}
			</div>
		)
	}
});
