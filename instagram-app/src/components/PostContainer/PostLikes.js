import React, {Component} from 'react';
import Styled from 'styled-components';

class PostLikes extends Component {
  render(){
      return(
            <div>
                 <LikeIcons>
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                 </LikeIcons>
                <LikeCounts>{this.props.dataLikes}</LikeCounts>
            </div>
      )
   }
}

const LikeIcons = Styled.div `
    display: flex;
     

    .far {
        font-size: 1.2rem;
        font-weight: 100;
        color: #333;
        margin-left: 10px;
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .fa-heart {
        margin-right: 10px;
    }
`

const LikeCounts = Styled.p `
    margin-left: 10px;
    margin-bottom: 8px;
`

export default PostLikes;