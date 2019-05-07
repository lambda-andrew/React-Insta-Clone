import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment  = props => {
  return(
    <div className="commentText">
      <span><strong>{props.username}</strong> {props.text}</span>
    </div>
  )
}

Comment.propTypes= {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment;
