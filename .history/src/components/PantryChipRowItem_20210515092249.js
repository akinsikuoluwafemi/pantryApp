import React from 'react';
import Chip from '@material-ui/core/Chip';



export default function PantryChipRowItem({item}) {
    const { category } = item;
    return (
		<span>
			<Chip style={{ background: '#FDC039', opacity: '.25' }} label={category} variant="outlined" />
		</span>
	);
}
