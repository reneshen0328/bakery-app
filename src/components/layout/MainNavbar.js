import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavbar.module.css"

function MainNavbar() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>NB</div>
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
                        <Link to="/cake-bases">Cake Bases</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar;