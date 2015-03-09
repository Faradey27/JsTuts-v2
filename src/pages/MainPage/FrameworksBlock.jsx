/** @jsx React.DOM */
'use strict';

let React     = require('react');
let FluxMixin = require('fluxxor').FluxMixin(React);
let Router    = require('react-router');

require("./FrameworksBlock.scss");

let FrameworksBlock = React.createClass({

    mixins: [FluxMixin, Router.State, Router.Navigation],

    getInitialState() {

        return {
            frameworks: ['nodejs', 'react', 'mongo', 'angular',
                         'bootstrap', 'ember', 'coffescript', 'backbone']
        };
    },

    getFramerorks() {
        return this.state.frameworks.map((data) => {
            return <li className={data} />
        });
    },

    render() {

        return (
            <div className='FrameworksBlock'>
                <ul className="frameworks">
                    {this.getFramerorks()}
                </ul>
            </div>
        );
    }
});

module.exports = FrameworksBlock;