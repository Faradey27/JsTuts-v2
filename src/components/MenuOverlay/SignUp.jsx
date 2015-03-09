/** @jsx React.DOM */
'use strict';

let React = require('react');

require("./SignUp.scss");

let SignUp = React.createClass({

    render() {
        return (
            <div className="SignUp">
                <div className="register">
                    <span>Sign up</span>
                </div>
            </div>
        );
    }
});

module.exports = SignUp;