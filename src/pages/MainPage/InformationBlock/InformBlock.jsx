/** @jsx React.DOM */
'use strict';

let React     = require('react');

require("./InformBlock.scss");

let InformBlock = React.createClass({

    render() {
        let data = this.props.data;

        return (
            <div className='InformBlock'>
                <h4 className={data.className}>
                    {data.title}
                </h4>
                <p>
                    {data.text}
                </p>
            </div>
        );
    }
});

module.exports = InformBlock;