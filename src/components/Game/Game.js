import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputBox from '../InputBox';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// const guessList = [];
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  return <>
    <GuessResults guessList={guesses} />
    <InputBox setGuesses={setGuesses} guesses={guesses} />
  </>;
}

export default Game;
