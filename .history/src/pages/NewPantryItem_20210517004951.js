import React from 'react';
import { motion } from 'framer-motion';
import { NewPantrySection } from '../styles/NewPantryStyles';
import {HeaderTitle } from '../styles/TextStyles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



export default function NewPantryItem() {
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
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel
						ref={(ref) => {
							this.InputLabelRef = ref;
						}}
						htmlFor="outlined-age-simple"
					>
						Age
					</InputLabel>
					<Select
						value={this.state.age}
						onChange={this.handleChange}
						input={<OutlinedInput labelWidth={this.state.labelWidth} name="age" id="outlined-age-simple" />}
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
