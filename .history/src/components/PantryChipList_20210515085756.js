import React from 'react';
import { PantryChipRow } from '../styles/PantryChipStyles';
import { connect } from 'react-redux';



function PantryChipList() {
    return (
		<PantryChipRow>
			<span>PANTRY </span>
			<span>PANTRY </span>
			<span>PANTRY </span>
			<span>PANTRY </span>
			<span>PANTRY </span>
			<span>PANTRY </span>
			<span>PANTRY </span>
		</PantryChipRow>
	);
}

const mapStateToProps = ({ pantry: { pantryArr } }) => {
	console.log(pantryArr);
	return {
		state: state,
	};
};


export default connect(mapStateToProps)(PantryChipList);