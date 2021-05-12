import React from 'react';
import { Header } from '../styles/Headerstyles';
import {} rom 'react-router-dom'

export default function Layout({children}) {
    return (
        <div className="container">
            <Header>
                Header Component
            </Header>
            {children}
            Footer Component
        </div>
    )
}
