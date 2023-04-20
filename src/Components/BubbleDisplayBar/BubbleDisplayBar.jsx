import React from 'react';
import './BubbleDisplayBar.css';
import TextBubble from '../TextBubble/TextBubble';

const BubbleDisplayBar = (props) => {

    const { results } = props;

    return (
        <div className='bubble-display-bar'>
            <div className='bubble-section'>
                {results.map(result => {
                    return (
                        <TextBubble
                            key={result.Name}
                            text={result.Name}
                        />
                    );
                })}
            </div>
            {props.children}
        </div>
    )
};

export default BubbleDisplayBar;