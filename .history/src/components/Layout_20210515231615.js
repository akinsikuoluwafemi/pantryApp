import React from 'react';
import Navigation from './Navigation';
import { FooterText } from '../styles/FooterStyles';
import { AddIcon } from '../assets/Logos/svg/icons';
import Button from '@material-ui/core/Button';
import { MainLayout } from '../styles/LayoutStyles';
import { Link } from 'react-router-dom';


export default function Layout({children}) {
    return (
		<>
			<Navigation />
			<MainLayout className="container">
				{children}
				<Link to="/pantryitems/new">
					<Button style={{ outline: 'none' }}>
						<AddIcon />
					</Button>
				</Link>
			</MainLayout>
			
			<FooterText>&copy; Pantry App</FooterText>
		</>
	);
}
