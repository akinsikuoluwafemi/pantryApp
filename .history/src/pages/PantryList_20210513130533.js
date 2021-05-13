import React from 'react';
import {PantryItemsSection} from '../styles/PantryListStyles';

const PantryList = () => {
    return (
		<PantryListSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			PantryList
		</PantryListSection>
	);
}

export default PantryList;