import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import classes from '../components/layout/Layout.module.css'

import Loading from "../components/layout/Loading.js"
import NewBakeryItemForm from "../components/bakeryItems/NewBakeryItemForm";

function NewBakeryItemPage() {
    const { user } = useAuth0();
    const { nickname } = user;

    return(
        <div>
            <div className={classes.baselineFlex}>
                <h1 className={classes.gradientH1}> Hi {nickname}: </h1>
                <h1>Please Add A New Bakery Item Here</h1>
            </div>
            <section>
                <NewBakeryItemForm />
            </section>
            {/* The following content is all the user properties we can use to pass in as props */}
            <div className={classes.displayNone}>
                <pre>
                    {JSON.stringify(user, null, 2)}
                </pre>
            </div>
        </div>
    ) 
}

export default NewBakeryItemPage;