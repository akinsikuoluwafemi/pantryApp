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

const PantryList = (props) => {
	const { pantryArr, query } = props;

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

			<PantryChipRow>
				<Chip style={{ marginRight: '15px' }} className="not-active" label="All" variant="outlined" />
				<Chip
					style={{ marginRight: '15px' }}
					className="not-active"
					label="fruit and vegetables"
					variant="outlined"
				/>
				<Chip style={{ marginRight: '15px' }} className="not-active" label="dairy" variant="outlined" />
				<Chip style={{ marginRight: '15px' }} className="not-active" label="canned-goods" variant="outlined" />
				<Chip
					style={{ marginRight: '15px' }}
					className="not-active"
					label="pasta-and-rice"
					variant="outlined"
				/>
				<Chip style={{ marginRight: '15px' }} className="not-active" label="baking-items" variant="outlined" />
			</PantryChipRow>

			{/* <PantryChipList/> */}

			{pantryArr
				.filter((val) => {
					if (query === '') {
						return val;
					} else if (val.name.toLowerCase().includes(query.toLowerCase())) {
						console.log(typeof val);
						return val;
					}
				})
				.map((pantry, key) => (
					<PantryItemList key={pantry.id} pantry={pantry} />
				))}
		</PantryListSection>
	);
};

const mapStateToProps = ({ pantry: { pantryArr, query } }) => {
	return {
		pantryArr,
		query,
	};
};

export default connect(mapStateToProps)(PantryList);
