import React from 'react'

export default function Layout({children}) {
    return (
        <div className="container">
            Header component
            {children}
            Footer Component
        </div>
    )
}
