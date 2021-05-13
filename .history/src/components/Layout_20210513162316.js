import React from 'react';
import Navigation from './Navigation';
import { FooterText} from '../styles/FooterStyles';

export default function Layout({children}) {
    return (
		<>
			<Navigation />
			<div className="container">
				{children}
				<Footer className="text-center" style={{fontSize: '2rem'}}>&copy; Pantry App</Footer>
			</div>
		</>
	);
}
