/** @jsx React.DOM */
'use strict';

let React     = require('react');
let FluxMixin = require('fluxxor').FluxMixin(React);
let Router    = require('react-router');

require("./VideoBlock.scss");

let VideoBlock = React.createClass({

    mixins: [FluxMixin, Router.State, Router.Navigation],

    getStateFromFlux() {

        return {
        };
    },

    render() {

        return (
            <div className='VideoBlock'>
                <div className="centered">
                    <div className="textBlock">
                        <h3>
                            Teach javascript programming in a few days
                        </h3>
                        <p>
                            Take control of your learning by working on the skills
                            you choose at your own pace.
                        </p>
                    </div>
                    <div className="video">
                        <div className="preroll">
                            <a>Play</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = VideoBlock;