import React from 'react';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className='postContainer'>
            <h1>{props.key}</h1>
        </div>
    );
}

export default PostContainer;