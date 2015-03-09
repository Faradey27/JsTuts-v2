/** @jsx React.DOM */
'use strict';

let React = require('react');

require('./Logo.scss');

let Logo = React.createClass({

    render() {

        return (
            <div className="Logo">
                <div className="logoImage"></div>
                <span>JsTuts</span>
            </div>
        );
    }
});

module.exports = Logo;