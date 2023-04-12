import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

export default function Navbar(props) {

    return (
        <>
            <nav className='navbar'>
                <Link to='/'>
                    <h1 className='nav-logo'>Reko</h1>
                </Link>
                <div className='menu-icon'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <ul className='nav-menu'>
                    {props.children}
                </ul>
            </nav>
        </>
    )
}