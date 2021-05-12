import React from 'react';
import {Header} from '../'

export default function Layout({children}) {
    return (
        <div className="container">
            Header component
            {children}
            Footer Component
        </div>
    )
}
