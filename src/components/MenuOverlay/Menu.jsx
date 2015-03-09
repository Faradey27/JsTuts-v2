/** @jsx React.DOM */
'use strict';

let React      = require('react');
let ClassNames = require('classnames');

require("./Menu.scss");

let Menu = React.createClass({
    getItems() {
        return this.props.mainItems.map((data) => {
            return <div className="item">
                        {data}
                   </div>;
        });
    },

    getSmallItems() {
        return this.props.smallItems.map((data) => {
            return <div className="item small">
                        {data}
                   </div>;
        });
    },

    render() {

        let menu = ClassNames('Menu', {
            "hide": this.props.isCross
        });

        return (
            <div className={menu}>
                {this.getItems()}
                {this.getSmallItems()}
            </div>
        );
    }
});

module.exports = Menu;