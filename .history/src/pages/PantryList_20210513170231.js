import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';


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

const mapStateToProps = (state) => {
	return {

	}
}

export default connect()(PantryList);