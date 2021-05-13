import React from 'react';
import Navigation from './Navigation';
import {} from '../'

export default function Layout({children}) {
    return (
		<>
			<Navigation />
			<div className="container">
				{children}
				<div className="text-center" style={{fontSize: '2rem'}}>&copy; Pantry App</div>
			</div>
		</>
	);
}
