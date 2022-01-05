import React from 'react';
import { Link } from 'react-router-dom';
import screen from './Screenshot.png';

export default () => {
  return (
    <div>
      Im documentation page!
      <Link to="/">Go back home</Link>
      <img src={screen} />
    </div>
  );
};
