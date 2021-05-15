import React from 'react';
import { PantryChipRow } from '../styles/PantryChipStyles';
import PantryChipRowItem from './PantryChipRowItem';
import Chip from '@material-ui/core/Chip';
import { getAllPantryChip} from '../redux/actions/pantryActions';

import { connect } from 'react-redux';



function PantryChipList(props) {
    const { categoryArr, getAllPantryChip } = props;
    return (
		<PantryChipRow>
			{/* {pantryArr.map(item => <PantryChipRowItem item={ item}/>)} */}
			<Chip onClick={}  style={{marginRight: '15px'}} className="not-active" value="All" label="All" variant="outlined" />

			{<PantryChipRowItem categoryArr={categoryArr} />}
		</PantryChipRow>
	);
}

const mapStateToProps = ({ pantry: { categoryArr } }) => {
	
    return {
		categoryArr,
	};
};


export default connect(mapStateToProps, {getAllPantryChip})(PantryChipList);