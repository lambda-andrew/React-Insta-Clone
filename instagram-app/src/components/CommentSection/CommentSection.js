import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import AddComment from './AddComment';
// import { Form, FormGroup, Input } from 'reactstrap';


export default class CommentSection extends React.Component{
    state = {
        comments: this.props.comments,
        comment: {
            username: '',
            text: ''
        }
    }

    newComment = e => {
        this.setState({
            comment: {
                [e.target.name]: e.target.value
            }
        })
    }

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: 'dbarrios95',
            text: this.state.comment.text
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            comment: {
                ...this.state.comment,
                text: ''
            }
        })
    }

    render() {
        return (
            <div className='comments'>
                {this.state.comments.map(comment => {
                    return (
                        <div>
                            <Comment 
                                comment={comment}
                                key={comment.text}
                            />
                        </div>
                    );
                })}
                <AddComment 
                    addNewComment={this.addNewComment}
                    newComment={this.newComment}
                    data={this.state.comment}
                    key={this.state.comment}
                />
                <button>
                    <span>
                        <i className="fas fa-ellipsis-h"></i>
                    </span>    
                </button> 
            </div>
        );
    }
}

