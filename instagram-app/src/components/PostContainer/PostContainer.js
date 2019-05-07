import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import Comment from '../CommentSection/Comment'

const PostContainer = props => {
  return(
    <div className = "main">
      {props.dataProps.map(point =>
        <div className="postCon" key={point.timestamp}>
          <div className="postTopName"><Comment username={point.username} /></div>
          <img src={point.imageUrl} alt={point.timestamp}/>
          <div className="postComments"><CommentSection comments={point.comments} /></div>
        </div>
      )}
    </div>
  )
}

PostContainer.propTypes = {
  dataProps: PropTypes.arrayOf (
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imgUrl: PropTypes.string,
      comments: PropTypes.array
    })
  )
}

export default PostContainer;
