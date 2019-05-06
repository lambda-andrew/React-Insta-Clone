import React from 'react';

const Comment = (props) => {
  
  return (
      <div style={{border: "1px solid orange"}}>
        <p>{props.comment.username}</p>
         <p>{props.comment.text}</p>
      </div>
  )
}

export default Comment;