import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => <h1>{ course }</h1> ;

const App = () => {
    const 
        course = 'Half Stack application development',
        part1 = 'Fundamentals of React',
        exercises1 = 10,
        part2 = 'Using props to pass data',
        exercises2 = 7,
        part3 = 'State of a component',
        exercises3 = 14;

    return (
        <div>
            <Header course={ course } />
            <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))