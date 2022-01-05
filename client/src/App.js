import React from 'react';
import logo from './pollub_ccexpress.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Link to="/">HomePage</Link>
          <Link to="/FibPage">Fibonacci calculator</Link>
          <Link to="/otherpage">Documentation</Link>
        </header>
        <div>
          <Route path="/" />
          <Route exact path="/FibPage" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
