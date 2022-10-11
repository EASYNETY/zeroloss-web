import React  from "react";
import { NavLink } from "react-router-dom";
// import styled, { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme, GlobalStyles } from "../components/themes";
// import {BrowserRouter,Switch,Route,NavLink} from "ReactRouterDOM";



function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img
              className="navbar-brand__regular"
              style={{ height: "120px" }}
              src="images/Zeroloss_logo.png"
              alt="brand-logo"
            />
            <img
              className="navbar-brand__sticky"
              src="images/Zeroloss_logo.png"
              style={{ height: "120px" }}
              alt="sticky brand-logo"
            />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/idolaunchpad"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Launch App
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/zerolosspad"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                ZerolossPad
              </NavLink>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://scamsniper.net"
                style={{ color: "white" }}
              >
                Rug Checker
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1KvACbgj-2-ZrsM8v_UHj7BuV__OjoewV/view?usp=drivesdk"
                style={{ color: "white" }}
              >
                LightPaper
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/faq"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
          <div className="mr-5 mr-lg-0 ml-lg-2">
            <a
              href="https://www.dextools.io/app/bnb/pair-explorer/0xcdee9978ac7549c755b58849ed7e1648efac6ca7"
              className="btn btn-size--sm btn-border btn-hover--danger color--white"
            >
              <span className="btn__text font-w--500">Buy</span>
            </a>
            <NavLink
              to="/defi"
              className="btn btn-size--sm btn-hover--splash"
              style={{ backgroundColor: "gold" }}
            >
              <span className="btn__text">DeFi</span>
            </NavLink>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
