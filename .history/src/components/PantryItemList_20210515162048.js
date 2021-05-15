import React, {useState} from 'react';
import PantryItem from './PantryItem';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { PantryChipRow } from '../styles/PantryChipStyles';


function PantryItemList({ pantry, query, handleChips, filteredPantryChip, categoryArr }) {
    	
    const [activeIndex, setActiveIndex] = useState(0);

    return (
		<div>
			<>
				<PantryChipRow>
					
					{categoryArr.map((item, index) => {
                        const className = activeIndex === index ? 'slider-name active' : 'slider-name';
                        
                        return (
						<button  key={item} className="not-active" onClick={filteredPantryChip} value={item}>
							{item}
						</button>
                        )
                        
                    })}
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