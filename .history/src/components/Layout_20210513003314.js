import React from 'react';
import { Header } from '../styles/Headerstyles';
import {Link} from 'react-router-dom'

export default function Layout({children}) {
    return (
        <>
            <Header className="container">
                <div>

                </div>
				
			</Header>
		<div className="container">
			
			{children}
			Footer Component
		</div>
            
        </>
	);
}
