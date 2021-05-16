import React from 'react';
import { PantryDetailSection, PantryImageWrapper } from '../styles/PantryDetailStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';

import WholeChicken from '../assets/images/whole-chicken.png';

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
							<PantryImageWrapper style={{display: 'flex', justifyContent: 'center'}} className="m-auto">
								<img className="img-fluid" src={WholeChicken} alt={name} />
							<PantryImageWrapper style={{display: 'flex', justifyContent: 'center'}} className="m-auto">
							</>
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