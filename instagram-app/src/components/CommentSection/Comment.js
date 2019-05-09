import React from 'react';
import PropTypes from 'prop-types';
import Username from '../styled-components';

const Comment = props => {
    return(
        <div className='comment'>
            <p>
                <Username comment>{props.comment.username}</Username>
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

Comment.defaultProps = {
    comment: {}
}

export default Comment;