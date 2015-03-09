'use strict';

let axios = require('axios');

class ApiClient {

    constructor( {prefix = ''} = {} ) {
        this.prefix = prefix;
    }

    get(url, params = {}) {

        return this.request({
            url: url,
            method: 'get',
            params: params
        });
    }

    post(url, payload = {}) {
        return this.request({
            url: url,
            method: 'post',
            data: payload
        });
    }

    request(options) {

        options.url = `${this.prefix}/${options.url}`;

        if (!options.params) {
            options.params = {};
        }

        return axios(options).then(resp => {

            if (resp && resp.status == 200) {
                return resp;
            } else {

                console.error('ERROR', resp.error);
                if (this.onError) {
                    this.onError(resp.error)
                }

                return Promise.reject(resp.error);
            }
        });
    }

}

module.exports = ApiClient;