import React from 'react';
import { CardImg } from 'reactstrap';
import PropTypes from 'prop-types';

const PostImage = props => {
    return(
        <CardImg src={props.data.imageUrl} alt='Post Image'/>
    );
}

PostImage.propTypes = {
    data: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired
    })
}

PostImage.defaultProps = {
    data: {}
}

export default PostImage;