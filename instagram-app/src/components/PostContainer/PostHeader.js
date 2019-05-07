import React from 'react';
import { CardHeader } from 'reactstrap';
import PropTypes from 'prop-types';

const PostHeader = props => {
    return (
        <CardHeader>
            <img src={props.thumbnail} alt='thumbnail of user' />
            <h2>{props.user}</h2>     
        </CardHeader>
    );
}

PostHeader.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired
    })
}

export default PostHeader;