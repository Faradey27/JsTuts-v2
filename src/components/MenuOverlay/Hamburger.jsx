/** @jsx React.DOM */
'use strict';

let React = require('react');
let ClassNames = require('classnames');

require("./Hamburger.scss");

let Hamburger = React.createClass({

    render() {
        let hamburger = ClassNames('Hamburger', {
            "cross": this.props.isCross
        });

        return (
            <div className={hamburger}
                 onTouchTap={this.props.onClick}>
                <span className="line-1"/>
                <span className="line-2"/>
                <span className="line-3"/>
            </div>
        );
    }
});

module.exports = Hamburger;