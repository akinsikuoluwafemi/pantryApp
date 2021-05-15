import React from 'react';

export default function PantryChipRowItem({item}) {
    const { category } = item;
    return (
        <span>
            {category}
        </span>
    )
}
