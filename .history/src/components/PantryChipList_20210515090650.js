import React from 'react';
import { PantryChipRow } from '../styles/PantryChipStyles';
import { connect } from 'react-redux';



function PantryChipList(props) {
    const { pantryArr } = props;
    return (
		<PantryChipRow>
			{pantryArr.map(item => <PantryChipRowList/>)}
		</PantryChipRow>
	);
}

const mapStateToProps = ({ pantry: { pantryArr } }) => {
	console.log(pantryArr);
	return {
		pantryArr,
	};
};


export default connect(mapStateToProps)(PantryChipList);