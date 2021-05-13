import React from 'react';
import { Header } from '../styles/Headerstyles';
import {Link} from 'react-router-dom'
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';
import {SearchIcon from '../assets/Logos/svg/icons';

export default function Layout({children}) {
    return (
		<>
			<Header>
				<div className="container header-wrapper">
					<img className="mr-auto" style={{ height: '5.5rem', borderRadius: '5px' }} src={PantryAppLogo} alt="pantry-app-logo" />
					<ul>
						<img src={ SearchIcon} alt="search-icon"/>
						<Link to="/pantryitems">PantryItems</Link>
						{/* <Link to="/pantryitems/3">Pantry details</Link> */}
						<Link to="/new">new Items</Link>
					</ul>
				</div>
			</Header>
			<div className="container">
				{children}
				Footer Component
			</div>
		</>
	);
}
