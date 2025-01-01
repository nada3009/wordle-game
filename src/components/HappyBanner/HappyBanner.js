import React from 'react';
import Banner from '../Banner';

function HappyBanner({ attempts }) {
  return (<Banner status='happy'>
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong> {attempts} guesses</strong>.
    </p>
  </Banner>);

}

export default HappyBanner;
