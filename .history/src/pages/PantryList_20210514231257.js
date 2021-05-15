import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { PantryItemSection, PantryItemWrapper, PantryListValues } from '../styles/PantryItemStyles';
import WholeChicken from '../assets/images/whole-chicken.png';
import Chip from "@material-ui/core/Chip";
import { Divider } from 'antd';
import PantryItem from '../components/PantryItem';


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

			{/* {pantryArr.filter((val) => {
				if(query === ""){
					return val
				}else if(val.name.toLowerCase().includes(query.toLowerCase())){
					return val;
				}
			}).map((pantry, key) => <PantryItem key={pantry.id} pantry={pantry}/>)} */}
			{pantryArr.filter((val) => {
					if (query === "") {
						return val;
					} else if (val.name.toLowerCase(.includes(query.toLowerCase())) {
						return val;
					}
				})
				.map((pantry, key) => (
					<>
						<PantryItemSection>
							<PantryItemWrapper>
								<img style={{ height: '8rem' }} src={WholeChicken} alt="whole-chicken" />
								<PantryListValues start>
									<span style={{ fontWeight: 'bold' }}>{pantry.name}</span>
									<span style={{ color: '#BCBCBC' }}>{pantry.weight}lb</span>
								</PantryListValues>
								<PantryListValues center>
									<span>Quantity</span>
									<span className="text-center" style={{ color: '#BCBCBC' }}>
										<Chip
											size="small"
											style={{ color: '#222', background: '#FDC039' }}
											label={pantry.quantity}
										/>
									</span>
								</PantryListValues>
							</PantryItemWrapper>
						</PantryItemSection>
						<Divider />
					</>
				))
			}
		</PantryListSection>
	);
}

const mapStateToProps = ({pantry: {pantryArr, query}}) => {
	console.log(query);
	return {
		pantryArr
	}
}

export default connect(mapStateToProps)(PantryList);