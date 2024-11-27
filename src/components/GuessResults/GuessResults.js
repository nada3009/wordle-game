import React from 'react';

function GuessResults({ guessList }) {
  console.log({ guessList });
  return <div className="guess-results">
    {/* <h3 className="guess" >'HIYAA'</h3> */}
    {
      guessList.map((guess, index) => {
        return <p className="guess" key={index}>{guess}</p>
      })
    }
  </div>;
}

export default GuessResults;
