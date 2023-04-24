import './BubbleDisplayBar.css';
import TextBubble from '../TextBubble/TextBubble';

const BubbleDisplayBar = (props) => {

    const { textBubbles, setTextBubbles, clickable } = props;

    return (
        <div className='bubble-display-bar'>
            <div className='bubble-section'>
                {textBubbles && textBubbles.map(bubble => {
                    return (
                        <TextBubble
                            key={bubble.Name || bubble}
                            text={bubble.Name || bubble}
                            handleClick={setTextBubbles}
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