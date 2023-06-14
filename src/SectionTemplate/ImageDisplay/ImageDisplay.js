import React from 'react';
import './ImageDisplay.css';

export default function ImageDisplay(props) {

    let { imageURI, description, hideInMobile, imageWidth } = props;

    hideInMobile = hideInMobile ? 'hideInMobile' : '';

    return (
        <div className={`image-wrapper ${hideInMobile}`} style={{ width: imageWidth }}>
            <img
                src={imageURI}
                width='100%'
                height='100%'
                alt={description}
                loading='lazy'
            />
        </div>
    )
}