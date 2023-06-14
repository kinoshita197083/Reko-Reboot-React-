import ImageDisplay from '../ImageDisplay/ImageDisplay';
import './TopBottom.css'

const TopBottom = (props) => {
    const { heading, p1, p2, imageSrc, imageDescription, imageWidth } = props;

    return (
        <div className='container-narrow'>
            <h1 className='section-heading'>{heading}</h1>

            <p className='section-paragraph justified-text'>{p1}</p>
            <p className='section-paragraph justified-text'>{p2}</p>

            {imageSrc &&
                <ImageDisplay
                    imageURI={imageSrc}
                    description={imageDescription}
                    imageWidth={imageWidth}
                />}

            {props.children}
        </div>
    )
}

export default TopBottom
