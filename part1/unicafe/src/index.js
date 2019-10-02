import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
    if(props.allClicks.length === 0) {
        return (
            <div>The app is used by pressing the buttons.</div>
        );
    }

    return (
        <div>
            button press history: { props.allClicks.join(" ")}
        </div>
    );
};

const Button = ({ onClick, text }) => {
    return(
        <button onClick={ onClick } >
            { text }
        </button>
    )
};

const App = (props) => {
    const 
        [ left, setLeft ] = useState(0),
        [ right, setRight ] = useState(0),
        [ allClicks, setAll ] = useState([]),
        handleLeftClicks = () => {
            setAll(allClicks.concat('L'));
            setLeft(left + 1)
        },
        handleRightClicks = () => {
            setAll(allClicks.concat('R'));
            setRight(right + 1)
        };
    
    return (
        <>
            <div>
                { left }
                <Button 
                    onClick={ handleLeftClicks}
                    text="left"
                />
                <Button 
                    onClick={ handleRightClicks}
                    text="right"
                />
                { right }
                <History allClicks={ allClicks } />
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
