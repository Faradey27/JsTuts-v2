/** @jsx React.DOM */
'use strict';

let React = require('react');

require("./MenuItem.scss");

let MenuItem = React.createClass({

    render() {
        return (
            <div className="MenuItem">
                <span>{this.props.text}</span>
            </div>
        );
    }
});

module.exports = MenuItem;