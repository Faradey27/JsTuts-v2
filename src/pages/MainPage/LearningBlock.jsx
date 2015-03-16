/** @jsx React.DOM */
'use strict';

let React     = require('react');

require("./LearningBlock.scss");

let LearningBlock = React.createClass({

    render() {

        return (
            <div className='LearningBlock'>
                <div className="centered">
                    <h3>
                        Learn javascript.  Anytime, Anywhere.
                    </h3>
                    <p>
                        Benefit from beautiful, intuitive
                        reporting that helps you understand
                        campaign performance at-a-glance...
                        including our popular real-time report, Worldview.
                    </p>
                </div>
            </div>
        );
    }
});

module.exports = LearningBlock;