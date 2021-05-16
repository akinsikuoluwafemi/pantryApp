import React from 'react';
import { PantryDetailSection } from '../styles/PantryDetailStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';

// import WholeChicken from '../assets/images/whole-chicken.png';
import WholeChicken from '../'

 function PantryItemDetail({ pantryDetail }) {
	 return (
			<PantryDetailSection
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 0.5 }}
			>
				{pantryDetail.map((item) => {
	 			const { name, category, createdAt, expiry, note, quantity, imageSrc, weight } = item;
					
					return (
						<>
							<HeaderTitle small>{name}</HeaderTitle>
						</>
					);
				}
					
				)}

				{/* PantryItemDetail */}
			</PantryDetailSection>
		);
 }

 const mapStateToProps = ({ pantry: { pantryDetail } }) => {
		console.log(pantryDetail);
		return {
			pantryDetail,
		};
 };



export default connect(mapStateToProps)(PantryItemDetail);