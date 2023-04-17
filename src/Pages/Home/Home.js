import React from 'react';
import './Home.css';
import ClassicSection from '../../SectionTemplate/Classic/Classic';
import Button from '../../Components/Button/Button';
import ImageDisplay from '../../SectionTemplate/ImageDisplay/ImageDisplay';

export default function HomePage(props) {

    //Classic section contents
    const heading = "Analyse JPG and PNG";
    const content1 = "A fully managed service that can detect labels of the uploaded image.";

    // Image sub-section
    const imageURI = "/Asset/undraw_the_search.svg";

    return (
        // Classic Two-Columns-Layout
        <div className='container even-columns'>
            <ClassicSection heading={heading} firstPara={content1}>
                <Button icon='Get Started' />
            </ClassicSection>

            <ImageDisplay imageURI={imageURI} hideInMobile={true} />
        </div>
    )
}