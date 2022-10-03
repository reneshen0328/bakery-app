/* eslint-disable react/prop-types */
import React from "react";

import MainNavbar from "./MainNavbar";
import classes from './Layout.module.css'

function Layout(props) {
    return <div className={classes.layout}>
        <MainNavbar />
        <main className={classes.main}>{props.children}</main>
    </div>
}

export default Layout;