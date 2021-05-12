import React from 'react';
import { Header } from '../styles/Headerstyles';

export default function Layout({children}) {
    return (
        <div className="container">
            <Header>
                
            </Header>
            {children}
            Footer Component
        </div>
    )
}
