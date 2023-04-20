import React from 'react';
import './TextBubble.css';

const TextBubble = (props) => {

    const { text } = props;

    return (
        <div className='text-bubble'>
            <p className='bubble-content'>
                {text}
            </p>
        </div>
    )
};

export default React.memo(TextBubble);