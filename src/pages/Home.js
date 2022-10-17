import React from "react";
import classes from '../components/layout/Layout.module.css'
import homePageImage from "../images/Open_Doodles_Together.png"

function HomePage() {
    const homePageImageAlt = "Two people with icecream and with a dog illustration";

    return(
        <div className={classes.marginTop}>
            <div className={classes.centerFlex}>
                <img src={homePageImage} alt={homePageImageAlt} />
                <div className={classes.homePageContent}>
                    <h1>Hello</h1>
                    <h2>Would you like some sweets</h2>
                    <br />
                    <h2>to lighten up your day?</h2>
                </div>
            </div>
        </div>
    )
}

export default HomePage;