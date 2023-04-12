import React from 'react'
import { Link } from 'react-router-dom'
import './NavItems.css'

export default function NavItem(props) {

    return (
        <li key={props.id} className='nav-links'>
            <Link to={props.page} className='item'>
                {props.icon}
            </Link>
        </li>
    )
}