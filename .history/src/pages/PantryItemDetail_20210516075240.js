import React from 'react';
import { PantryDetailSection } from '../styles/PantryDetailStyles';
import { connect } from 'react-redux';


 function PantryItemDetail() {
    return (
		<PantryDetailSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			PantryItemDetail
		</PantryDetailSection>
	);
}

export default connect()(PantryItemDetail);