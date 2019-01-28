import React from 'react';
import Joke from './components/Joke.js';

function App(){
    return(
        <div>
            <Joke joke = {{question: "Why did the chicken cross the road?", punchline:"To get to the other side!"}}/>
            <Joke joke = {{punchline:"Fart!"}}/> 
            <Joke joke = {{punchline:"Eat the Chicken!"}}/>
            <Joke joke = {{question: "What did the dummy say to the controller?", punchline:"Guess we are both being controlled."}}/>
            <Joke joke = {{question: "What is red and can pop?", punchline:"A balloon!"}}/>
        </div>
    );
};


export default App;