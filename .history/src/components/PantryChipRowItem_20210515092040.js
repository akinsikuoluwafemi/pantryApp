import React from 'react';
import Chip from '@material-ui/core/Chip';



export default function PantryChipRowItem({item}) {
    const { category } = item;
    return (
		<span>
			<Chip label={category} variant="outlined" color="primary" variant="outlined"
 />
		</span>
	);
}
