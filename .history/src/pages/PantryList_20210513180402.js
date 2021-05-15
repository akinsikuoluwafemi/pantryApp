import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';

const PantryList = (props) => {
	
	const { pantryArr } = props;

	return (
		<PantryListSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<HeaderTitle large>My Pantry</HeaderTitle>
			
			<div>

			</div>


		</PantryListSection>
	);
}

const mapStateToProps = ({pantry: {pantryArr}}) => {
	console.log(pantryArr)
	return {
		pantryArr
	}
}

export default connect(mapStateToProps)(PantryList);