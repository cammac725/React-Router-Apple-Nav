import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import data from './data';
import Home from './components/Home/Home';
import SubLink from './components/SubLink';
import NavHeader from './components/Header/NavHeader';

import './App.css';

class App extends Component {
  state = {
    links: data
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className='main'>
            <Link to='/'><i className="fab fa-apple"></i></Link>

            {this.state.links.map((link, id) => (
              <NavHeader
                key={id}
                name={link.name}
              />
            ))}

            <Link to='/'><i className="fas fa-search"></i></Link>
            <Link to='/'><i className="fas fa-shopping-bag"></i></Link>
          </div>
          <div className='sub'>

          </div>
        </header>

        <Route exact path='/' component={Home} />
        <Route path='/:name' render={props => <SubLink {...props} items={this.state.links} />} />

      </div>
    );
  }
}

export default App;
