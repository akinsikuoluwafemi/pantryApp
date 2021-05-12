import React from 'react';
import {Header} from '../styles/'

export default function Layout({children}) {
    return (
        <div className="container">
            Header component
            {children}
            Footer Component
        </div>
    )
}
