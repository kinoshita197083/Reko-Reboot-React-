import React from 'react'
import { Link } from 'react-router-dom'
import './NavItems.css'
import Button from '../../Button/Button'

export default function NavItem(props) {

    const { icon, page, type } = props;

    return (
        <li className='nav-links'>
            {type === 'text' ?

                <Link to={page} className='item'>
                    {icon}
                </Link>
                :
                <Button
                    icon={icon}
                    to={page}
                    btnType={'nav'}
                />}
        </li>
    )
}