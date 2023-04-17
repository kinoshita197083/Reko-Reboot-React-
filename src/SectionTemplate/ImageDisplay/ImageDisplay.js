import React from 'react';
import './ImageDisplay.css';

export default function ImageDisplay(props) {

    return (
        <div className='image-wrapper'>
            <img
                src={props.imageURI}
                width='100%'
                height='100%'
                alt={props.description}
                loading='lazy'
            />
        </div>
    )
}