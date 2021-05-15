import React from 'react';
console.log(pantryArr);
    import Chip from '@material-ui/core/Chip';



export default function PantryChipRowItem({item}) {
    const { category } = item;
    return (
        <span>
            {category}
        </span>
    )
}
