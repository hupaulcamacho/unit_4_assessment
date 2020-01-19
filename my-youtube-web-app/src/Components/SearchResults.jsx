import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
    const { results } = props
    const searchResults = [];
    

    results.forEach(result => {
        searchResults.push(
            <div className='video'>
                <Link to={`/video/${result.id.videoId}`}>
                    <img id={result.id.videoId} src={`${result.snippet.thumbnails.medium.url}`} />
                </Link>
                    <p><b>{result.snippet.title}</b></p> 
            </div>
        )
    })

    return (
        <div className='results'>
            {searchResults}
        </div>
        
    )
}

export default SearchResults;