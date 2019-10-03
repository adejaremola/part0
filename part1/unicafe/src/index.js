import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text, value}) => 
    <tr>
        <td>{ text }</td>
        <td>{ value }</td>
    </tr>;

const Button = ({ onClick, value }) =>  <button onClick={ onClick }>{ value }</button> ;

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    if (all === 0) {
        return (
            <p>No feedback given</p>
        )
    } else {
        return (
            <>
                <h3>statistics</h3>
                <table>
                    <tbody>
                        <Statistic
                            text="good"
                            value={ good }
                        />
                        <Statistic
                            text="neutral"
                            value={ neutral }
                        />
                        <Statistic
                            text="bad"
                            value={ bad }
                        />
                        <Statistic
                            text="all"
                            value={ all }
                        />
                        <Statistic
                            text="average"
                            value={ average }
                        />
                        <Statistic
                            text="positive"
                            value={ positive }
                        />
                    </tbody>
                </table>
            </>
        )   
    };
}

const App = (props) => {
    const 
        [ good, setGood ] = useState(0),
        [ neutral, setNeutral ] = useState(0),
        [ bad, setBad ] = useState(0),

        all = (good + neutral + bad),
        average = (good - bad) / (good + neutral + bad),
        positive = (good / all) + " %",

        handleGoodClicks = () => {
            setGood(good + 1);
        },
        
        handleNeutralClicks = () => {
            setNeutral(neutral + 1);
        },

        handleBadClicks = () => {
            setBad(bad + 1);
        };
    
    return (
        <>
            <div>
                <h2>give feedback</h2>
                <div>
                    <Button value="good" onClick={ handleGoodClicks }/>
                    <Button value="neutral" onClick={ handleNeutralClicks }/>
                    <Button value="bad" onClick={ handleBadClicks }/>
                </div>
                <Statistics 
                    good={ good }
                    neutral={ neutral }
                    bad={ bad }
                    all={ all }
                    average={ average }
                    positive={ positive }

                />
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
