import React, { useRef, useState } from 'react';
import './DragDrop.css';
import ImageDisplay from '../../SectionTemplate/ImageDisplay/ImageDisplay';
import Button from '../Button/Button';

export default function DragDropUpload(props) {

    const { imageURI, heading, subheading, btnText, eventHandle } = props;

    //states
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(imageURI);
    const inputRef = useRef(null);

    const parseFileIntoImageURI = (file) => {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            setImageSrc(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

    const handleChange = (e) => {
        let input = e.target.files[0];

        if (!input) return;

        if (input.size > 7097152) {
            alert("Error: File size limite exceeded 7MB");
            input = '';
        } else if (!validateFileType(input)) {
            alert("Error: Invalid File Type");
            input = '';
        } else {
            setSelectedFile(input);
            parseFileIntoImageURI(input);
        }
    };

    const validateFileType = (file) => {
        let validTypes = ["image/jpg", "image/jpeg", "image/png", "image/JPEG", "image/HEIF"];
        return validTypes.includes(file.type);
    };

    return (
        <div className='drag-drop-area container'>
            <h1>{selectedFile ? selectedFile.name : heading}</h1>
            <h3>{selectedFile ? null : subheading}</h3>

            <div className='drag-drop-img-wrapper'>
                <ImageDisplay imageURI={imageSrc} maxWidth={'18rem'} />
            </div>

            <div className='flex justify-center btn-group'>
                <Button icon={btnText} eventHandle={() => { inputRef.current.click() }} />
                <input ref={inputRef} type='file' style={{ display: 'none' }} onChange={handleChange}></input>
                {selectedFile ? <Button icon={'Submit'} eventHandle={eventHandle} /> : null}
            </div>
        </div>
    )
}