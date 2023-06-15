import React from 'react'
import { Link } from 'react-router-dom'
import './NavItems.css'
import Button from '../../Button/Button'
import useAuth from '../../../Hook/useAuth';

export default function NavItem(props) {

    const { icon, page, type } = props;
    const { removeAuth } = useAuth();

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
                    eventHandle={removeAuth}
                    disabled
                />}
        </li>
    )
}