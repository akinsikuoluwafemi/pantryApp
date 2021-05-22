import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';
import {HeaderTitle } from '../styles/TextStyles';


import { Form, Select, Input, DatePicker, InputNumber, Space } from 'antd';


export default function NewPantryItem() {
    const { TextArea } = Input;

	const [category, setCategory] = useState('');
	const [quantity, setQuanity] = useState(1);
	const [amount]
	

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
		setQuanity(value)
	}


	function handleMeasurement(value) {
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
						<Select.Option value="liquid-items">liquid-items</Select.Option>
					</Select>
				</Form.Item>
				<label>Food Name*</label>
				<Form.Item label="">
					<Input placeholder="Enter a food name" />
				</Form.Item>
				<label>Expiry Date</label>
				<Form.Item>
					<DatePicker style={{ display: 'flex' }} onChange={handleDatePicker} />
				</Form.Item>

				<Space>
					{/* <label>Quantity</label> */}
					<Form.Item label="Quantity">
						<InputNumber min={1} onChange={onChange} />
					</Form.Item>
					{/* <label>Value</label> */}
					<Form.Item label="Value">
						<InputNumber min={0} onChange={onChange} />
					</Form.Item>
					{/* <label>Measurement</label> */}
					<Form.Item label="Measurement">
						<Select onChange={handleChange} placeholder="measurement">
							<Select.Option value="pounds">Pounds</Select.Option>
							<Select.Option value="grams">Grams</Select.Option>
							<Select.Option value="liters">Liters</Select.Option>
						</Select>
					</Form.Item>
				</Space>

				<label>Notes</label>
				<Form.Item>
					<TextArea rows={4} />
				</Form.Item>
			</form>
		</NewPantrySection>
	);
}
