import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import './App.css';

import Home from './Components/Home'
import AuthContainer from './Containers/AuthContainer'
import Search from './Components/Search'
import About from './Components/About'
import Video from './Components/Video'
import NavBar from './Components/NavBar';
import PrivateRoute from './Components/PrivateRoute';
// import SignupForm from '../Components/SignupForm.jsx';


class App extends React.Component {
  state = {
    user: null,
    isUserLoggedIn: false
  }

  setUser = (user) => {
    this.setState({
      user: user,
      isUserLoggedIn: true
    })
  }

  checkUserLoggedIn = async () => {
    try {
      const { data } = axios.get("http://localhost:3001/auth/isUserLoggedIn")
      this.props.setUser(data.payload)
    } catch (err) {
      
    }
    console.log('Checking if user logged in')
  }

  componentDidMount() {
    this.checkUserLoggedIn()
  }

  renderAuthContainer = () => {
    const { isUserLoggedIn } = this.state
    return <AuthContainer isUserLoggedIn={isUserLoggedIn} setUser={this.setUser} />
  }

  logoutUser = async () => {
    console.log('logging out user')
    try {
      await axios.get('http://localhost:3001/auth/logout')
      this.setState({
        user: null,
        isUserLoggedIn: false
      })
      this.props.history.push('/') // Redirect user to / (home)
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  render() {
    return (
      <div className='App'>
        <NavBar 
        logoutUser={this.logoutUser}
        isUserLoggedIn={this.state.isUserLoggedIn}
        />
        <Switch>
          
          <PrivateRoute path='/search' component={Search} isUserLoggedIn={this.state.isUserLoggedIn}/>
          <PrivateRoute path='/video/:videoId' component={Video} isUserLoggedIn={this.state.isUserLoggedIn}/>
          <Route path='/login' render={this.renderAuthContainer}/>
          <Route path='/signup' render={this.renderAuthContainer}/>
          <Route path='/about' component={About}/>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;
