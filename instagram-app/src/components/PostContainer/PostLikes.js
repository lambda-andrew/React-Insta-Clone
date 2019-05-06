import React from 'react';
import { CardText } from 'reactstrap';

const PostLikes = props => {
    return (
        <div className='likes'>
            <CardText className='text-left'>
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </CardText>
            <CardText className='text-left'>
                {props.likes} likes
            </CardText>
        </div>
    );
}

export default PostLikes;