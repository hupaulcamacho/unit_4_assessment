import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../unlockapi'
import Video from './Video'
import { Route, Switch } from 'react-router-dom';

import SearchResults from './SearchResults'


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            results: [],
            isSearch: false
        }
    }

    handleSearchChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = async (e) => { 
        e.preventDefault()
        const { search } = this.state
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&type=video&key=${API_KEY}`
        try {
            let results = await axios.get(URL)
            console.log(results.data.items)
            this.setState({
                results: results.data.items,
                isSearch: true
            })
            
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { search, results, isSearch } = this.state
        let searchResults = (isSearch) ? 
        <SearchResults results={results} />
        :
        <div className='no-search'>
            <p>No Search Results Yet! Please submit a search above</p>
        </div>

        return (
            <div className='main'>
                <h1> MiniTube</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Search...' className='search-input' type='text' onChange={this.handleSearchChange} value={search}/>
                    <input className='search-button' type='submit' value='Search'/>
                </form>
                
                {searchResults}
                
                
                <Switch>
                    {/* <Route exact path='/search' component={Search}/> */}
                    <Route path='/video/:videoId' component={Video}/>
                </Switch>
                
            </div>
        )
    }
}

export default Search;