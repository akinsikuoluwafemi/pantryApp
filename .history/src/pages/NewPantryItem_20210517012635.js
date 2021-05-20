import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';
import {HeaderTitle } from '../styles/TextStyles';

import { Form , Select} from 'antd';


export default function NewPantryItem() {
    const [category, setCategory] = useState('');
    const [circle, setCircle] = useState('')
    const handleChange = (e) => {
        
    }

    
    return (
		<NewPantrySection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.3 }}
		>
			<HeaderTitle large>Add Pantry Item</HeaderTitle>

            <form>
                <label>Enter a new Category*</label>
				<Form.Item label="">
					<Select>
						<Select.Option value="demo">Demo</Select.Option>
					</Select>
				</Form.Item>
			</form>
		</NewPantrySection>
	);
}
