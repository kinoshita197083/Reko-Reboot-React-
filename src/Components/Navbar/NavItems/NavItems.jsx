import React from 'react'
import { Link } from 'react-router-dom'
import './NavItems.css'
import Button from '../../Button/Button'

export default function NavItem(props) {


    return (
        <li className='nav-links'>
            {props.type === 'text' ?

                <Link to={props.page} className='item'>
                    {props.icon}
                </Link>
                :
                <Button
                    icon={props.icon}
                    to={props.page}
                    btnType={'nav'}
                />}
        </li>
    )
}