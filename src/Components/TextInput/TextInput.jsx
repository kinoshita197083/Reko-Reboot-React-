import React, { useState } from 'react';
import './TextInput.css';

const TextInput = (props) => {

    const { textBubbles, setTextBubbles } = props;
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            let userInput = e.target.value.trim();
            appendBubble(userInput)
        }
    }

    const appendBubble = (userInput) => {
        if (validateInput(userInput)) {
            setTextBubbles([...textBubbles, userInput]);
        }
        setInput('');
    }

    const validateInput = (userInput) => {
        let validated = false;
        const format = /[^\w\s]/;
        if (!format.test(userInput) && userInput && isNaN(userInput)) {
            !textBubbles.includes(userInput) ? validated = true : setInput('')
        }
        return validated;
    }

    return (
        <input
            className='text-input-themed'
            type='text'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={input}
        />
    )
}

export default React.memo(TextInput);