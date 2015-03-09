'use strict';

let config = require('./../etc/config.json');

let ApiClient = require('./ApiClient');
let apiClient = new ApiClient({ prefix: config.apiPrefix });

let JsTuts = require('./JsTuts');

module.exports = {
    jsTuts: new JsTuts({ apiClient: apiClient }),
    apiClient: apiClient
};