import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavHeader from './components/NavHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavHeader} />
      </div>
    );
  }
}

export default App;
