import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';
import {HeaderTitle } from '../styles/TextStyles';


import { Form, Select, Input, DatePicker, InputNumber } from 'antd';


export default function NewPantryItem() {
    
	const [category, setCategory] = useState('');
	const [quantity, setQuanity] = useState(1)
	

    const handleChange = (value) => {
        setCategory(value)
		console.log(value)
	}
	console.log(category)

	function handleDatePicker(date, dateString) {
		console.log(date, dateString);
	}

	function onChange(value) {
		console.log('changed', value);
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
					<Select placeholder="Enter a Category" onChange={handleChange}>
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
				<label>Date</label>
				<Form.Item>
					<DatePicker onChange={handleDatePicker} />
				</Form.Item>
				<label>Date</label>

				<Form.Item>
					<InputNumber value={quantity} min={1} onChange={onChange} />
				</Form.Item>
			</form>
		</NewPantrySection>
	);
}
