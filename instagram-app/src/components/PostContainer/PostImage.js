import React from 'react';
import { CardImg } from 'reactstrap';

const PostImage = props => {
    return(
        <CardImg src={props.image} alt='Post Image'/>
    );
}

export default PostImage;