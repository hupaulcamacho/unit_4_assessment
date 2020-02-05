import React, { Component } from 'react'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to Minitube! </h1>
                <p>Click on image to Redirect to login Page</p>
                <a href='/login'>
                    <img src='https://about.fb.com/wp-content/uploads/2016/10/casting_newsroomasset_blue1.png?fit=1911%2C1078' width='1000' />
                </a>
                
            </div>
        )
    }
}
