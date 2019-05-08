import React, {Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import moment from 'moment';
import Styled from 'styled-components';


class CommentSection extends Component {
    
    constructor(props) {
        super();
        this.state = {
            comments: '',
            commentsArray: props.comments
        }
    }

   
   
    addNewComment = (e) => {
        e.preventDefault();
        const newArr = [...this.state.commentsArray, {text: this.state.comments, username: 'David'}]
        this.setState({
            commentsArray: newArr,
            comments: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    render() {
        
        return (
            
            <div>
                <div>
                    {this.state.commentsArray.map((userCom, index) => {
                        return (
                            <div key={index}>
                                <Comment user={userCom.username} textPost={userCom.text}/>
                            </div>
                        )
                    })}
                </div>

                <CardTimeStamp>{moment().startOf('hour').fromNow()}</CardTimeStamp>

                <form onSubmit={this.addNewComment}>
                    <CommentInput 
                        type="text"
                        placeholder="Add a comment..."
                        onChange={this.handleChange} value={this.state.comments}
                     />
                </form>
            </div>
        )
    }
}


const CardTimeStamp = Styled.p `
    margin-left: 16px;
    margin-top: 12px;
    color: #808080;
`
const CommentInput = Styled.input `
    margin-left: 16px;
    width: 90%;
    font-size: 1.4rem;
    border-top: 1px solid #808080;
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin-top: 12px;
    padding: 50x;
    // text-indent: 10px;
    padding: 10px 0 20px 0;

    &:focus {
        outline: none;
    }
`

CommentSection.propTypes = {
   comments: PropTypes.arrayOf(
    PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
   ),
   dummyData: PropTypes.arrayOf(
       PropTypes.shape({
           imageUrl: PropTypes.string,
           likes: PropTypes.number,
           thumbnailUrl: PropTypes.string,
           timestamp: PropTypes.string,
           username: PropTypes.string,
           comments: PropTypes.arrayOf(
            PropTypes.shape({
               username: PropTypes.string,
               text: PropTypes.string
          })
       )
     })
   )
}

export default CommentSection;

