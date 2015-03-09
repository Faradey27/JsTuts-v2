'use strict';

let Fluxxor = require('fluxxor');
let eventConstants = require('../eventConstants');

let UserStore = Fluxxor.createStore({

    initialize() {
        this._user = {};
    }
});

module.exports = UserStore;