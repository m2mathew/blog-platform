'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
Parse.initialize("UyusKJsGQEhmHfoFmiDaHSlGIQItU3WbY57qHmD3", "l4cHOM8J2u7h2x5o46Rl8JhRh5PSAzwSFJ2rBvRw");

window.$ = require('jquery');
window.jQuery = $;

var HomeComponent = require('./components/HomeComponent');
var NavigationComponent = require('./components/NavigationComponent');
var LoginComponent = require('./components/LoginComponent');
var WriteComponent = require('./components/WriteComponent');
var FooterComponent = require('./components/FooterComponent');
var AboutComponent = require('./components/AboutComponent');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'top': 'home',
        'write': 'writeStory',
        'login': 'login',
        'about': 'about'
    },
    home: function() {
        ReactDOM.render(
            <HomeComponent />,
            app
        );
    },
    write: function() {
        if(!Parse.User.current()) {
            ReactDOM.render(
                <LoginComponent />,
                app
            );
        }
        else {
            ReactDOM.render(
                <WriteComponent />,
                app
            );
        }
    },
    login: function() {
        ReactDOM.render(
            <LoginComponent />,
            app
        );
    },
    about: function() {
        ReactDOM.render(
            <AboutComponent />,
            app
        );
    }
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
    <NavigationComponent router={r} />,
    document.getElementById('nav')
    );

ReactDOM.render(
    <FooterComponent router={r} />,
    document.getElementById('foot')
    );
