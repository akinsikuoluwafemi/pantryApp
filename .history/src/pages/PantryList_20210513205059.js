import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { PantryItemSection, PantryItemWrapper } from '../styles/PantryItemStyles';
import WholeChicken from '../assets/images/whole-chicken.png';


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

			<PantryItemSection>
				<PantryItemWrapper>
					<img style={{ height: '8rem' }} src={WholeChicken} alt="whole-chicken" />
					<div>
						<span>Whole Chicken</s>
						<span>8lb</span>
					</div>
				</PantryItemWrapper>
			</PantryItemSection>
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