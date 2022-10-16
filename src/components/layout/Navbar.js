import React from "react";
import classes from "./Navbar.module.css";

import MainNavbar from "./MainNavbar";
import AuthNavbar from "./AuthNavbar";

class NavBar extends React.Component {
  render() {
    return (
        <nav className={classes.header}>
            <MainNavbar />
            <AuthNavbar />
        </nav>
    );
  }
}

export default NavBar;