import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import MenuIcon from '../MenuIcon/MenuIcon';

export default function Navbar(props) {

    const [click, setClick] = useState(false);
    const navbarRef = useRef();

    const closeMenu = (e) => {
        if (navbarRef && !navbarRef.current.contains(e.target)) {
            setClick(false)
        }
    };

    const handleCLick = () => {
        setClick(!click)
    };

    useEffect(() => {
        document.addEventListener('click', closeMenu)

        return () => {
            document.body.removeEventListener('click', closeMenu);
        }
    }, [])

    return (
        <nav className='navbar'>
            <Link to='/'>
                <h1 className='nav-logo'>Reko</h1>
            </Link>
            <MenuIcon
                handleClick={handleCLick}
                ref={navbarRef}
                click={click}
            />
            <ul className={click ? 'nav-menu is-active' : 'nav-menu'}>
                {props.children}
            </ul>
        </nav>
    )


}