import React from 'react';
import 

const PantryItems = () => {
    return (
        <PantryItemsSection
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
        
        >
            PantryItem
        </PantryItemsSection>
    )
}

export default PantryItems;