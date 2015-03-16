/** @jsx React.DOM */
'use strict';

let React  = require('react');
let Router = require('react-router');

require("./MapBlock.scss");

let MapBlock = React.createClass({
    mixins: [Router.Navigation],

    register() {
        this.transitionTo('register');
    },

    render() {

        return (
            <div className='MapBlock'>
                <div className="centered">
                    <h3>
                        24/7 Worldwide Support
                    </h3>
                    <p>
                        Our team of email specialists is
                        always here when you need us.
                        That’s why customers give us
                        industry-leading satisfaction ratings.
                    </p>
                    <a className="button" onTouchTap={this.register}>
                        Create a free account
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = MapBlock;