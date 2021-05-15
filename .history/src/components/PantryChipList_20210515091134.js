import React from 'react';
import { PantryChipRow } from '../styles/PantryChipStyles';
import PantryChipRowItem from './PantryChipRowItem'
import { connect } from 'react-redux';



function PantryChipList(props) {
    const { pantryArr } = props;
    return (
		<PantryChipRow>
            {pantryArr.map(item => <PantryChipRowItem item={ item}/>)}
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