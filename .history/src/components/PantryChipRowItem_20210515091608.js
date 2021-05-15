import React from 'react';
	console.log(pantryArr);


export default function PantryChipRowItem({item}) {
    const { category } = item;
    return (
        <span>
            {category}
        </span>
    )
}
