import React from 'react';
import { PantryChipRow } from '../styles/PantryChipStyles';
import { connect } from 'react-redux';



function PantryChipList(props) {
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
		pantryArr,
	};
};


export default connect(mapStateToProps)(PantryChipList);