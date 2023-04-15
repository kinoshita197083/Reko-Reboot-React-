import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

export default function Button(props) {

    return (
        <Link to={props.page} className='link-remove-default'>
            <button className={props.btnType === 'btn' ? 'btn' : 'nav-btn'}>
                {props.icon}
            </button>
        </Link>
    )
}