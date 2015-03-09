/** @jsx React.DOM */
'use strict';

let React = require('react');

require("./Img.scss");

let Img = React.createClass({

    render() {

        let className = this.props.className;

        let style = {
            backgroundImage: "url(" + this.props.src + ")",
            width: this.props.width,
            height: this.props.height,
            backgroundSize: this.props.cover
                ? "cover"
                : ""
        };

        return (
            <div className={"Img "+className}
                 style={style}>
            </div>
        );
    }
});

module.exports = Img;