import React from 'react';
import { Header } from '../styles/Headerstyles';
import {Link} from 'react-router-dom'

export default function Layout({children}) {
    return (
        <div className="container">
            <Header>
                <Link to=""></Link>
            </Header>
            {children}
            Footer Component
        </div>
    )
}
