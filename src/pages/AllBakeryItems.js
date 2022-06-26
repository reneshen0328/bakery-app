import React from "react";

import BakeryMenu from "../components/bakeryItems/BakeryMenu";

import tiramisuImage from "../images/tiramisu.jpg"
import madeleineImage from "../images/madeleine.jpg"

const hardCodedData = [
    {
        id: 'bakeryItem1',
        title: 'Tiramisu',
        image: tiramisuImage,
        category: 'Mousse cake',
        description: 'Tiramisu is an elegant and rich layered Italian dessert made with delicate \n' +
         'ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and \n' +
         'cocoa powder.',
    },
    {
        id: 'bakeryItem2',
        title: 'Madeleine',
        image: madeleineImage,
        category: 'Sponge cake',
        description: 'madeleine, delicate scallop-shaped French tea cake often served with fruit or \n' +
        'sherbet. In its preparation, flour, eggs, and sugar are beaten with a large proportion of butter, \n' +
        'incorporating as much air as possible, and then grated lemon rind and vanilla extract, and \n' +
        'sometimes rum, are added.',
    }
]

function AllBakeryItemsPage() {
    return <section>
        <h1>All Bakery Items Page</h1>
        <BakeryMenu bakeryItems={hardCodedData} />
    </section>;
}

export default AllBakeryItemsPage;