import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return(
        <div className='comment'>
            <p>
                <strong>{props.comment.username}</strong>
                {props.comment.text}
            </p>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
}


export default Comment;