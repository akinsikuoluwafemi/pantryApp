import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';
import {HeaderTitle } from '../styles/TextStyles';
import {  KeyboardDatePicker } from '@material-ui/pickers';


import { Form , Select, Input} from 'antd';


export default function NewPantryItem() {
    
	const [category, setCategory] = useState('');
	
	

    const handleChange = (value) => {
        setCategory(value)
		console.log(value)
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
				<label>Category*</label>
				<Form.Item label="">
					<Select value={category} placeholder="Enter a Category" onChange={handleChange}>
						<Select.Option value="meat and poultry">meat and poultry</Select.Option>
						<Select.Option value="fruit and vegetables">fruit and vegetables</Select.Option>
						<Select.Option value="dairy">dairy</Select.Option>
						<Select.Option value="canned-goods">canned-goods</Select.Option>
						<Select.Option value="baking-items">baking-items</Select.Option>
					</Select>
				</Form.Item>
				<label>Food Name*</label>
				<Form.Item label="">
					<Input placeholder="Enter a food name" />
				</Form.Item>
			</form>
		</NewPantrySection>
	);
}
