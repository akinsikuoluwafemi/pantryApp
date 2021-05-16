import React from 'react';
import Navigation from './Navigation';
import { FooterText } from '../styles/FooterStyles';
import { AddIcon } from '../assets/Logos/svg/icons';
import Button from '@material-ui/core/Button';
import { MainLayout } from '../styles/LayoutStyles';

export default function Layout({children}) {
    return (
		<>
			<Navigation />
			<MainLayout className="container">
				{children}
				<Button style={{outline: 'none'}}>
					<AddIcon />
				</Button>
				<FooterText>&copy; Pantry App</FooterText>
			</MainLayout>
		</>
	);
}
