/* eslint-disable react/prop-types */
import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import classes from './Layout.module.css'

import Loading from './Loading.js';
import NavBar from './Navbar'

function Layout(props) {
    const { isLoading } = useAuth0();

    if(isLoading) {
      return(
        <div className={classes.layout}>
            <Loading />
        </div>
      )
    }

    return(
        <div className={classes.layout}>
            <NavBar />
            <main className={classes.main}>{props.children}</main>
        </div>
    ) 
}

export default Layout;