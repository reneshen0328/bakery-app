import React from "react";
import { Link } from "react-router-dom";

import AuthNavbar from "./AuthNavbar"
import classes from "./MainNavbar.module.css"

function MainNavbar() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}><h1>NB</h1></div>
            <nav>
                <ul>
                    <li>
                        <a>
                        <Link to="/">All Bakery Items</Link>
                        </a>
                    </li>
                    <li>
                        <Link to="/new-bakery-item">New Bakery Item</Link>
                    </li>
                    <li>
                        <Link to="/cakes">Cakes</Link>
                    </li>
                    {/* <AuthNavbar /> */}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar;