import React from "react";
import classes from './Layout.module.css'

function Loading() {
    const loadingImg =
    "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

    return (
        <div className={classes.loading}>
            <img src={loadingImg} alt="Loading..." />
        </div>
    );
}

export default Loading;