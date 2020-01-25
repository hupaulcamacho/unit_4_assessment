import React, { useState } from 'react';
import axios from 'axios';
import API_KEY from '../unlockapi';
import Video from './Video';
import { Route, Switch } from 'react-router-dom';

import useInputHook from '../Hooks/useInputHook';
import SearchResults from './SearchResults';

const HomeWithHooks = () => {
    const [search, setSearch] = useInputHook('');
    const [results, setResults] = useState([]);
    const [isSearch, setIsSearch] = useState(false);

    const handleSubmit = async (e) => { 
        e.preventDefault()
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&type=video&key=${API_KEY}`
        try {
            let results = await axios.get(URL)
            console.log(results.data.items)

            setResults(results.data.items)
            setIsSearch(true)
            
        } catch (err) {
            console.log(err)
        }
    }

    let searchResults = (isSearch) ? 
        <SearchResults results={results} />
        :
        <div className='no-search'>
            <p>No Search Results Yet! Please submit a search above</p>
        </div>

    return (
        <div className='main'>
            <h1> MiniTube</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search...' className='search-input' type='text' onChange={setSearch} value={search}/>
                <input className='search-button' type='submit' value='Search'/>
            </form>
            
            {searchResults}
            
            <Switch>
                <Route exact path='/home' component={HomeWithHooks}/>
                <Route path='/video/:videoId' component={Video}/>
            </Switch>
                
        </div>
    )
}

export default HomeWithHooks;