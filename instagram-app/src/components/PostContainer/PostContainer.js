import React from 'react';
import './PostContainer.css';
import { Card } from 'reactstrap';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostLikes from './PostLikes';
import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div className='postContainer'>
                <Card>
                    <PostHeader 
                        user={this.props.data.username}
                        thumbnail={this.props.data.thumbnailUrl} 
                    />
                    <PostImage 
                        image={this.props.data.imageUrl}
                    />
                    <PostLikes 
                        likes={this.props.data.likes}
                    />
                    <CommentSection 
                        comments={this.props.data.comments}
                    />
                </Card>
            </div>
        );
    }
}
