import React, { useState } from 'react';

function InputBox({ guesses, setGuesses }) {
  const [guess, setGuess] = useState('');
  const list = [...guesses];
  const handleSubmit = function (event) {
    event.preventDefault();
    console.log({ guess });
    list.push(guess);
    setGuess('');
    setGuesses(list);
  }

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guess} minLength={5} maxLength={5} pattern="[a-zA-Z]{5}" title="5 letter word!" onChange={(event) => setGuess(event.target.value.toString().toUpperCase())} />
  </form>;
}

export default InputBox;