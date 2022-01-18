import logo from './logo.svg';
import './App.css';
import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <ul>
        <li>Apple - 500</li>
        <li>Orange - 600</li>
      </ul>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React</h1>
        <Item/>
      </div>
    )
  }
}

export default App;
