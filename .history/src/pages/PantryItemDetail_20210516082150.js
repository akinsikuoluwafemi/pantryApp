import React from 'react';
import { PantryDetailSection } from '../styles/PantryDetailStyles';
import { connect } from 'react-redux';


 function PantryItemDetail({ pantryDetail }) {
	 const { name, category, createdAt, expiry, note, quantity  } = pantryDetail;
	 return (
			<PantryDetailSection
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 0.5 }}
			>
				PantryItemDetail
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