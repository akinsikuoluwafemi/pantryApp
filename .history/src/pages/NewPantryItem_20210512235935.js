import React from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';


export default function NewPantryItem() {
    return (
        <NewPantrySection
            initial={{ scaleY: 0 }}
            animate={{ scale: 1 }}
            exit={{opacity: 0}}
        >
            New PantryItem
        </NewPantrySection>
    )
}
