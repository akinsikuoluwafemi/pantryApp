import React from 'react';
import {Header} from '../s'

export default function Layout({children}) {
    return (
        <div className="container">
            Header component
            {children}
            Footer Component
        </div>
    )
}
