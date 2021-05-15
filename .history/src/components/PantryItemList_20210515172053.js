import React, {useState} from 'react';
import PantryItem from './PantryItem';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { PantryChipRow } from '../styles/PantryChipStyles';
import { filteredPantryChip } from '../redux/actions/pantryActions';


function PantryItemList({ pantry, query, filteredPantryChip, categoryArr }) {
    	
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
        filteredPantryChip();
	};


    return (
		<div>
			<>
				<PantryChipRow>
					
					{categoryArr.map((item, index) => {
                        const className = activeIndex === index ? 'not-active active' : 'not-active';
                        console.log(index)
                        return (
							<button style={{background: ${index ? }}} key={index} onClick={filteredPantryChip} value={item} className={className}>
								{item}
							</button>
						);
                        
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



export default connect(mapStateToProps, { filteredPantryChip })(PantryItemList);