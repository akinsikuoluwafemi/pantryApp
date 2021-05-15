import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { filteredPantryChip } from '../redux/actions/pantryActions';

function PantryChipRowItem({ pantryArr }) {
	console.log(pantryArr)

	return (
		<>
			{pantryArr.map((item) => (
				<span onClick={() => console.log(item)}> <Chip className="not-active" label={item.category} variant="outlined" /></span>
			))}
		</>
	);
}




export default connect()(PantryChipRowItem);