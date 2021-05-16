import React from 'react';
import Navigation from './Navigation';
import { FooterText } from '../styles/FooterStyles';
import { AddIcon } from '../assets/Logos/svg/icons';

export default function Layout({children}) {
    return (
		<>
			<Navigation />
			<div className="container">
				{children}
				<AddIcon/>
				<FooterText>&copy; Pantry App</FooterText>
			</div>
		</>
	);
}
