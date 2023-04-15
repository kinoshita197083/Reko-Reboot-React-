import React, { forwardRef } from 'react';
import './MenuIcon.css';

export default forwardRef(function MenuIcon(props, ref) {

    return (
        <div ref={ref} className={props.click ? 'menu-icon is-active' : 'menu-icon'} onClick={props.handleClick}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
    )
})