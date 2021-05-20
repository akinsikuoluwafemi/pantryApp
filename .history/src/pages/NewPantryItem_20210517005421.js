import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';
import {HeaderTitle } from '../styles/TextStyles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



export default function NewPantryItem() {
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        
    }

    
    return (
		<NewPantrySection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.3 }}
		>
			<HeaderTitle large bold>
				Add Pantry Item
			</HeaderTitle>

			<form>
				<FormControl variant="outlined">
					<InputLabel
						// ref={(ref) => {
						// 	this.InputLabelRef = ref;
						// }}
						htmlFor="outlined-age-simple"
					>
						Age
					</InputLabel>
					<Select
						// value={this.state.age}
						onChange={handleChange}
						// input={<OutlinedInput labelWidth={this.state.labelWidth} name="age" id="outlined-age-simple" />}
						input={<OutlinedInput  name="age" id="outlined-age-simple" />}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</form>
		</NewPantrySection>
	);
}
