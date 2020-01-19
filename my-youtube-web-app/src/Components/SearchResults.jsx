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
                </Link><br/>
                    <b>{result.snippet.title}</b><br/>
                    <b><i>{result.snippet.channelTitle}</i></b><br/>
                    {'Posted: '}<i>{result.snippet.publishedAt}</i> 

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