/** @jsx React.DOM */
'use strict';

let React = require('react');

require("./MenuItem.scss");

let MenuItem = React.createClass({

    handleTap() {
        if (this.props.handleTap) {
            this.props.handleTap();
        }
    },

    render() {
        return (
            <div className="MenuItem"
                 onTouchTap={this.handleTap}>
                <span>{this.props.text}</span>
            </div>
        );
    }
});

module.exports = MenuItem;