import React from 'react';

import Navigation from './Navigation';


export default function Layout({children}) {
    return (
		<>
			<Navigation />
			<div className="container">
				{children}
				<div className="">&copy; Pantry App</div>
			</div>
		</>
	);
}
