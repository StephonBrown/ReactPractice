import React from 'react';

function Joke(props){
    return(
        <div className = "card">
            <h3 className = "question">{props.joke.question == null || props.joke.question == "" ? "": props.joke.question}</h3>
            <h4 className = "punchline">{props.joke.punchline == null || props.joke.punchline == "" ? "Soo...": props.joke.punchline}</h4>
        </div>
    );
}

export default Joke;