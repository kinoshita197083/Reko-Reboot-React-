import './BubbleDisplayBar.css';
import TextBubble from '../TextBubble/TextBubble';

const BubbleDisplayBar = (props) => {

    const { textBubbles, setTextBubbles: dispatch, clickable } = props;

    return (
        <div className='bubble-display-bar'>
            <div className='bubble-section'>
                {textBubbles && textBubbles.map(bubble => {
                    return (
                        <TextBubble
                            key={bubble.Name || bubble}
                            text={bubble.Name || bubble}
                            handleClick={clickable ? (e) => dispatch({ type: 'removeTextBubble', payload: e.target.innerText }) : null}
                            clickable={clickable}
                        />
                    );
                })}
            </div>
            {props.children}
        </div>
    )
};

export default BubbleDisplayBar;