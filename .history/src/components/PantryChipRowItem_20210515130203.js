import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { filteredPantryChip } from '../redux/actions/pantryActions';

function PantryChipRowItem({ pantryArr, filteredPantryChip }) {
	console.log(pantryArr);

	return (
		<>
			{pantryArr.map((item) => (
				<span onClick={() => filteredPantryChip(item)}>
					{' '}
					<Chip className="not-active" label={item} variant="outlined" />
				</span>
			))}
		</>
	);
}




export default connect(null, { filteredPantryChip })(PantryChipRowItem);