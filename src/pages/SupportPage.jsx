/** @jsx React.DOM */
'use strict';

let React            = require('react');
let FluxMixin        = require('fluxxor').FluxMixin(React);
let Router           = require('react-router');
let StoreWatchMixin  = require('fluxxor').StoreWatchMixin;
let ClassNames       = require('classnames');

require("./MainPage.scss");

let MainPage = React.createClass({

    mixins: [FluxMixin, Router.State, Router.Navigation],

    render() {

        return (
            <div className="SupportPage">
            </div>
        );
    }
});

module.exports = MainPage;