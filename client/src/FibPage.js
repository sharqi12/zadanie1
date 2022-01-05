import React from 'react';
import { Link } from 'react-router-dom';
import Fib from './Fib';

export default () => {
  return (
    <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
  );
};
