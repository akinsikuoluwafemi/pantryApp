import React from 'react';
import { Header } from '../styles/Headerstyles';
import {Link} from 'react-router-dom'
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';


export default function Layout({children}) {
    return (
		<>
			<Header >
				<div className="container header-wrapper">
					<img style={{ height: '5.5rem', borderRadius: '5px' }} src={PantryAppLogo} alt="pantry-app-logo" />
					
				</div>
			</Header>
			<div className="container">
				{children}
				Footer Component
			</div>
		</>
	);
}
