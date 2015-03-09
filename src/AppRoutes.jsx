'use strict';

let React = require('react');
let Router = require('react-router');
let {Route, DefaultRoute} = Router;

let LoginLayout = require("./layouts/MainLayout.jsx");
let MainPage = require("./pages/MainPage.jsx");


let AppRoutes = (
    <Route name='root' path='/' handler={LoginLayout}>
        <Route name='main' path='/:mainParameter/' handler={MainPage} />
        <DefaultRoute name='defaultMain' handler={MainPage}/>
    </Route>
);

module.exports = AppRoutes;