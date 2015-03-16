/** @jsx React.DOM */
'use strict';

let React            = require('react');
let FluxMixin        = require('fluxxor').FluxMixin(React);
let Router           = require('react-router');
let StoreWatchMixin  = require('fluxxor').StoreWatchMixin;
let ClassNames       = require('classnames');

let SignUpBlock      = require('./MainPage/SignUpBlock.jsx');
let FrameworksBlock  = require('./MainPage/FrameworksBlock.jsx');
let VideoBlock       = require('./MainPage/VideoBlock.jsx');
let InformationBlock = require('./MainPage/InformationBlock.jsx');
let LearningBlock    = require('./MainPage/LearningBlock.jsx');
let MapBlock         = require('./MainPage/MapBlock.jsx');
let Footer           = require('./MainPage/Footer.jsx')

require("./MainPage.scss");

let MainPage = React.createClass({

    mixins: [FluxMixin, Router.State, Router.Navigation, StoreWatchMixin('ui')],

    getStateFromFlux() {

        return {
            hamburgerMenuState: this.getFlux().store('ui').getHamburgerMenuState()
        };
    },

    render() {
        let main = ClassNames('MainPage', {
            "move": this.state.hamburgerMenuState
        });

        return (
            <div className={main}>
                <SignUpBlock />
                <FrameworksBlock />
                <VideoBlock />
                <InformationBlock />
                <LearningBlock />
                <MapBlock />
                <Footer />
            </div>
        );
    }
});

module.exports = MainPage;