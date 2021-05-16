import React from 'react';
import { PantryDetailSection } from '../styles/PantryDetailStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';


 function PantryItemDetail({ pantryDetail }) {
	 console.log(name);
	 return (
			<PantryDetailSection
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 0.5 }}
			>
				{pantryDetail.map((item) => {
	 			// const { name, category, createdAt, expiry, note, quantity, imageSrc, weight } = item;
					
					return (
						<>
							{/* <HeaderTitle small>{item.name}</HeaderTitle> */}
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