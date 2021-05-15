import React from 'react';
import { PantryItemSection, PantryItemWrapper, PantryListValues} from '../styles/PantryItemStyles';
import Chip from '@material-ui/core/Chip';
import { Divider } from 'antd';


export default function PantryItem({pantry}) {
    const {name, quantity, weight, imageSrc } = pantry;
    console.log(pantry)
    
    return (
		<>
			<PantryItemSection>
				<PantryItemWrapper>
					<img style={{ height: '8rem' }} src={imageSrc} alt="whole-chicken" />
					<PantryListValues start>
						<span style={{ fontWeight: 'bold' }}>Whole Chicken</span>
						<span style={{ color: '#BCBCBC' }}>8lb</span>
					</PantryListValues>
					<PantryListValues center>
						<span>Quantity</span>
						<span className="text-center" style={{ color: '#BCBCBC' }}>
							<Chip size="small" style={{ color: '#222', background: '#FDC039' }} label="2" />
						</span>
					</PantryListValues>
				</PantryItemWrapper>
			</PantryItemSection>
			<Divider />
		</>
	);
}
