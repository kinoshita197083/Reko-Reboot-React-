import { useReducer, useEffect } from 'react';
import './Query.css';
import BubbleDisplayBar from '../../Components/BubbleDisplayBar/BubbleDisplayBar';
import TextInput from '../../Components/TextInput/TextInput';
import SearchButton from '../../Components/SearchButton/SearchButton';
import { queryAPI } from '../../api/QueryAPI'
import Spinner from '../../Components/Loading/Loading';
import Carousel from '../../Components/Carousel/Carousel';
import ImageDisplay from '../../SectionTemplate/ImageDisplay/ImageDisplay';
import TextBubble from '../../Components/TextBubble/TextBubble';

const introImg = '/Asset/undraw_online_friends_re_eqaj.svg'

export default function QueryPage() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setTextBubbles':
                return { ...state, textBubbles: [...state.textBubbles, action.payload] };
            case 'removeTextBubble':
                return { ...state, textBubbles: [...state.textBubbles.filter(bubble => bubble !== action.payload)] };
            case 'clearTextBubbles':
                return { ...state, textBubbles: [] };
            case 'migrateDefaultBubbles':
                return { ...state, defaultBubbles: [...state.defaultBubbles.filter(bubble => bubble !== action.payload)], textBubbles: [...state.textBubbles, action.payload] };
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

    const [state, dispatch] = useReducer(reducer, { textBubbles: [], defaultBubbles: ['Person', 'Cat', 'Animal'], loading: false, results: [] });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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
        <>
            <section className='container-s curved-bottom-left fade-in'>
                <h1 className='section-heading'>Browse the Gallery</h1>
                <p className='section-paragraph'>Interested in taking a glimpse into what others been analysing?</p>
                <ImageDisplay
                    imageURI={introImg}
                    imageWidth={'30%'}
                />
            </section>
            <section className='container curved-bottom-right'>
                <h1 className='section-heading'>What's on your mind?</h1>

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

                <div className='default-bubbles'>
                    {state.defaultBubbles.map((bubble, index) =>
                        <TextBubble
                            key={index}
                            text={bubble}
                            clickable
                            handleClick={() => dispatch({ type: 'migrateDefaultBubbles', payload: bubble })}
                        />)}
                </div>

                {state.results.length > 0 && <Carousel results={state.results} />}

                {state.loading && <Spinner />}
            </section>
        </>
    )
}