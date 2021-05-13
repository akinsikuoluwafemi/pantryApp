import React from 'react';
import { Header } from '../styles/Headerstyles';
import {Link} from 'react-router-dom'
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';


export default function Layout({children}) {
    return (
		<>
			<Header>
				<div className="container">
					<Link to="/pantryitems">PantryItems</Link>
					<Link to="/pantryitems/3">Pantry details</Link>
					<Link to="/new">new Items</Link>
				</div>
			</Header>
			<div className="container">
				{children}
				Footer Component
			</div>
		</>
	);
}
