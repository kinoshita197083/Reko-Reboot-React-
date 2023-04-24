import { createContext, useState } from "react";

const QueryContext = createContext({});

export const QueryContextProvider = ({ children }) => {

    const [textBubbles, setTextBubbles] = useState([]);
    let clickable = true;

    const removeTextBubble = (e) => {
        let target = e.target.innerText;
        setTextBubbles(prev => prev.filter(bubble => bubble !== target))
    }

    return (
        <QueryContext.Provider value={{
            textBubbles,
            setTextBubbles,
            removeTextBubble,
            clickable
        }}>
            {children}
        </QueryContext.Provider>
    )
};

export default QueryContext;