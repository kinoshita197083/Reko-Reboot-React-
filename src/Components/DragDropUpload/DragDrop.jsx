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
        <>
            <div className='drag-drop-area container'>
                <h1>{selectedFile ? fileName : heading}</h1>
                <h3>{selectedFile ? null : subheading}</h3>

                <div className='drag-drop-img-wrapper'>
                    <ImageDisplay imageURI={src} maxWidth={'18rem'} />
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