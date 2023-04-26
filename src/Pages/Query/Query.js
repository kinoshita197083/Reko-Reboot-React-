import { useState } from 'react';
import './Query.css';
import BubbleDisplayBar from '../../Components/BubbleDisplayBar/BubbleDisplayBar';
import TextInput from '../../Components/TextInput/TextInput';
import SearchButton from '../../Components/SearchButton/SearchButton';
import { queryAPI } from '../../api/QueryAPI'
import Spinner from '../../Components/Loading/Loading';


export default function QueryPage() {

    const [textBubbles, setTextBubbles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);


    const removeTextBubble = (e) => {
        let target = e.target.innerText;
        setTextBubbles(prev => prev.filter(bubble => bubble !== target))
    }

    const submitTextbubbles = async () => {
        setLoading(true);
        console.log(textBubbles)
        const backendURL = queryAPI;
        const response = await fetch(backendURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tags: textBubbles
            })
        });
        return response;
    }

    const query = async () => {
        const res = await submitTextbubbles().catch(err => err);
        const data = await res.json();
        console.log(data);
        setResults(data);
        setLoading(false);
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
                {textBubbles.length > 0 && <SearchButton clickHandler={query} />}

            </BubbleDisplayBar>

            {results && this}

            {loading && <Spinner />}
        </div>
    )
}