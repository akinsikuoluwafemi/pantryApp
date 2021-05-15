import React from 'react';
import Chip from '@material-ui/core/Chip';



export default function PantryChipRowItem({ pantryArr }) {
	console.log(typeof pantryArr)
	return (
		<>
			{pantryArr.map((item) => (
				<span> <Chip className="not-active" label={item.category} variant="outlined" /></span>
			))}
		</>
	);
}
