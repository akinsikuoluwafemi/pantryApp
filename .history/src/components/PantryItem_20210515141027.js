import React from 'react';
import { PantryItemSection, PantryItemWrapper, PantryListValues} from '../styles/PantryItemStyles';
import Chip from '@material-ui/core/Chip';
import { Divider } from 'antd';
// import Divider from '@material-ui/core/Divider';

import WholeChicken from '../assets/images/whole-chicken.png';


export default function PantryItem({ pantry }) {
	const { name, quantity, weight, imageSrc } = pantry;
	// console.log(pantry)

	return (
		<>
		<>
		<PantryChipRow>
					<Chip  style={{marginRight: '15px'}} className="not-active" label="All" variant="outlined" />
					<Chip  style={{marginRight: '15px'}} className="not-active"  label="fruit and vegetables" variant="outlined" />
					<Chip  style={{marginRight: '15px'}} className="not-active"  label="dairy" variant="outlined" />
					<Chip  style={{marginRight: '15px'}} className="not-active"  label="canned-goods" variant="outlined" />
					<Chip  style={{marginRight: '15px'}} className="not-active"  label="pasta-and-rice" variant="outlined" />
					<Chip  style={{marginRight: '15px'}} className="not-active"  label="baking-items" variant="outlined" />
			</PantryChipRow>
		</>

		<>
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
		</>
	);
}
