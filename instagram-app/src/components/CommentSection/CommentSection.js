import React from 'react';
import './CommentSection.css';
import Comment from './Comment';

export default class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            username: '',
            text: ''
        }
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                    return <Comment 
                        comment={comment}
                        key={comment.text}
                    />
                })}
            </div>
        );
    }
}

