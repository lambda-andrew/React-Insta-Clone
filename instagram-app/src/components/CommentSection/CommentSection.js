import React from 'react';
import './CommentSection.css';
import Comment from './Comment'

const CommentSection = props => {
  return (
    <div className="commentSect">{props.comments.map((x, id) =>
      <Comment username={x.username} key={id} text={x.text} />
    )}</div>
  );
}

export default CommentSection;
