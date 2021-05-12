import React from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';


export default function NewPantryItem() {
    return (
        <NewPantrySection initial={{opacity: 0}} animate={{}}>
            New PantryItem
        </NewPantrySection>
    )
}
