/** @jsx React.DOM */
'use strict';

let React     = require('react');
let FluxMixin = require('fluxxor').FluxMixin(React);
let Router    = require('react-router');

require("./SignUpBlock.scss");

let SignUpBlock = React.createClass({

    mixins: [FluxMixin, Router.State, Router.Navigation],

    getStateFromFlux() {

        return {
        };
    },

    render() {

        return (
            <div className='SignUpBlock'>
                <div className="headline">
                    <h1>
                        Learn javascript, for free &nbsp;
                    </h1>
                    <h2>
                        JsTuts makes it easy for you to learn javascript
                        in convenient way.
                        Getting started is free and only takes a few minutes.
                    </h2>
                    <a className="button">
                        Create a free account
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = SignUpBlock;