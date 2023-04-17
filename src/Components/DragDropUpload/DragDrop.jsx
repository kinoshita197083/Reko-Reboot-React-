import React from 'react';
import './DragDrop.css';
import ImageDisplay from '../../SectionTemplate/ImageDisplay/ImageDisplay';
import Button from '../Button/Button';

export default function DragDropUpload(props) {

    const { imageURI, heading, subheading, btnText } = props;

    return (
        <div className='drag-drop-area container'>
            <h1>{heading}</h1>
            <h3>{subheading}</h3>
            <div className='drag-drop-img-wrapper'>
                <ImageDisplay imageURI={imageURI} maxWidth={'18rem'} />
            </div>
            <Button icon={btnText} />
        </div>
    )
}