/* eslint-disable react/prop-types */
import React from "react";
import Card from "../ui/Card.js"

import classes from './BakeryItem.module.css'

function BakeryItem(props) {
    return(
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <h4>{props.category}</h4>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>Like</button>
                </div>
            </Card>
        </li>
    );
}

export default BakeryItem;