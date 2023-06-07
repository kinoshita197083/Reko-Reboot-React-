import { useState } from 'react';
import './Carousel.css'

const Carousel = (props) => {

    const { results } = props;
    const [selectedImg, setSelectedImg] = useState('');
    const [clicked, setClicked] = useState(false);

    const exitFullScreen = () => {
        setClicked(false);
    }

    const handleClick = (e) => {
        setClicked(true);
        setSelectedImg(e.target.currentSrc);
    }

    return (
        <>
            <ul className='carousel'>
                {results?.map(result => {
                    return (
                        <li key={result} onClick={handleClick} className='carousel-item-wrapper'>
                            <img
                                src={result}
                                className='carousel-item'
                                alt='Returned images from the request'
                                loading='lazy'
                                onClick={handleClick}
                            />
                        </li>
                    )
                })}
            </ul>
            {clicked && <div className={clicked ? 'full-screen-img' : 'hidden'} onClick={exitFullScreen} style={{ backgroundImage: `url(${selectedImg})` }}></div>}
        </>
    )
}

export default Carousel;