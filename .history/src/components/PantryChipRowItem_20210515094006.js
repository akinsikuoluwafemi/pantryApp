import React from 'react';
import Chip from '@material-ui/core/Chip';



export default function PantryChipRowItem({ pantryArr }) {
	
	return (
		<span>
			<Chip className="not-active" label={category} variant="outlined" />
		</span>
	);
}
