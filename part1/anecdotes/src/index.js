import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({ anecdotes }) => {
    const 
        [selected, setSelected] = useState(0),
        [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]),
        
        handleNextAnec = () => {
            let randIndex = Math.round(Math.random() * (anecdotes.length - 1));
            setSelected(randIndex);
        },
        
        handleVoteAnec = () => {
            const copy = [ ...votes ];
            copy[selected] += 1; 
            setVotes(copy);
        };
        
    let votesCopy = [...votes];
    votesCopy.sort((a, b) => b - a);
    let highestVotes = votesCopy[0];
    let highestAnecIndex = votes.indexOf(highestVotes);

    return (
        <>
            <h2>Anecdote of the day</h2>
            <div>
                {anecdotes[selected]} 
                <br/>
                has { votes[selected] } votes.
            </div>
            <button onClick={ handleVoteAnec }>vote</button>
            <button onClick={ handleNextAnec }>next anecdote</button>
            <h2>Anecdote with most votes</h2>
            <div>
                {anecdotes[highestAnecIndex]} 
                <br/>
                has { votes[highestAnecIndex] } votes.
            </div>
        </>
    );
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />, document.getElementById('root')
)