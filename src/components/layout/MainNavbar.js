import React from "react";
import { Link } from "react-router-dom";

function MainNavbar() {
    return (
        <header>
            <div>Naturally Baked</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Bakery Items</Link>
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