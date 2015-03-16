/** @jsx React.DOM */
'use strict';

let React     = require('react');
let FluxMixin = require('fluxxor').FluxMixin(React);
let Router    = require('react-router');

let InformBlock = require('./InformationBlock/InformBlock.jsx');

require("./InformationBlock.scss");

let InformationBlock = React.createClass({

    mixins: [FluxMixin, Router.State, Router.Navigation],

    getInitialState() {
        let information = [];

        information.push({
            title: "manage",
            className: 'manage',
            text: `Automatic list management, custom fields and 100+
                   ready-to-use integrations make it easy to manage
                   your subscribers.`
        });

        information.push({
            title: "learn",
            className: 'learn',
            text: `Automatic list management, custom fields and 100+
                   ready-to-use integrations make it easy to manage
                   your subscribers.`
        });

        information.push({
            title: "experience",
            className: 'experience',
            text: `Automatic list management, custom fields and 100+
                   ready-to-use integrations make it easy to manage
                   your subscribers.`
        });

        return {
            information: information
        };
    },

    getInformationBlocks() {
        return this.state.information.map((data) => {
            return <InformBlock data={data}/>
        });
    },

    render() {

        return (
            <div className='InformationBlock'>
                <div className="centered">
                    <h3>
                        Effective javascript learning has never been this simple.
                    </h3>
                    <div className="informationBlocks">
                        {this.getInformationBlocks()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = InformationBlock;