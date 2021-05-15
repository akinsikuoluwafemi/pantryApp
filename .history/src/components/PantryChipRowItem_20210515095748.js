import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import {} from '../redux/actions/'

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

const mapStateToProps = (state) => {
	return {
		state: state
	}
}


export default connect()(PantryChipRowItem);