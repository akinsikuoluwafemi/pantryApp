import React from 'react';
import PantryItem from './PantryItem';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { PantryChipRow } from '../styles/PantryChipStyles';


function PantryItemList({ pantry, query, handleChips, filteredPantryChip, categoryArr }) {
	return (
		<div>
			<>
				<PantryChipRow>
					<button className="not-active" onClick={filteredPantryChip} value="All">
						All
					</button>
					<button className="not-active" onClick={filteredPantryChip} value="fruit and vegetables">
						fruit and vegetables
					</button>
					<button className="not-active" onClick={filteredPantryChip} value="dairy">
						dairy
					</button>
					<button className="not-active" onClick={filteredPantryChip} value="canned-goods">
						canned-goods
					</button>
					<button className="not-active" onClick={filteredPantryChip} value="pasta-and-rice">
						pasta-and-rice
					</button>
					<button className="not-active" onClick={filteredPantryChip} value="baking-items">
						baking-items
					</button>
				</PantryChipRow>
			</>

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
		</div>
	);
}

const mapStateToProps = ({ pantry: { query, categoryArr } }) => {
	return {
		query,
		categoryArr,
	};
};



export default connect(mapStateToProps)(PantryItemList);