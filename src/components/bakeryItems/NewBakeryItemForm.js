/* eslint-disable react/prop-types */
import React from "react";
import Card from "../ui/Card.js"
import classes from './NewBakeryItemForm.module.css'

function NewBakeryItemForm() {
    return <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="title">Bakery Item Title</label>
                <input id="title" type="text" required></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Bakery Item Image</label>
                <input id="image" type="url" required></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="category">Category</label>
                <input id="category" type="select" required></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" rows="5" required></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add New Item</button>
            </div>
        </form>
    </Card>
}

export default NewBakeryItemForm;