import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Home from './Components/Home'
import About from './Components/About'
import Video from './Components/Video'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Link to='/'><b> MiniTube </b></Link>{'  '}
          <Link to='/'>Home</Link>{'  '}
          <Link to='/about'>About</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/video/:videoId' component={Video}/>
        </Switch>
      </div>
    )
  }
}

export default App;
