import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { PantryItemSection, PantryItemWrapper, PantryListValues } from '../styles/PantryItemStyles';
import WholeChicken from '../assets/images/whole-chicken.png';
import Chip from "@material-ui/core/Chip";
import { Divider } from 'antd';
import Pantry


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

			{pantryArr.map()}


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