import React from 'react';
import './TextBubble.css';

const TextBubble = (props) => {

    const { text, handleClick, clickable } = props;

    return (
        <div className='text-bubble' onClick={handleClick} style={{ cursor: clickable ? 'pointer' : '' }}>
            <p className='bubble-content'>
                {text}
            </p>
        </div>
    )
};

export default TextBubble;