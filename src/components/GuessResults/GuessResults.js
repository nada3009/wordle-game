import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, MAX_WORD_LENGTH } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessResults({ guessList, answer }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);

  return (<div className="guess-results">
    {
      rows.map((i) => {
        let letters = [];
        let check = [];
        if (i < guessList.length) {
          letters = guessList[i].split('');
          check = checkGuess(guessList[i], answer);
        }
        return (<p className="guess" key={i}>
          {range(MAX_WORD_LENGTH).map((j) => {
            return <span key={Math.random()} className={`cell ${check[j]?.status || ''}`}>{letters[j] || ''}</span>
          })}
        </p>);
      })
    }
  </div>);
}

export default GuessResults;
