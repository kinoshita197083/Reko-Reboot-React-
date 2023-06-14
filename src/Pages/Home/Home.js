import { useRef } from 'react';
import './Home.css';
import ClassicSection from '../../SectionTemplate/Classic/Classic';
import Button from '../../Components/Button/Button';
import ImageDisplay from '../../SectionTemplate/ImageDisplay/ImageDisplay';
import TopBottom from '../../SectionTemplate/TopBottom/TopBottom';

export default function HomePage(props) {

    //Landing section contents
    const heading = "Analyse images by clicking a button";
    const content1 = "A fully managed service that can detect labels of your uploaded image.";

    //Demo section contents
    const headingDemo = 'Object Recognition on Images';
    const contentDemo1 = 'Unleash the power of advanced label detection. Seamlessly categorize and analyze objects, scenes, and text within images. Drive user engagement with intelligent search, and efficient content organization. Stay ahead of the competition and deliver exceptional user experiences by integrating more powerful detection technology in the upcoming future.';

    const headingDemo2 = '';
    const contentDemo2 = '';

    const getStarted = useRef(null);
    // Image sub-section
    const imageURI = "/Asset/undraw_the_search.svg";

    const handleGetStarted = () => {
        getStarted.current.scrollIntoView();
    }

    return (
        <>
            {/* Classic Two-Columns-Layout */}
            <div className='container-curved-bottom even-columns fade-in'>
                <ClassicSection heading={heading} firstPara={content1}>
                    <Button icon='Get Started' eventHandle={handleGetStarted} />
                </ClassicSection>
                <ImageDisplay imageURI={imageURI} imageWidth={'25rem'} hideInMobile={true} />
            </div>
            <TopBottom
                heading={headingDemo}
                imageSrc={'/Asset/analysis_demo_1.jpeg'}
                imageWidth={'100%'}
                p1={contentDemo1}
            />
            <TopBottom
                heading={"JPG, PNG, HEIF"}
                imageSrc={'/Asset/jpg_png.png'}
                imageWidth={'50%'}
                p1={'The image analysis service exclusively accommodates jpg, png, and heif formats, necessitating conversion for any other file types to be utilized with the service.'}
            />
            <div ref={getStarted}></div>
            <TopBottom
                heading={"Drag and Submit"}
                imageSrc={'/Asset/analyse_demo.png'}
                imageWidth={'100%'}
                p1={'Effortlessly upload your file by dragging and dropping, or simply click the browse button to select it. Then, click on the Submit button, and within a matter of seconds, the analysis will be swiftly completed.'}
            >
                <Button
                    icon={'Start'}
                    page={'/analyse'}
                />
            </TopBottom>
        </>
    )
}