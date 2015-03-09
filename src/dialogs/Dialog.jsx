/**
 * @jsx React.DOM
 */
'use strict';

let React  = require('react/addons');
let Modal  = require('react-bootstrap').Modal;
let cx     = React.addons.classSet;

require('./Dialog.scss');

let Dialog = React.createClass({

    handleHideRequest(){
        if (!this.preventFromClosing && this.props.onHideRequest) {
            this.props.onHideRequest();
        }
    },

    close(){
        if (!this.preventFromClosing) {
            $(this.getDOMNode()).hide();
        }
    },

    preventModalClose() {
        this.preventFromClosing = true;
    },

    allowModalClose() {
        this.preventFromClosing = false;
        this.forceUpdate();
    },

    render() {
        let divCass = cx({
            'dialogWrapper':   true,
            'blockedUI': this.preventFromClosing,
        });

        let style = {
            zIndex: !this.props.active || 100000
        };

        return (
                <div className={divCass} style={style}>

                    <Modal  className={this.props.name}
                            animation={false}
                            title={this.props.header}
                            onRequestHide={this.handleHideRequest}>
                        {this.props.children}
                    </Modal>
                </div>
        );
    }
});

module.exports = Dialog;