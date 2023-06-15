import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

export default function Button(props) {

    const { icon, page, btnType, eventHandle, disabled } = props;

    return (
        <Link to={page || ''} className='link-remove-default'>
            <button className={btnType === 'nav' ? 'nav-btn' : 'btn'} onClick={eventHandle} disabled={disabled ? 1 : 0}>
                {icon || 'Test'}
            </button>
        </Link>
    )
}