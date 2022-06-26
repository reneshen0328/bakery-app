import React from "react";

const hardCodedData = [
    {
        id: 'pastry1',
        title: 'Tiramisu',
        image: 'https://unsplash.com/photos/4El3DUkQs2g',
        category: 'Mousse cake',
        description: 'Tiramisu is an elegant and rich layered Italian dessert made with delicate \n' +
         'ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and \n' +
         'cocoa powder.',
    },
    {
        id: 'pastry2',
        title: 'Madeleine',
        image: 'https://unsplash.com/photos/VnMg5umDmm8',
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
        <ul>
            {hardCodedData.map((data) => {
                return <li key={data.id}>{data.title}</li>
            })}
        </ul>
    </section>;
}

export default AllBakeryItemsPage;