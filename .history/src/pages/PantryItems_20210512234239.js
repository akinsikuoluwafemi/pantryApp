import React from 'react';

const PantryItems = () => {
    return (
        <PantryItemsSection
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
        
        >
            PantryItem
        </PantryItemSection>
    )
}

export default PantryItems;