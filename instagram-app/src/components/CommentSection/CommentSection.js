import React, {Component} from 'react';
import Comment from './Comment'
import Styled from 'styled-components';

class CommentSection extends Component {

 constructor(props){
    super(props);

    this.state = {
        comments: '',   // takes in new comment
        allComments: this.props.dataContent.comments  // data is passed from PostContainer.  That's why dataContent
    }
}


// creates copy of array, adds new text and username info, then updates state
addNewComment = (e) => {
    e.preventDefault();
    const newArray = [...this.state.allComments, {text: this.state.comments, username: 'David'}] 

    this.setState({
        allComments: newArray,
        comments: ''
    })
}

handleChange = (e) => {
  this.setState({
    comments: e.target.value // takes value from input
  })
}


 render() {
    console.log(this.state.comments);

    return(
        
         <div>
            {   // make sure to map through the updated allComments array
                this.state.allComments.map(comment => {
                    return (
                        <div key={comment.text}>
                            <Comment comment={comment}  />
                        </div>
                       
                    )
                })
            }
            <CommentInput>   
               <CommentTime>{this.props.dataContent.timestamp}</CommentTime>
               <form onSubmit={this.addNewComment}>
                   <input type="text" 
                          placeholder="Add a comment..."
                          onChange={this.handleChange}
                          value={this.state.comment}
                          />
               </form>
            </CommentInput>
         </div>
    )
  }
}


const CommentTime = Styled.p `
  font-size: .6rem;
  margin-left: 12px;
  color: #808080;
  padding-top: 12px;
  padding-bottom: 10px;
`

const CommentInput = Styled.div `
input {
    border-top: 1px solid #808080;
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    margin-left: 12px;
    width: 95%;
    font-size: .8rem;
    padding: 10px 0;
    

    :focus {
        outline: none;
    }
`
export default CommentSection;