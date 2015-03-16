'use strict';

let React = require('react');
let Router = require('react-router');
let {Route, DefaultRoute} = Router;

let LoginLayout = require("./layouts/MainLayout.jsx");
let MainPage = require("./pages/MainPage.jsx");
let LoginPage = require("./pages/LoginPage.jsx");
let CoursesPage = require("./pages/CoursesPage.jsx");
let QuizPage = require("./pages/QuizPage.jsx");
let ResourcesPage = require("./pages/ResourcesPage.jsx");
let RegisterPage = require("./pages/RegisterPage.jsx");
let SupportPage = require("./pages/SupportPage.jsx");

let AppRoutes = (
    <Route name='root' path='/' handler={LoginLayout}>
        <Route name='main' path='/main/' handler={MainPage} />
        <Route name='login' path='/login/' handler={LoginPage} />
        <Route name='register' path='/register/' handler={RegisterPage} />
        <Route name='courses' path='/courses/' handler={CoursesPage} />
        <Route name='quiz' path='/quiz/' handler={QuizPage} />
        <Route name='support' path='/support/' handler={SupportPage} />
        <Route name='resource' path='/resource/' handler={ResourcesPage} />

        <DefaultRoute name='defaultMain' handler={MainPage}/>
    </Route>
);

module.exports = AppRoutes;