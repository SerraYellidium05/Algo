/*import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import './App.css';
import SearchMovie from './Components/SearchMovie';

const App = () => {
  return (
    <div id='container'>
      <h1 className='title ' id='StartShow'> Movie Search</h1>
      <SearchMovie />
    </div>
  )
}

export default App
