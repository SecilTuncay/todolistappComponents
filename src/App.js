import React, { Component } from 'react';
import './App.css';
import Todolist from './containers/Todolist';


class App extends Component {
  addList = () => {
    console.log("addliist");
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          FIRST APP
        </header>
        <Todolist />
      </div>
    );
  }
}

export default App;
