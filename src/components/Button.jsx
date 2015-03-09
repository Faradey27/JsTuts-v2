/** @jsx React.DOM */
'use strict';

let React = require('react');

require("./Button.scss");

let Button = React.createClass({

    onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    },

    render() {

        return (
            <button className={'Button ' + this.props.className}
                    onTouchTap={this.onClick}
                    style={this.props.style}>
                 <span>{this.props.text}</span>
            </button>
        );
    }
});

module.exports = Button;