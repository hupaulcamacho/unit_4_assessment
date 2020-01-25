import React, { useState } from 'react';
import YouTube from 'react-youtube';
import useInputHook from './Hooks/useInputHook'

const VideoWithHooks = () => {
    let videoId = props.match.params.videoId;
    const [comments, setComments] = useInputHook('');
    const [name, setName] = useInputHook('');
    const [commentBody, setBody] = useInputHook('');

    const _onReady = (event) => {
        event.target.pauseVideo();
    }
    
    const makeComment = (e) => {
        e.preventDefault();

        let updateComments = [...comments];
        if (name && commentBody) {
            const newComment = <div> <h3>{name}</h3> <p>{commentBody}</p></div>

        updateComments.unshift(newComment);
        setComments(updateComments);
        } else {
            window.alert("input cannot be blank");
        }
    }

    const loadOptions = () => {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
            autoplay: 1
          }
        }
        return opts
    }

    return (
        <div className='video-page'>
            <h1>Video</h1>
            <YouTube 
                videoId={videoId}
                opts={loadOptions()}
                onReady={_onReady}
            />
            <div className='comments-section'>
                <form className='comment-form' onSubmit={makeComment}>
                    <h2>Name</h2>
                    <input className='comment-form-input' placeholder='Name' onChange={setName} type='text' value={name} /> <br/>
                    <h2>Comment</h2>
                    <input className='comment-form-input' placeholder='...' onChange={setBody}type='text' value={commentBody} /><br/>
                    <input className='comment-submit' type='submit' value='Submit' />
                </form> 
                
            </div>
            <br/>
            <div className='comments'>
                {comments}
            </div>
                
        </div> 
    )
}

export default VideoWithHooks;