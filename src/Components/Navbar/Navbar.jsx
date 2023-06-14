import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import MenuIcon from '../MenuIcon/MenuIcon';

export default function Navbar(props) {

    const [click, setClick] = useState(false);
    const [changeNavColor, setChangeNavColor] = useState(false);
    const navbarRef = useRef();

    const closeMenu = (e) => {
        if (navbarRef && !navbarRef.current.contains(e.target)) {
            setClick(false)
        }
    };

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setChangeNavColor(true);
        } else {
            setChangeNavColor(false);
        }
    }

    window.addEventListener('scroll', changeNavbarColor);

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
        <nav className='navbar' style={{ backgroundColor: changeNavColor ? 'rgb(26, 25, 25, 0.6)' : '' }}>
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