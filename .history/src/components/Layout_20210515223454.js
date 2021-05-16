import React from 'react';
import Navigation from './Navigation';
import { FooterText } from '../styles/FooterStyles';
import {} from '../assets/Logos/'

export default function Layout({children}) {
    return (
		<>
			<Navigation />
			<div className="container">
				{children}
				<FooterText>&copy; Pantry App</FooterText>
			</div>
		</>
	);
}
