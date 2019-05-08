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
    } 

    render() {
        return(
            <div className='postContainer'>
                <Card>
                    <PostHeader 
                        data={this.props.data}
                    />
                    <PostImage 
                        data={this.props.data}
                    />
                    <PostLikes 
                        data={this.state.likes}
                        addLike={this.addLikes}
                    />
                    <CommentSection 
                        data={this.props.data}
                    />
                </Card>
            </div>
        );
    }
}
