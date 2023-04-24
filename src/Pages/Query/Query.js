import { useState } from 'react';
import './Query.css';
import BubbleDisplayBar from '../../Components/BubbleDisplayBar/BubbleDisplayBar';
import TextInput from '../../Components/TextInput/TextInput';


export default function QueryPage() {

    const [textBubbles, setTextBubbles] = useState([]);

    const removeTextBubble = (e) => {
        let target = e.target.innerText;
        setTextBubbles(prev => prev.filter(bubble => bubble !== target))
    }

    return (
        <div className='container fade-in'>
            <h1 className='section-heading'>Looking for an image?</h1>

            <BubbleDisplayBar
                textBubbles={textBubbles}
                setTextBubbles={removeTextBubble}
                clickable={true}
            >
                <TextInput
                    textBubbles={textBubbles}
                    setTextBubbles={setTextBubbles}
                />
            </BubbleDisplayBar>
        </div>
    )
}