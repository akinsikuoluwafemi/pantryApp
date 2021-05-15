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

			<>
				<button value="All">
					<Chip  style={{marginRight: '15px'}} className="not-active" label="All" variant="outlined" />
				</button>
				<button value="fruit and vegetables">
					<Chip  style={{marginRight: '15px'}} className="not-active"  label="fruit and vegetables" variant="outlined" />
				</button>
				<button value="dairy">
					<Chip  style={{marginRight: '15px'}} className="not-active"  label="dairy" variant="outlined" />
				</button>
				<button value="canned-goods">
					<Chip  style={{marginRight: '15px'}} className="not-active"  label="canned-goods" variant="outlined" />
				</button>
				<button value="pasta-and-rice">
					<Chip  style={{marginRight: '15px'}} className="not-active"  label="canned-goods" variant="outlined" />
				</button>
				

			</>


			{/* <PantryChipList/> */}

			

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
	return {
		pantryArr,
		query
	}
}

export default connect(mapStateToProps)(PantryList);