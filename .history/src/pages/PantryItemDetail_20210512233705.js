import React from 'react';
import { PantryDetailSection } from '../styles/PantryDetailStyles';


export default function PantryItemDetail() {
    return (
		<PantryDetailSection initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			PantryItemDetail
		</PantryDetailSection>
	);
}
