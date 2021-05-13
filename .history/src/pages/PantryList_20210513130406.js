import React from 'react';
import {PantryItemsSection} from '../styles/PantryItemsStyles';

const PantryItems = () => {
    return (
		<PantryItemsSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			PantryItem
		</PantryItemsSection>
	);
}

export default PantryItems;