import React from 'react';
import { PantryDetailSection } from '../styles/PantryDetailStyles';


export default function PantryItemDetail() {
    return (
        <PantryDetailSection
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{scaleY: 0}}
        
        >
            PantryItemDetail
        </PantryDetailSection>
    )
}
