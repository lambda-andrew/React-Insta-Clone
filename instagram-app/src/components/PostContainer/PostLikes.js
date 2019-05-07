import React from 'react';
import { CardText } from 'reactstrap';
import PropTypes from 'prop-types';

const PostLikes = props => {
    return (
        <div className='likes'>
            <CardText className='text-left'>
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </CardText>
            <CardText className='text-left'>
                <strong>{props.likes} likes</strong>
            </CardText>
        </div>
    );
}

PostLikes.propTypes = {
    data: PropTypes.shape({
        likes: PropTypes.number.isRequired
    })
}

export default PostLikes;