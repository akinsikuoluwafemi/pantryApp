import React from 'react';
import { Header } from '../styles/Headerstyles';
import {Link} from 'react-router-dom'

export default function Layout({children}) {
    return (
		<div className="container">
			<Header>
				<Link to="/pantryitems">PantryItems</Link>
				<Link to="/pantryitems/3">Pantry details</Link>
				<Link to="/new">new Items</Link>
			</Header>
			{children}
			Footer Component
		</div>
	);
}
