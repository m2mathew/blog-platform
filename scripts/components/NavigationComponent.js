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
            <a href="#" key="home"><div className={currentPage === '' ? 'active nav-link' : 'nav-link'}>Top Stories</div></a>,
        ];

        if(currentUser) {
            links.push(<a href="#write" key="add"><div className={currentPage === 'write' ? 'active nav-link' : 'nav-link'}>Write a Story</div></a>);
            links.push(<a href="#logout" key="logout" onClick={this.onLogout}><div className="nav-link">Logout</div></a>);
            links.push(<div key="username" className="displayedUser">{currentUser.getEmail()}</div>);
        }
        else {
            links.push(<a href="#login" key="login"><div className={currentPage === 'login' ? 'active nav-link' : 'nav-link'}>Sign in/Sign up</div></a>);
        }

        return (
            <div className="nav-wrapper">
                <h1><a href="#!" className="brand-logo">WE·Blog</a></h1>
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
