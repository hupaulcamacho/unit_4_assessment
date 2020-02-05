import React, { Component } from 'react'
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom'

import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm.jsx';

class AuthContainer extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signupUser = async() => {
        // make network request to /auth/signup to register user
        console.log('Signing up user ...')
        try {
            const { data } = await axios.post('http://localhost:3001/auth/signup', this.state)
            this.loginUser()
        } catch (err) {
            console.log(err)
        }
    }

    renderSignUp = () => {
        const { username, password } = this.state
        return (
        <SignupForm 
            handleChange={this.handleChange}
            username={username}
            password={password}
            signupUser={this.signupUser}
        />)
    }

    loginUser = async  () => {
        // make network request to /auth/signup to register user
        try {
            const { data } = await axios.post('http://localhost:3001/auth/login', this.state )

            const user = data.payload
            this.props.setUser(user)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
        
        
    }

    renderLogin = () => {
        const { username, password } = this.state
        return (
        <LoginForm 
            handleChange={this.handleChange}
            username={username}
            password={password}
            loginUser={this.loginUser}
        />)
    }

    render() {
        const { isUserLoggedIn } = this.props
        return (
            <div>  
                {
                    isUserLoggedIn
                    ? <Redirect to="/search" />
                    : (
                    
                        <Switch>
                            <Route path="/login" render={this.renderLogin} />
                            <Route path="/signup" render={this.renderSignUp} />
                        </Switch>
                        
                    )
                }
            </div>
        )
    }
}

export default AuthContainer
