import React from 'react';
import Styled from 'styled-components'
const Comment = (props) => {
  
  return (
      <CommentWrapper>
        <CommentUser>{props.comment.username}</CommentUser>
         <CommentPost>{props.comment.text}</CommentPost>
      </CommentWrapper>
  )
}


const CommentWrapper = Styled.div `
     display:flex;
     margin-left: 12px;
`

const CommentUser = Styled.p `
    font-weight: bolder;
    font-size: .8rem;
    padding-right: 10px;
    line-height: 24px;
`

const CommentPost = Styled.p `
    font-size: .8rem;
    line-height: 24px;
`

export default Comment;