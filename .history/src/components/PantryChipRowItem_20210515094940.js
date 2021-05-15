import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';


export default function PantryChipRowItem({ pantryArr }) {
	console.log(pantryArr)

	return (
		<>
			{pantryArr.map((item) => (
				<span onClick={() => console.log(item.category)}> <Chip className="not-active" label={item.category} variant="outlined" /></span>
			))}
		</>
	);
}
