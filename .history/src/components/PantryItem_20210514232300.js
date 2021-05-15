import React from 'react';
import { PantryItemSection, PantryItemWrapper, PantryListValues} from '../styles/PantryItemStyles';
import Chip from '@material-ui/core/Chip';
import { Divider } from 'antd';
// import Divider from '@material-ui/core/Divider';

import WholeChicken from '../assets/images/whole-chicken.png';


export default function PantryItem({pantry}) {
    const {name, quantity, weight, imageSrc } = pantry;
    console.log(pantry)
    
    return (
		<>
			<PantryItemSection>
				<PantryItemWrapper>
					<img style={{ height: '8rem' }} src={WholeChicken} alt="whole-chicken" />
					<PantryListValues start>
                        <span style={{ fontWeight: 'bold', texttr }}>{ name}</span>
                        <span style={{ color: '#BCBCBC' }}>{ weight}lb</span>
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
