import React from 'react';
import PantryItem from './PantryItem';
import { connect } from 'react-redux';

function PantryItemList({pantry,query}) {
    console.log(pantry);
    return (
		<>
			{pantry
				.filter((val) => {
					if (query === '') {
						return val;
					} else if (val.name.toLowerCase().includes(query.toLowerCase())) {
						return val;
					}
				})
				.map((pantryVal, key) => (
					<PantryItem key={pantryVal.id} pantry={pantryVal} />
				))}
		</>
	);
}

const mapStateToProps = ({ pantry: { query } }) => {
	return {
		query,
	};
};



export default connect(mapStateToProps)(PantryItemList);