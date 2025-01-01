import React, { useState } from 'react';

function InputBox({ guesses, setGuesses, answer }) {
  const [guess, setGuess] = useState('');
  const [disabled, setDisabled] = useState(false);
  const list = [...guesses];
  const handleSubmit = function (event) {
    event.preventDefault();
    list.push(guess);
    setGuess('');
    setGuesses(list);
    if (guess === answer) setDisabled(true);
  }

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guess} minLength={5} maxLength={5} pattern="[a-zA-Z]{5}" title="5 letter word!" disabled={disabled} onChange={(event) => setGuess(event.target.value.toString().toUpperCase())} />
  </form>;
}

export default InputBox;