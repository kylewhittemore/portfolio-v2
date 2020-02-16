import React from 'react';
import Navigation from '../../components/Navigation';
import './style.css'

export default function ({ children }) {

    return (
        <div>
            <Navigation />
            <div className='navbar-offset-top'>
                {children}
            </div>
        </div>
    )
}