import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

class Post extends Component {

    state = {
        likes: this.props.ddata.likes
    }
    

    handleChange = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            likes: prevState.likes + 1
        }))
    }

    render() {
        const {ddata, dummyData} = this.props;
        // console.log(this.props)
        return (
            <div>
                <CardContainer>
                    <CardLogoContainer><CardLogo src={ddata.thumbnailUrl} alt="company logo"/><span>{ddata.username}</span></CardLogoContainer>
                     <CardImage src={ddata.imageUrl} alt="post image"/>
                      <CardIcons>
                          <div onClick={this.handleChange}><a href="http://google.com"><i className="far fa-heart"></i></a></div>
                          <div><a href="http://google.com"><i className="far fa-comment"></i></a></div>
                      </CardIcons>
                      <CardLikes>
                          <p>{this.state.likes} likes</p>
                      </CardLikes>
                      <CommentSection comments={ddata.comments} dummyData={dummyData}/>
                </CardContainer>
            </div>
        )
    }
}


const CardContainer = Styled.div `
  margin-bottom: 20px;
  border: 1px solid #808080;
  border-radius: 6px;

    span {
        font-size: .9rem;
        font-weight: bold;
        margin-left: 16px;
    }
`
const CardLogoContainer = Styled.div `
    display: flex;
    align-items: center;
    padding: 16px 20px;
`

const CardLogo = Styled.img `
    height: 30px;
    width: 30px;
    border-radius: 90%;
`
const CardImage = Styled.img `
    width: 600px;
`
const CardIcons = Styled.div `
    display: flex;
    font-weight: lighter;
    font-size: 1.8rem;
    
    &:active {
        background: transparent;
    }

    .far {
        margin: 20px 7px;
        color: #333;
    }
    .fa-heart {
        margin-left: 16px;
        &:active {
            color: red;
        }
    }
`
const CardLikes = Styled.div `
    margin-top: -10px;
    margin-left: 16px;
    padding-bottom: 12px;
`

Post.propTypes = {
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


export default Post;

