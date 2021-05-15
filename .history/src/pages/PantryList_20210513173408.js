import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import {} from '../st'

const PantryList = () => {
    return (
		<PantryListSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<p>My Pantry</p>
		</PantryListSection>
	);
}

const mapStateToProps = (state) => {
	
	return {
		state
	}
}

export default connect()(PantryList);