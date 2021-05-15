import React from 'react';
import PantryItem from './PantryItem';
import { connect } from 'react-redux';

function PantryItemList({pantry}) {
    console.log(pantry);
    return (
		<>
			{pantry
				.filter((val) => {
					if (query === '') {
						return val;
					} else if (val.name.toLowerCase().includes(query.toLowerCase())) {
						console.log(typeof val);
						return val;
					}
				})
				.map((pantryVal, key) => (
					<PantryItem key={pantry.id} pantry={pantryVal} />
				))}
		</>
	);
}

const mapStateToProps = ({ pantry: { pantryArr, query } }) => {
	return {
		pantryArr,
		query,
	};
};



export default connect()(PantryItemList);