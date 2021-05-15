import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { PantryItemSection, PantryItemWrapper, PantryListValues } from '../styles/PantryItemStyles';
import WholeChicken from '../assets/images/whole-chicken.png';
import Chip from '@material-ui/core/Chip';
import { Divider } from 'antd';
import PantryItem from '../components/PantryItem';
import PantryChipList from '../components/PantryChipList';
import { PantryChipRow } from '../styles/PantryChipStyles';
import PantryItemList from '../components/PantryItemList';
import { filteredPantryChip } from '../redux/actions/pantryActions';

const Home = (props) => {
	const { pantryArr, query, filteredPantryChip } = props;

	const handleChips = (e) => {
		console.log(e.target.value);
	};

	return (
		<PantryListSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<HeaderTitle large>My Pantry</HeaderTitle>

			<PantryItemList pantry={pantryArr} handleChips={handleChips} filteredPantryChip={filteredPantryChip} />
		</PantryListSection>
	);
};

const mapStateToProps = ({ pantry: { pantryArr, query, pantr } }) => {
	return {
		pantryArr,
		query,
	};
};

export default connect(mapStateToProps, {filteredPantryChip})(Home);
