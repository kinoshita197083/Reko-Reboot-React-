import { useReducer } from 'react';
import './Query.css';
import BubbleDisplayBar from '../../Components/BubbleDisplayBar/BubbleDisplayBar';
import TextInput from '../../Components/TextInput/TextInput';
import SearchButton from '../../Components/SearchButton/SearchButton';
import { queryAPI } from '../../api/QueryAPI'
import Spinner from '../../Components/Loading/Loading';
import Carousel from '../../Components/Carousel/Carousel';


export default function QueryPage() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setTextBubbles':
                return { ...state, textBubbles: [...action.payload] };
            case 'removeTextBubble':
                return { ...state, textBubbles: [...state.textBubbles.filter(bubble => bubble !== action.payload)] };
            case 'clearTextBubbles':
                return { ...state, textBubbles: [] };
            case 'isLoading':
                return { ...state, loading: true };
            case 'notLoading':
                return { ...state, loading: false };
            case 'setResults':
                return { ...state, results: [...action.payload] };
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, { textBubbles: [], loading: false, results: [] });

    const submitTextbubbles = async () => {
        dispatch({ type: 'clearTextBubbles' });
        dispatch({ type: 'isLoading' });
        // console.log(state.textBubbles)
        const backendURL = queryAPI;
        const response = await fetch(backendURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tags: state.textBubbles
            })
        });
        return response;
    }

    const query = async () => {
        const res = await submitTextbubbles().catch(err => err);
        const data = await res.json();
        // console.log(data);
        dispatch({ type: 'setResults', payload: data })
        dispatch({ type: 'notLoading' });
    }

    return (
        <div className='container fade-in'>
            <h1 className='section-heading'>Looking for an image?</h1>

            <BubbleDisplayBar
                textBubbles={state.textBubbles}
                setTextBubbles={dispatch}
                clickable={true}
            >
                <TextInput
                    textBubbles={state.textBubbles}
                    setTextBubbles={dispatch}
                />
                {state.textBubbles.length > 0 && <SearchButton clickHandler={query} />}

            </BubbleDisplayBar>

            {state.results.length > 0 && <Carousel results={state.results} />}

            {state.loading && <Spinner />}
        </div>
    )
}