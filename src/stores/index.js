'use strict';

let LanguageStore = require('./LanguageStore');
let UserStore = require('./UserStore');
let Session = require('./SessionStore');
let UiStore = require('./UiStore');

module.exports = {
    language: new LanguageStore(),
    user: new UserStore(),
    session: new Session(),
    ui: new UiStore()
};
