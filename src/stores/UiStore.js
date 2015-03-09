'use strict';

let Fluxxor = require('fluxxor');
let eventConstants = require('../eventConstants');

let UiStore = Fluxxor.createStore({

    initialize() {
        this.hamburgerMenuState = false;

        this.bindActions(
            eventConstants.UI.TOOGLE_HAMBURGER_MENU, this.handleToogleHamburgerMenu
        );
    },

    getHamburgerMenuState() {
        return this.hamburgerMenuState;
    },

    handleToogleHamburgerMenu() {
        this.hamburgerMenuState = !this.hamburgerMenuState;
        this.emit('change');
    },

});

module.exports = UiStore;