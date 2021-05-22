import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';
import {HeaderTitle } from '../styles/TextStyles';
import '../styles/ant-styles.css';
import Button from '@material-ui/core/Button';
// import DatePicker from "react-datepicker";





import { Form, Select, Input, InputNumber, DatePicker, Space } from 'antd';


export default function NewPantryItem() {
	const [startDate, setStartDate] = useState(new Date());

	
	const { TextArea } = Input;

	const [category, setCategory] = useState('');
	const [quantity, setQuanity] = useState(1);
	const [size, setSize] = useState(0);
	const [measurement, setMeasurement] = useState('');
	const [name, setName] = useState('');
	const [expiry, setExpiry] = useState(new Date());
	const [notes, setNotes] = useState('');


	

    

	const handleNameChange = (e) => {
		setName(e.target.value)
		console.log(name)
	}

	function handleDatePicker(date, dateString) {
		console.log(dateString);
		console.log(date._d);
		setExpiry(dateString)
	}

	

	const handleQuantityChange = (value) => {
		setQuanity(value)
		console.log(value)

	}

	const handleCategory = (value) => {
        setCategory(value)
		console.log(value)

	}

	const handleSize = (value) => {
		setSize(value)
		console.log(size)
	}

	function handleMeasurement(value) {
		console.log(value);
		setMeasurement(value)


	}	

	const handleNotes = (e) => {
		setNotes(e.target.value)
	}

	

	

	// const unitConversions = (num, unit) => {
	// 	let measuredValue = num;

	// 	if(unit === 'liters'){
	// 		measuredValue = measuredValue * 1
	// 		// console.log('measuredValue: ' + measuredValue + unit)

	// 	}else if(unit ===  "meter-cube" ){
	// 		measuredValue = measuredValue * 1000;
	// 		// console.log('measuredValue: ' + measuredValue + 'm³');
			
			
	// 	}else if(unit === 'pounds'){
	// 		measuredValue = measuredValue * 1;
	// 		// console.log('measuredValue: ' + measuredValue + unit);

			
	// 	}else if(unit === 'grams'){
	// 		measuredValue = measuredValue * 453.592;
	// 		// console.log('measuredValue: ' + measuredValue.toFixed(2) + unit);
	// 	}
	// 	console.log(measuredValue);
	// }

	// unitConversions(size, measurement);


	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			id: new Date().getMilliseconds(),
			category: category,
			name: name,
			createdAt: new Date(),
			expiry: expiry,
			weight: size,
			unit: measurement,
			quantity: quantity,
			imageSrc: '',
			notes: notes

		};

		console.log(data)

		if (category.length !== '' && name.length !== '')
		{
			
		}








	}


	

    
    return (
		<NewPantrySection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.3 }}
		>
			<HeaderTitle large>Add Pantry Item</HeaderTitle>

			<form onSubmit={handleSubmit}>
				<label>Category*</label>
				<Form.Item label="">
					<Select className="ant-style" placeholder="Enter a Category" onChange={handleCategory}>
						<Select.Option value="meat-and-poultry" name="meat-and-poultry">
							meat and poultry
						</Select.Option>
						<Select.Option value="fruit-and-vegetables" name="fruit-and-vegetables">
							fruit and vegetables
						</Select.Option>
						<Select.Option value="dairy" name="dairy">
							dairy
						</Select.Option>
						<Select.Option value="canned-goods" name="canned-goods">
							canned-goods
						</Select.Option>
						<Select.Option value="baking-items" name="baking-items">
							baking-items
						</Select.Option>
						<Select.Option value="liquid-items" name="liquid-items">
							liquid-items
						</Select.Option>
					</Select>
				</Form.Item>
				<label>Food Name*</label>
				<Form.Item label="">
					<Input placeholder="Enter a food name" onChange={handleNameChange} value={name} />
				</Form.Item>
				<label>Expiry Date</label>
				<Form.Item>
					<DatePicker style={{ display: 'flex' }} onChange={handleDatePicker} />
					{/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
				</Form.Item>

				<Space>
					<Form.Item label="Quantity">
						<InputNumber min={1} onChange={handleQuantityChange} value={quantity} />
					</Form.Item>
					<Form.Item label="Size">
						<InputNumber min={0} onChange={handleSize} value={size}  />
					</Form.Item>
					<Form.Item label="Measurement">
						<Select onChange={handleMeasurement} placeholder="measur..">
							{category === 'liquid-items' ? (
								<>
									<Select.Option value="liters">Liters</Select.Option>
									<Select.Option
										value="meter-cube"
									>
										Volume
									</Select.Option>
								</>
							) : (
								<>
									<Select.Option value="pounds">Pounds</Select.Option>
									<Select.Option value="grams">Grams</Select.Option>
								</>
							)}
						</Select>
					</Form.Item>
				</Space>
				<br />

				<label>Notes</label>
				<Form.Item>
					<TextArea rows={5} onChange={handleNotes} value={notes} />
				</Form.Item>

				<Button type="submit" style={{ background: '#FDC039', width: '100%', padding: '1rem 0' }}>
					Add New Item
				</Button>
			</form>
		</NewPantrySection>
	);
}
