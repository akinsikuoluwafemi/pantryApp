import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { filteredPantryChip } from '../redux/actions/pantryActions';

function PantryChipRowItem({ categoryArr, filteredPantryChip }) {

	return (
		<>
			{categoryArr.map((item) => (
				<span key={item.id} onClick={() => console.log(item)}>
					{' '}
					<Chip className="not-active" value={item} label={item} variant="outlined" />
				</span>
			))}
		</>
	);
}




export default connect(null, { filteredPantryChip })(PantryChipRowItem);