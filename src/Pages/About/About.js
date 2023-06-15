import React, { useEffect } from 'react';
import './About.css';
import ClassicSection from '../../SectionTemplate/Classic/Classic';
import ImageDisplay from '../../SectionTemplate/ImageDisplay/ImageDisplay';

export default function AboutPage() {

    //Intro: What exactly is Reko?
    const heading = "What exactly is Reko?";
    const intro1 = "Reko is an image analyzing tool that allows users to upload images in a supported format. By leveraging this tool, users can perform object detection and receive the results in the form of labels, such as 'Person', 'Animal', 'Dog', and 'Car'.";
    const intro2 = "Reko offers a reliable and scalable deep learning technology, enabling quick and accurate analysis of uploaded images. Additionally, it provides a confidence score for each identified element, assisting users in making informed decisions based on the analysis results.";


    //Amazon Rekognition
    const heading_s2 = "Powered by Amazon Rekognition"
    const content1 = "Reko is powered by Amazon Rekognition, an advanced deep learning model developed by Amazon's computer vision scientists. This technology is widely recognized for its remarkable features beyond label detection, such as facial analysis and facial comparison. "
    const content2 = "While currently focused on object detection and labeling, Reko has the potential for major updates in the future to incorporate these additional features. The underlying Amazon Rekognition technology has a proven track record, as it analyzes billions of images daily for Prime Photos. The use of this powerful technology ensures the accuracy and scalability of Reko's image analysis service."

    // Image sub-section
    const introImageURI = "/Asset/undraw_data_extraction_re_0rd3.svg";
    const mlImageURI = "/Asset/ML.png";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <section className='container curved-bottom-left even-columns fade-in'>
                <ImageDisplay imageURI={introImageURI} imageWidth={'75%'} />
                <ClassicSection
                    heading={heading}
                    firstPara={intro1}
                    secondPara={intro2}
                />
            </section>

            <section className='container curved-bottom-right even-columns fade-in'>
                <ClassicSection
                    heading={heading_s2}
                    firstPara={content1}
                    secondPara={content2}
                />
                <ImageDisplay imageURI={mlImageURI} imageWidth={'65%'} whiteFiltered />
            </section>
        </>
    )
}