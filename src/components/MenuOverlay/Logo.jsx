/** @jsx React.DOM */
'use strict';

let React = require('react');
let Router = require('react-router');

require('./Logo.scss');

let Logo = React.createClass({
    mixins: [Router.Navigation],

    goToMainPage() {
        this.transitionTo('main');
    },

    render() {

        return (
            <div className="Logo" onTouchTap={this.goToMainPage}>
                <div className="logoImage"></div>
                <span>JsTuts</span>
            </div>
        );
    }
});

module.exports = Logo;