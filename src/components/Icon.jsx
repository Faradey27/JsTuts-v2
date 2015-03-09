/** @jsx React.DOM */
'use strict';

let React = require('react');
let Img = require('./Img.jsx');

require("./Icon.scss");

let Icon = React.createClass({

    getIconByType(type) {
        let hash = {

        };

        if (hash[type]) {
            return hash[type];
        } else {
            return "";
        }
    },

    render() {

        let className = this.props.className;

        return (
            <div className={"Icon "+className}
                 style={style}>
                 {this.getIconByType(this.props.type)}
            </div>
        );
    }
});

module.exports = Icon;