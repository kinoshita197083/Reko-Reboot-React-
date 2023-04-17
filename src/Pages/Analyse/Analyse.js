import React from 'react';
import './Analyse.css';
import DragDropUpload from '../../Components/DragDropUpload/DragDrop';

export default function AnalysePage(props) {

    const imageURI = "./Asset/undraw_no_data.svg";
    const heading = "Drag & Drop to Upload File";
    const heading2 = "OR";
    const btnText = "Browse"

    return (
        <div className='container-s'>
            <DragDropUpload
                imageURI={imageURI}
                heading={heading}
                subheading={heading2}
                btnText={btnText}
            />
        </div>
    )
}
