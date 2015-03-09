
/** @jsx React.DOM */
'use strict';

let React      = require('react');
let Router     = require('react-router');
let FluxMixin  = require('fluxxor').FluxMixin(React);
let ClassNames = require('classnames');

let MenuItem  = require('./MenuOverlay/MenuItem.jsx');
let SignUp    = require('./MenuOverlay/SignUp.jsx');
let Hamburger = require('./MenuOverlay/Hamburger.jsx');
let Menu      = require('./MenuOverlay/Menu.jsx');
let Logo      = require('./MenuOverlay/Logo.jsx');

require("./MenuOverlay.scss");

const MIN_WINDOW_WIDTH = 660;

let MenuOverlay = React.createClass({
    mixins: [FluxMixin],

    getInitialState() {
        return {
            itemsNames: ["Courses", "Quizzes", "Resources", "Support"],
            rightItemsNames: ["Log in"],
            isActiveHamburgerMenu: false
        };
    },

    componentDidMount() {
        $( window ).resize(() => {
            if ($( window ).width() > MIN_WINDOW_WIDTH) {
                this.setState({
                    isActiveHamburgerMenu: false
                });
            }
        });
    },

    toogleHamburgerMenu() {
        this.getFlux().actions.jsTuts.handleHamnurgerMenuChange();
        this.setState({
            isActiveHamburgerMenu: !this.state.isActiveHamburgerMenu
        });
    },

    _getLeftSideItems() {
        return this.state.itemsNames.map((data) => {
            return <MenuItem text={data} />;
        });
    },

    _getRightSideItems() {
        return this.state.rightItemsNames.map((data) => {
            return <MenuItem text={data} />;
        });
    },

    render() {
        let main = ClassNames('MenuOverlay');

        return (
            <div className={main} >
                <nav className="menu">
                    <Logo />
                    <div className="leftSide">
                        {this._getLeftSideItems()}
                    </div>
                    <SignUp />
                    <Hamburger isCross={this.state.isActiveHamburgerMenu}
                               onClick={this.toogleHamburgerMenu}/>
                    <div className="rightSide">
                        {this._getRightSideItems()}
                    </div>
                </nav>
                <Menu isCross={!this.state.isActiveHamburgerMenu}
                      mainItems={this.state.itemsNames}
                      smallItems={["Log in", "Sign Up"]}/>
            </div>
        );
    }
});

module.exports = MenuOverlay;