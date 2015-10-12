var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

window.$ = require('jquery');
window.jQuery = $;

module.exports = React.createClass({
    componentWillMount: function() {
        this.props.router.on('route', () => {
            this.forceUpdate();
        });
    },
    render: function() {
        var currentUser = Parse.User.current();
        var currentPage = Backbone.history.getFragment();

        var links = [
            <span key="home" className={currentPage === '' ? 'active nav-link' : 'nav-link'}><a href="#">Top Stories</a></span>,
            <span key="add" className={currentPage === 'write' ? 'active nav-link' : 'nav-link'}><a href="#write">Write a Story</a></span>
        ];

        if(currentUser) {
            links.push(<span className="nav-link" key="logout"><a href="#logout" onClick={this.onLogout}>Logout</a></span>)
            links.push(<span key="username" className="displayedUser">{currentUser.getEmail()}</span>);
        }
        else {
            links.push(<span key="login" className={currentPage === 'login' ? 'active nav-link' : 'nav-link'}><a href="#login">Sign in/Sign up</a></span>);
        }

        return (
            <div className="nav-wrapper">
                <h1><a href="#!" className="brand-logo">WE·blog</a></h1>
                <div className="nav-link-box">
                    {links}
                </div>
            </div>
        );
    },
    onLogout: function(e) {
        e.preventDefault();
        Parse.User.logOut();
        this.props.router.navigate('', {trigger: true});
    }
});
