'use strict';

let $ = window.$ = window.jQuery = require('jquery');
let React = require('react');
let Router = require('react-router');
let AppRoutes = require('./AppRoutes.jsx');
var injectTapEventPlugin = require("react-tap-event-plugin");

require('bootstrap/dist/css/bootstrap.min.css');

let Fluxxor = require('fluxxor');

let stores = require('./stores/');
let actions = require('./actions/');
let flux = new Fluxxor.Flux(stores, actions);

$(document).ready(function() {
    window.React = React;
    injectTapEventPlugin();

    Router
        .create({
            routes: AppRoutes,
            scrollBehavior: Router.ScrollToTopBehavior,
            location: Router.HistoryLocation
        }).run(Handler => {
            React.render(<Handler flux={flux} />, document.getElementById('react-root'));
        });

});
