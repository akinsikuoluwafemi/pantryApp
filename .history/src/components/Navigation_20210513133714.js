import React from 'react';
import { Header } from '../styles/Headerstyles';
import { Link } from 'react-router-dom';
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';
import { SearchIcon, CheffCap } from '../assets/Logos/svg/icons';
import IconButton from '@material-ui/core/IconButton';


export default function Navigation() {
    return (
		<Header>
			<div className="container header-wrapper">
				<img
					className="mr-auto"
					style={{ height: '5.5rem', borderRadius: '5px' }}
					src={PantryAppLogo}
					alt="pantry-app-logo"
				/>
				<ul>
					<span className="mr-5" onClick={() => alert('yes')}>
					</span>
					<IconButton style={{outline: 'none', marg}} aria-label="search" color="inherit">
						<SearchIcon alt="search Icon" />

					</IconButton>

					<span>
						<CheffCap alt="pantry-items" />
					</span>
					{/* <Link to="/pantryitems">PantryItems</Link> */}
					{/* <Link to="/pantryitems/3">Pantry details</Link> */}
					{/* <Link to="/new">new Items</Link> */}
				</ul>
			</div>
		</Header>
	);
}
