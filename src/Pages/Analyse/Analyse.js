import React, { useReducer } from 'react';
import './Analyse.css';
import DragDropUpload from '../../Components/DragDropUpload/DragDrop';
import BubbleDisplayBar from '../../Components/BubbleDisplayBar/BubbleDisplayBar';
import Spinner from '../../Components/Loading/Loading';
import { analyseAPI } from '../../api/AnalyseAPI';
import { useSelector } from 'react-redux';
import { selectedFile } from '../../Components/DragDropUpload/dragDropSlice';

export default function AnalysePage() {

    const backendURL = analyseAPI;

    const heading = "Drag & Drop to Upload File";
    const heading2 = "OR";
    const btnText = "Browse"

    const encodedImg = useSelector(selectedFile);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'uploadFile':
                return { ...state, file: action.payload };
            case 'removeFile':
                return { ...state, file: null };
            case 'isLoading':
                return { ...state, loading: true };
            case 'notLoading':
                return { ...state, loading: false };
            case 'updateResults':
                return { ...state, results: [...action.payload] }
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, { file: null, loading: false, results: [] });


    const submitFile = async (backendURL) => {
        const { fileName, src: imgURI } = encodedImg;

        //Store it temporaily for the below usecase
        dispatch({ type: 'uploadFile', payload: fileName });

        //Reduce unnecessary backend traffic
        if (fileName === state.file) return;

        dispatch({ type: 'isLoading' });
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

    const analyse = async (backendURL) => {
        let data = await submitFile(backendURL).catch(() => alert('Error: The file appears to be corrupted'));
        //https://stackoverflow.com/questions/53511974/javascript-fetch-failed-to-execute-json-on-response-body-stream-is-locked
        if (!data) return;
        data = await data.clone().json().catch((err) => alert(err)) // .json() method been called once before it is stored in cache, so it will crash without .clone()
        // console.log(data.Labels);
        dispatch({ type: 'notLoading' });
        dispatch({ type: 'updateResults', payload: data.Labels });
    };

    return (
        <div className='container-s fade-in'>
            <DragDropUpload
                heading={heading}
                subheading={heading2}
                btnText={btnText}
                eventHandle={() => { analyse(backendURL) }}
            />

            {state.results.length > 0 &&
                <BubbleDisplayBar
                    textBubbles={state.results}
                />}

            {state.loading && <Spinner />}
        </div>
    )
}
