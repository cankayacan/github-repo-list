import './App.css';
import React, { Component } from 'react';
import RepoListContainer from './containers/RepoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RepoListContainer></RepoListContainer>
      </div>
    );
  }
}

export default App;
