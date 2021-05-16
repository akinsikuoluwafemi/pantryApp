import React from 'react';
import { useHistory } from 'react-router-dom';
import { PantryItemSection, PantryItemWrapper, PantryListValues} from '../styles/PantryItemStyles';
import Chip from '@material-ui/core/Chip';
import { Divider } from 'antd';
import { PantryChipRow } from '../styles/PantryChipStyles';
import Button from '@material-ui/core/Button';
import { getSinglePantryDetail } from '../redux/actions/pantryActions';
import { connect } from 'react-redux';
// import Divider from '@material-ui/core/Divider';

import WholeChicken from '../assets/images/whole-chicken.png';


 function PantryItem(props) {
	 
	 const history = useHistory();
	//  console.log(location);
	 const { pantry, getSinglePantryDetail } = props;
	 const { name, quantity, weight, imageSrc } = pantry;
		// console.log(pantry)

		return (
			<Button style={{ border: 'none', outline: 'none' }}>
				<PantryItemSection onClick={() => console.log(pantry)}>
					<PantryItemWrapper>
						<img style={{ height: '8rem' }} src={WholeChicken} alt="whole-chicken" />
						<PantryListValues start>
							<span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{name}</span>
							<span style={{ color: '#BCBCBC' }}>{weight}lb</span>
						</PantryListValues>
						<PantryListValues center>
							<span>Quantity</span>
							<span className="text-center" style={{ color: '#BCBCBC' }}>
								<Chip size="small" style={{ color: '#222', background: '#FDC039' }} label={quantity} />
							</span>
						</PantryListValues>
					</PantryItemWrapper>
				</PantryItemSection>
				<Divider />
			</Button>
		);
 }


export default connect(null, {getSinglePantryDetail})(PantryItem);