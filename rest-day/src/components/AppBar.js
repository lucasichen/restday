import './AppBar.css';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavBarElements';
const AppBar = () => {
    return (
        <>
            <Nav>
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
        </>
    );
}

export default AppBar;