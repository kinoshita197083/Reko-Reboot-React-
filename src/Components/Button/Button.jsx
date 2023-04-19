import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

export default function Button(props) {

    const { icon, page, btnType, eventHandle } = props;

    return (
        <Link to={page || ''} className='link-remove-default'>
            <button className={btnType === 'nav' ? 'nav-btn' : 'btn'} onClick={eventHandle}>
                {icon || 'Test'}
            </button>
        </Link>
    )
}