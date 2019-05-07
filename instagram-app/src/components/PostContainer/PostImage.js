import React from 'react';
import { CardImg } from 'reactstrap';
import PropTypes from 'prop-types';

const PostImage = props => {
    return(
        <CardImg src={props.image} alt='Post Image'/>
    );
}

PostImage.propTypes = {
    data: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired
    })
}

export default PostImage;