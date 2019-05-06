import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostLikes from './PostLikes';

const PostContainer = (props) => {

 return (
    <div style={{border: "1px solid red"}}>
        <div>
            <img src={props.dataContent.thumbnailUrl} alt=""/>
            <p>{props.dataContent.username}</p>
        </div>
        
        <img src={props.dataContent.imageUrl} alt=""/>
        <CommentSection dataContent={props.dataContent} />
        <PostLikes dataLikes={props.dataContent.likes}/>
        <p>2 hours ago</p>
        <input type="text" placeholder="Add a comment..."/>
    </div>
    )
}

export default PostContainer; 