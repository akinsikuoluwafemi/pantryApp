import React from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';


export default function NewPantryItem() {
    return (
        <NewPantrySection
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{du}}
        >
            New PantryItem
        </NewPantrySection>
    )
}
