/** @jsx React.DOM */
'use strict';

let React     = require('react');

let Logo      = require('./../../components/MenuOverlay/Logo.jsx');


require("./Footer.scss");

let Footer = React.createClass({

    render() {

        return (
            <div className='Footer'>
                <div className="product footerBlock">
                    <div className="title">Product</div>
                    <div className="text">Features</div>
                    <div className="text">Integrations</div>
                    <div className="text">API</div>
                </div>
                <div className="community footerBlock">
                    <div className="title">Community</div>
                    <div className="text">Customers</div>
                    <div className="text">Guides</div>
                    <div className="text">Forums</div>
                    <div className="text">Support</div>
                </div>
                <div className="company footerBlock">
                    <div className="title">Company</div>
                    <div className="text">Our Story</div>
                    <div className="text">Careers</div>
                    <div className="text">Our Blog</div>
                    <div className="text">Contact Us</div>
                </div>
                <div className="terms footerBlock">
                    <div className="title">TERMS & POLICIES</div>
                    <div className="text">Terms of Use</div>
                    <div className="text">Privacy Policy</div>
                </div>
                <div className="newsletter footerBlock">
                    <div className="title">JOIN OUR NEWSLETTER</div>
                    <input type="email" placeholder="Your email address" />
                </div>
                <div className="logo">
                </div>
            </div>
        );
    }
});

module.exports = Footer;