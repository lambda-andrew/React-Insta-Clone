import React from 'react';
import './PostContainer.css';
import { Card } from 'reactstrap';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostLikes from './PostLikes';
import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends React.Component {
    state = {
        likes: this.props.data.likes
    }

    addLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
        console.log('clicked');
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
                        likes={this.state.likes}
                        addLike={this.addLikes}
                    />
                    <CommentSection 
                        comments={this.props.data.comments}
                    />
                </Card>
            </div>
        );
    }
}
