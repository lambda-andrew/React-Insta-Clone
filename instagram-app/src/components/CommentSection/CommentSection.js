import React from 'react';
import Comment from './Comment'

const CommentSection = (props) => {
console.log(props)
    return(
         <div>
            {
                props.dataContent.comments.map(comment => {
                    return (
                        <div key={comment.text}>
                            <Comment comment={comment}  />
                        </div>
                    )
                })
            }
         </div>
    )
}

export default CommentSection;