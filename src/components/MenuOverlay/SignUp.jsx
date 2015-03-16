/** @jsx React.DOM */
'use strict';

let React = require('react');
let Router     = require('react-router');

require("./SignUp.scss");

let SignUp = React.createClass({
    mixins: [Router.Navigation],

    register() {
        this.transitionTo('register');
    },

    render() {
        return (
            <div className="SignUp">
                <div className="register" onTouchTap={this.register}>
                    <span>Sign up</span>
                </div>
            </div>
        );
    }
});

module.exports = SignUp;