import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputBox from '../InputBox';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  let status = '';
  if (guesses.length === NUM_OF_GUESSES_ALLOWED) status = 'sad';
  if (guesses.at(-1) === answer) status = 'happy';

  return <>
    <GuessResults guessList={guesses} answer={answer} />
    <InputBox setGuesses={setGuesses} guesses={guesses} answer={answer} />
    {status === 'happy' && <HappyBanner attempts={guesses.length} />}
    {status === 'sad' && <SadBanner answer={answer} />}
  </>;
}

export default Game;
