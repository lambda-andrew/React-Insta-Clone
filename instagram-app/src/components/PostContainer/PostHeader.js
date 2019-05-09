import React from 'react';
import { CardHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Username from '../styled-components';

const PostHeader = props => {
    return (
        <CardHeader>
            <UserThumbnail src={props.data.thumbnailUrl} alt='thumbnail of user' />
            <Username>{props.data.username}</Username>     
        </CardHeader>
    );
}

const UserThumbnail = styled.img`
    height: 35px;
    border-radius: 50%;
`

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