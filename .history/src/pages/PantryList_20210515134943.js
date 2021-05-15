import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { PantryItemSection, PantryItemWrapper, PantryListValues } from '../styles/PantryItemStyles';
import WholeChicken from '../assets/images/whole-chicken.png';
import Chip from "@material-ui/core/Chip";
import { Divider } from 'antd';
import PantryItem from '../components/PantryItem';
import PantryChipList from '../components/PantryChipList';

const PantryList = (props) => {
	
	const { pantryArr, query } = props;

	return (
		<PantryListSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<HeaderTitle large>My Pantry</HeaderTitle>

			


			<PantryChipList/>

			

			 {pantryArr.filter((val) => {
				if(query === ""){
					return val
				}else if(val.name.toLowerCase().includes(query.toLowerCase())){
					console.log(typeof val)
					return val;
				}
			}).map((pantry, key) => <PantryItem key={pantry.id} pantry={pantry}/>)} 
			
		</PantryListSection>
	);
}

const mapStateToProps = ({pantry: {pantryArr, query}}) => {
	console.log(query);
	return {
		pantryArr,
		query
	}
}

export default connect(mapStateToProps)(PantryList);