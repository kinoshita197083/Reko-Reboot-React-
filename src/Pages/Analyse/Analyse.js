/*
    Access child's state by passing ref down to the CHILD Component

    Reference:
    https://adrianfdez469.medium.com/keep-react-child-state-on-the-child-if-possible-d531f0715408
*/
import React, { useRef, useState } from 'react';
import './Analyse.css';
import DragDropUpload from '../../Components/DragDropUpload/DragDrop';
import BubbleDisplayBar from '../../Components/BubbleDisplayBar/BubbleDisplayBar';

export default function AnalysePage() {

    const imageURI = "./Asset/undraw_no_data.svg";
    const heading = "Drag & Drop to Upload File";
    const heading2 = "OR";
    const btnText = "Browse"
    const backendURL = "https://gc6qq4wfde.execute-api.ap-southeast-2.amazonaws.com/prod";

    const dragDropRef = useRef();
    const [selectedFile, setSelectedFile] = useState();
    const [results, setResults] = useState([]);

    const submitFile = async () => {
        //Bind child's state to the parent for keep tracking
        const [fileName, imgURI] = dragDropRef.current.getSelectedFile();
        setSelectedFile(fileName);

        //Reduce unnecessary backend traffic
        if (fileName === selectedFile) return;

        let response = await fetch(backendURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: fileName,
                file: imgURI.substring(imgURI.indexOf(',') + 1)
            })
        });
        return response;
    };

    const analyse = async () => {
        let data = await submitFile().catch(() => alert('Error: The file appears to be corrupted'));
        //https://stackoverflow.com/questions/53511974/javascript-fetch-failed-to-execute-json-on-response-body-stream-is-locked
        if (!data) return;
        data = await data.clone().json().catch((err) => alert(err)) // .json() method been called once before it is stored in cache, so it will crash without .clone()
        console.log(data);
        setResults(data.Labels);
    };

    return (
        <div className='container-s fade-in'>
            <DragDropUpload
                imageURI={imageURI}
                heading={heading}
                subheading={heading2}
                btnText={btnText}
                eventHandle={analyse}
                ref={dragDropRef}
            />

            {results.length > 0 &&
                <BubbleDisplayBar
                    results={results}
                />}
        </div>
    )
}
