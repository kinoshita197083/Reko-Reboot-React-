import React, { useImperativeHandle, useRef, useState, forwardRef } from 'react';
import './DragDrop.css';
import ImageDisplay from '../../SectionTemplate/ImageDisplay/ImageDisplay';
import Button from '../Button/Button';

const DragDropUpload = forwardRef((props, ref) => {

    const { imageURI, heading, subheading, btnText, eventHandle } = props;

    // States
    const [selectedFile, setSelectedFile] = useState();
    const [imageSrc, setImageSrc] = useState(imageURI);

    // Use for accessing the hidden input button; Perform click() when a substituted button received click event
    const hiddenUploadBtn = useRef();

    // Parsing the uploaded img into base64 for backend submission
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

    //Allow Parent Component to call a method that's defined in Child component
    //So that Parent Component can retrieve the state of its Child
    //Decoupling purpose, so that it doesn't need to pass down a function to handle file selection, which is supposed to be handle by this component
    //https://www.youtube.com/watch?v=ZtcgPhWv1e8&list=PL0Zuz27SZ-6PSdiQpSxO9zxvB0ns6m3ta&index=6&ab_channel=DaveGray
    useImperativeHandle(ref, () => ({
        getSelectedFile: () => {
            return [selectedFile.name, imageSrc];
        },
    }))

    return (
        <>
            <div className='drag-drop-area container'>
                <h1>{selectedFile ? selectedFile.name : heading}</h1>
                <h3>{selectedFile ? null : subheading}</h3>

                <div className='drag-drop-img-wrapper'>
                    <ImageDisplay imageURI={imageSrc} maxWidth={'18rem'} />
                </div>

                <div className='flex justify-center btn-group'>
                    <Button icon={btnText} eventHandle={() => { hiddenUploadBtn.current.click() }} />
                    <input ref={hiddenUploadBtn} type='file' style={{ display: 'none' }} onChange={handleChange}></input>
                    {selectedFile ? <Button icon={'Submit'} eventHandle={eventHandle} /> : null}
                </div>
            </div>
        </>
    )
})

export default React.memo(DragDropUpload);