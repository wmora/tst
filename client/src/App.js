import React, { Component } from 'react';
import SignInButton from './SignInButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to A Twitter Story</h1>
        </header>
        <p className="App-intro">Please sign in to Twitter to get started</p>
        <SignInButton />
      </div>
    );
  }
}

export default App;
