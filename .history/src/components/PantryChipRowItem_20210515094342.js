import React from 'react';
import Chip from '@material-ui/core/Chip';



export default function PantryChipRowItem({ pantryArr }) {
	console.log(pantryArr)
	return (
		<>
			{pantryArr.map((item) => (
				<span> <Chip className="not-active" label={category} variant="outlined" /> */}</span>
			))}
		</>
	);
}
