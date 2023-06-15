import React from 'react';
import './ImageDisplay.css';

export default function ImageDisplay(props) {

    let { imageURI, description, hideInMobile, imageWidth, whiteFiltered } = props;

    hideInMobile = hideInMobile ? 'hideInMobile' : '';

    return (
        <div className={`image-wrapper ${hideInMobile}`} style={{ width: imageWidth }}>
            <img
                src={imageURI}
                width='100%'
                height='100%'
                alt={description}
                loading='lazy'
                className={whiteFiltered ? 'brightness-0' : ''}
            />
        </div>
    )
}