var React = require('react');
var Backbone = require('backbone');

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
            <li key="home" className={currentPage === '' ? 'active' : ''}><a href="#">Top Stories</a></li>,
        ];

        if(currentUser) {
            links.push(<li key="add" className={currentPage === 'add' ? 'active' : ''}><a href="#add">Write a Story</a></li>)
            links.push(<li className="nav-link" key="logout"><a href="#logout" onClick={this.onLogout}>Logout</a></li>)
            links.push(<li key="username" className="displayedUser">{currentUser.getEmail()}</li>);
        }
        else {
            links.push(<li key="login" className={currentPage === 'login' ? 'active' : ''}><a href="#login">Sign in/Sign up</a></li>);
        }

        return (
            <header className="navigation" role="banner">
              <div className="navigation-wrapper">
                <a href="javascript:void(0)" className="logo">
                  <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png" alt="Logo Image"/>
                </a>
                <a href="jcdavascript:void(0)" className="navigation-menu-button" id="js-mobile-menu">MENU</a>
                <nav role="navigation">
                  <ul id="js-navigation-menu" className="navigation-menu show">
                    {links}
                  </ul>
                </nav>
                <div className="navigation-tools">
                    <div className="search-bar">
                    <form role="search">
                      <input type="search" placeholder="Enter Search" />
                      <button type="submit">
                        <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png" alt="Search Icon"/>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </header>
        );
    },
    onLogout: function(e) {
        e.preventDefault();
        Parse.User.logOut();
        this.props.router.navigate('', {trigger: true});
    }
});
