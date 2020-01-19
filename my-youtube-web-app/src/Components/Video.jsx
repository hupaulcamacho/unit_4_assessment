import React, { Component } from 'react'
import YouTube from 'react-youtube'

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoId: props.match.params.videoId,
            comments: [],
            name: '',
            commentBody: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleCommentChange = (e) => {
        this.setState({
            commentBody: e.target.value
        })
    }
    loadOptions = () => {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
            autoplay: 1
          }
        }
        return opts
    }

    _onReady = (event) => {
        event.target.pauseVideo();
    }
    makeComment = (e) => {
        e.preventDefault()

        const { comments, name, commentBody } = this.state
        let updateComments = [...comments]

        if (name && commentBody) {
            const newComment = <div> <h3>{name}</h3> <p>{commentBody}</p></div>

        updateComments.unshift(newComment)

        this.setState({
            comments: updateComments
        })
        } else {
            window.alert("input cannot be blank")
        }
    }


    render() {
        const { videoId, name, commentBody, comments } = this.state
        return (
            <div className='video-page'>
                <h1>Video</h1>
                <YouTube 
                videoId={videoId}
                opts={this.loadOptions()}
                onReady={this._onReady}
                />

                <div className='comments-section'>
                    <form className='comment-form' onSubmit={this.makeComment}>
                        <h2>Name</h2>
                        <input className='comment-form-input' placeholder='Name' onChange={this.handleNameChange} type='text' value={name} /> <br/>
                        <h2>Comment</h2>
                        <input className='comment-form-input' placeholder='...' onChange={this.handleCommentChange}type='text' value={commentBody} /><br/>
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

}


export default Video