import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <div className='App'>
        <nav>
          <Link to='/'>Home</Link>{'  '}
          <Link to='/about'>About</Link>
          
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    )
  }
}

export default App;
