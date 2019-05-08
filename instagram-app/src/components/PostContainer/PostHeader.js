import React from 'react';
import { CardHeader } from 'reactstrap';
import PropTypes from 'prop-types';

const PostHeader = props => {
    return (
        <CardHeader>
            <img src={props.data.thumbnailUrl} alt='thumbnail of user' />
            <h2>{props.data.username}</h2>     
        </CardHeader>
    );
}

PostHeader.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired
    })
}

PostHeader.defaultProps = {
    data: {}
}

export default PostHeader;