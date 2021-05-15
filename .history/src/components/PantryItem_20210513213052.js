import React from 'react';
import { PantryItemSection, PantryItemWrapper, PantryListValues} from '../styles/PantryItemStyles';

export default function PantryItem(props) {
    const {} = props
    return (
		<>
			<PantryItemSection>
				<PantryItemWrapper>
					<img style={{ height: '8rem' }} src={WholeChicken} alt="whole-chicken" />
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
