import React, { useRef, useState } from 'react';
import './DragDrop.css';
import ImageDisplay from '../../SectionTemplate/ImageDisplay/ImageDisplay';
import Button from '../Button/Button';
import { setEncodedImg, selectedFile as globalFile } from './dragDropSlice';
import { useDispatch, useSelector } from 'react-redux';

const DragDropUpload = (props) => {

    const { heading, subheading, btnText, eventHandle } = props;

    const dispatch = useDispatch();

    // States
    const [selectedFile, setSelectedFile] = useState();
    const [dragOver, setDragOver] = useState(false);
    const { src, fileName } = useSelector(globalFile);

    // Use for accessing the hidden input button; Perform click() when a substituted button received click event
    const hiddenUploadBtn = useRef();

    // Parsing the uploaded img into base64 for backend submission
    const parseFileIntoImageURI = (file) => {
        let fileReader = new FileReader();

        fileReader.onload = () => {
            dispatch(
                setEncodedImg(fileReader.result, file.name)
            )
        }
        fileReader.readAsDataURL(file);
    }

    const handleChange = (e) => {
        let input = e.target.files[0];

        if (!input) return;

        handleSelectedFile(input);
    };

    const handleSelectedFile = (file) => {
        if (file.size > 7097152) {
            alert("Error: File size limite exceeded 7MB");
        } else if (!validateFileType(file)) {
            alert("Error: Invalid File Type");
        } else {
            setSelectedFile(file);
            parseFileIntoImageURI(file);
        }
    }

    const validateFileType = (file) => {
        let validTypes = ["image/jpg", "image/jpeg", "image/png", "image/JPEG", "image/HEIF"];
        return validTypes.includes(file.type);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragOver(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        handleSelectedFile(e.dataTransfer.files[0])
    };

    return (
        <>
            <div
                className='drag-drop-area container'
                style={{ border: dragOver ? '3px solid tomato' : '' }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}>

                <h1>{selectedFile ? fileName : heading}</h1>
                <h3>{selectedFile ? null : subheading}</h3>

                <div className='drag-drop-img-wrapper'>
                    <ImageDisplay imageURI={src} imageWidth={'50%'} />
                </div>

                <div className='flex justify-center btn-group'>
                    <Button icon={btnText} eventHandle={() => { hiddenUploadBtn.current.click() }} />
                    <input ref={hiddenUploadBtn} type='file' style={{ display: 'none' }} onChange={handleChange}></input>
                    {selectedFile ? <Button icon={'Submit'} eventHandle={eventHandle} /> : null}
                </div>
            </div>
        </>
    )
}

export default React.memo(DragDropUpload);