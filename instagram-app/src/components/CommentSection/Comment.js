import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Comment = ({user, textPost}) => {
   
   return (
     <Comments >
        <p><span>{user}</span>   {textPost}</p>
     </Comments>
   )
}

const Comments = Styled.div `
   pading: 5px 0px;
   p {
      font-size: .8rem;
      line-height: 26px;
   }
   span {
      font-size: .8rem;
   }
`

Comment.propTypes = {
   user: PropTypes.string,
   textPost: PropTypes.string
}

export default Comment;
