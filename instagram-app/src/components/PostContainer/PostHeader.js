import React from 'react';
import { CardHeader } from 'reactstrap';

const PostHeader = props => {
    return (
        <CardHeader className='postHeader'>
            <img src={props.thumbnail} alt='thumbnail of user' />
            <h2>{props.user}</h2>     
        </CardHeader>
    );
}

export default PostHeader;