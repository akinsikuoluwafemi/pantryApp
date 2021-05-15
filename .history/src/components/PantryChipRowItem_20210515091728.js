import React from 'react';
import Chip from '@material-ui/core/Chip';



export default function PantryChipRowItem({item}) {
    const { category } = item;
    return (
        <Chip label="Basic" variant="outlined" />

        <span>
            {category}
        </span>
    )
}
