import "./AppBar.css";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavBarElements";
import React from 'react'

const AppBar = () => {
    return (
        <Nav className="nav-bar">
            <NavLink to="/">
                <h1>REST DAY</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/trends" activeStyle>
                    Trends
                </NavLink>
                <NavLink to="/account" activeStyle>
                    Account
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Log Health</NavBtnLink>
            </NavBtn>
        </Nav>
    );
};

export default AppBar;
