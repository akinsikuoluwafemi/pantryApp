import React from 'react';
import Chip from '@material-ui/core/Chip';



export default function PantryChipRowItem({item}) {
    const { category } = item;
    return (
		<span>
			<Chip cl style={{ background: 'rgb(253, 192, 57)' }} label={category} variant="outlined" />
		</span>
	);
}
