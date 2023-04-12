import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

export default function Button(props) {

    return (
        <button className='nav-btn'>
            <Link to={props.page}>
                {props.icon}
            </Link>
        </button>
    )
}