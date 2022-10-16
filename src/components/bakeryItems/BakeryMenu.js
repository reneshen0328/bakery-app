/* eslint-disable react/prop-types */
import React from "react";
import BakeryItem from "./BakeryItem";
import classes from './BakeryMenu.module.css'

function BakeryMenu(props) {
    return <div className={classes.div}>
        <ul className={classes.list}>
            {props.bakeryItems.map(item => 
            <BakeryItem 
                key={item.id} 
                id={item.id} 
                image={item.image} 
                title={item.title} 
                category={item.category} 
                description={item.description} 
                />)
            }
        </ul>
    </div>
}

export default BakeryMenu;