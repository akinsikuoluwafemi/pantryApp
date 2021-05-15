import React from 'react';
import {} from '../'

export default function PantryItem() {
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
