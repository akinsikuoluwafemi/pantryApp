import React from 'react';
import { Header } from '../styles/Headerstyles';
import {Link} from 'react-router-dom'
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';


export default function Layout({children}) {
    return (
		<>
			<Header>
				<div className="container header-wrapper">
					<img style={{ height: '5.5rem', borderRadius: '5px' }} src={PantryAppLogo} alt="pantry-app-logo" />
					<div>
						<Link to="/pantryitems">PantryItems</Link>
						<Link to="/pantryitems/3">Pantry details</Link>
						<Link to="/new">new Items</Link>
					</div>
				</div>
			</Header>
			<div className="container">
				{children}
				Footer Component
			</div>
		</>
	);
}
