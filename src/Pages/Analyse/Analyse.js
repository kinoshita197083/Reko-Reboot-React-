import React from 'react';
import './Analyse.css';
import DragDropUpload from '../../Components/DragDropUpload/DragDrop';

export default function AnalysePage(props) {

    const imageURI = "./Asset/undraw_no_data.svg";
    const heading = "Drag & Drop to Upload File";
    const heading2 = "OR";
    const btnText = "Browse"

    const analyse = () => {
        console.log('developing')
    }

    return (
        <div className='container-s fade-in'>
            <DragDropUpload
                imageURI={imageURI}
                heading={heading}
                subheading={heading2}
                btnText={btnText}
                eventHandle={analyse}
            />
        </div>
    )
}
