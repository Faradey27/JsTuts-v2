/** @jsx React.DOM */
'use strict';

let React            = require('react');
let Router           = require('react-router');
let { RouteHandler } = Router;
let FluxMixin        = require('fluxxor').FluxMixin(React);

let MenuOverlay = require('./../components/MenuOverlay.jsx');

require("./MainLayout.scss");
require("font-awesome/css/font-awesome.min.css");
require("bootstrap/dist/css/bootstrap.min.css");

let LoginLayout = React.createClass({
    mixins: [FluxMixin],

    componentDidMount() {
        document.title = "JsTuts - learn javascript easily"
    },

    render() {
        return (
            <div className='MainLayout'>
                <MenuOverlay />
                <RouteHandler flux={this.props.flux} />
            </div>
        );
    }
});

module.exports = LoginLayout;