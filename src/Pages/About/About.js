import React from 'react';
import './About.css';
import ClassicSection from '../../SectionTemplate/Classic/Classic';
import ImageDisplay from '../../SectionTemplate/ImageDisplay/ImageDisplay';

export default function AboutPage(props) {

    //Classic section contents
    const heading = "What exactly is Reko?";
    const content1 = "Reko is an image analysing tool that is powered by Amazon Rekognition. It can detect labels, faces, emotions, texts, and a lot more. However, the current version only supports label detection.";
    const content2 = "Label detection enable you to generate metadata for your image libraries for search and filtering.";
    const content3 = "For future versions, it is planned to implement additional features including:";
    const list = ["Facial Recognition", "Facial Analysis", "Text in Image"];

    // Image sub-section
    const imageURI = "/Asset/undraw_images.svg";

    return (
        <div className='container even-columns'>
            <ImageDisplay imageURI={imageURI} />
            <ClassicSection
                heading={heading}
                firstPara={content1}
                secondPara={content2}
                thirdPara={content3}
                list={list}
            />
        </div>
    )
}