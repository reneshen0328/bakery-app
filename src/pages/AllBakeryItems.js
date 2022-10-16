import React from "react";
import BakeryMenu from "../components/bakeryItems/BakeryMenu";
import classes from '../components/layout/Layout.module.css'

import tiramisuImage from "../images/tiramisu.jpg"
import madeleineImage from "../images/madeleine.jpg"
import matchaVanillaChocolateBirthdayCakeImage from "../images/3-tiers-matcha-vanilla-chocolate-birthday-cake.JPG"
import nerfgunCakeImage from "../images/nerfgun-cake.JPG"
import oreoCheesecakeImage from "../images/oreo-cheesecake.JPG"
import poodleChocolateBirthdayCakeImage from "../images/poodle-cake.JPG"

const hardCodedData = [
    {
        id: '3-tiers-matcha-vanilla-chocolate-birthday-cake',
        title: '3 Tiers Matcha Vanilla Chocolate Birthday Cake',
        image: matchaVanillaChocolateBirthdayCakeImage,
        category: 'Birthday Cake',
        description: 'An unique birthday cake made with matcha, vanilla, and chocolate cake. \n' +
         'This is perfect for holding a combined event when all your friends has a different \n' +
         'favorite flavor.',
    },
    {
        id: 'nerfgun-birthday-cake',
        title: 'Nerf gun Birthday Cake',
        image: nerfgunCakeImage,
        category: 'Birthday Cake',
        description: 'A fun summer (or any other season) nerf gun themed birthday cake. \n' +
        'Afterall, what can make an actual nerf gun more exciting than a nerf gun shaped cake?  \n' +
        `Let's supprise your kid and the kids (and let's face it, adults) around the neighborhood with this \n` +
        'birthday cake today.',
    },
    {
        id: 'oreo-cheesecake-birthday-cake',
        title: 'Oreo Cheesecake Birthday Cake',
        image: oreoCheesecakeImage,
        category: 'Birthday Cake',
        description: 'A cake for an oreo lover. This cake has the perfect balance of the crunchiness \n' +
         'from the oreos, the richness from the chocolate brownies, and a hint of sourness from the New York \n' +
         'cheesecake.',
    },
    {
        id: 'poodle-chocolate-birthday-cake',
        title: 'Poodle Chocolate Birthday Cake',
        image: poodleChocolateBirthdayCakeImage,
        category: 'Birthday Cake',
        description: `A poodle shaped birthday cake. When it's your dog's birthday, everything should  \n` +
        'be about your dog. This also includes the cake for the human. \n' +
        'Even though this cake is cuteness overload, this is strictly for human only. \n' +
        `If you're looking for a cake for your dog, click here.`,
    },
    {
        id: 'bakeryItem1',
        title: 'Tiramisu',
        image: tiramisuImage,
        category: 'Mousse Cake',
        description: 'Tiramisu is an elegant and rich layered Italian dessert made with delicate \n' +
         'ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and \n' +
         'cocoa powder.',
    },
    {
        id: 'bakeryItem2',
        title: 'Madeleine',
        image: madeleineImage,
        category: 'Sponge Cake',
        description: 'madeleine, delicate scallop-shaped French tea cake often served with fruit or \n' +
        'sherbet. In its preparation, flour, eggs, and sugar are beaten with a large proportion of butter, \n' +
        'incorporating as much air as possible, and then grated lemon rind and vanilla extract, and \n' +
        'sometimes rum, are added.',
    }
]

function AllBakeryItemsPage() {
    return <section>
        <div className={classes.flex}>
            <h1>All Bakery Items</h1>
            <i className={classes.arrowRight}></i>
            <i className={classes.arrowRight}></i>
        </div>
        <BakeryMenu bakeryItems={hardCodedData} />
    </section>;
}

export default AllBakeryItemsPage;