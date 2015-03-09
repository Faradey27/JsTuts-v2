'use strict';

let eventConstants = require('../eventConstants');
let api = require('../api/');

module.exports = {
    handleHamnurgerMenuChange() {
        this.dispatch(eventConstants.UI.TOOGLE_HAMBURGER_MENU);
    }
};