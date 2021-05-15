import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { filteredPantryChip } from '../redux/actions/pantryActions';

function PantryChipRowItem({ categoryArr, filteredPantryChip }) {
	console.log(categoryArr);

	return (
		<>
			{categoryArr.map((item) => (
				<span onClick={() => console.log(item)}>
					{' '}
					<Chip className="not-active" label={item} variant="outlined" />
				</span>
			))}
		</>
	);
}




export default connect(null, { filteredPantryChip })(PantryChipRowItem);