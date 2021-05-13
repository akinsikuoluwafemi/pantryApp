import React from 'react';
import {Link} from 'react-router-dom'
import PantryAppLogo from '../assets/Logos/PantryAppLogo.svg';
import { SearchIcon,CheffCap } from '../assets/Logos/svg/icons';
import Navigation from './Navigation';


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
