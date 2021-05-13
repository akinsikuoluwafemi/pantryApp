import React from 'react';
import { Header } from '../styles/Headerstyles';
import {Link} from 'react-router-dom'
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';
import { SearchIcon,CheffCap } from '../assets/Logos/svg/icons';



export default function Layout({children}) {
    return (
		<>
			<Navigation/>
			<div className="container">
				{children}
				Footer Component
			</div>
		</>
	);
}
