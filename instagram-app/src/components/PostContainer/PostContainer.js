import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Styled from 'styled-components';

class PostContainer extends Component {
    render(){
        const {dummyData} = this.props;
        return (
            <div>
                <Card>
                    {dummyData.map((ddata, index) => {
                        return (
                            <div key={index}>
                                <Post ddata={ddata} dummyData={dummyData} key={index}/>
                            </div>
                        )
                    })}
                </Card>
            </div>
        )
    }
}


const Card = Styled.div `
    width: 600px;
    border-radius: 3px;
    margin: 0 auto;
`

PostContainer.propTypes = {
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

export default PostContainer;



















// import React from 'react';
// import CommentSection from '../CommentSection/CommentSection';
// import PostLikes from './PostLikes';
// import Styled from 'styled-components';

// const PostContainer = (props) => {

//  return (
//     <Container>
//         <ContainerIconName>
//             <img src={props.dataContent.thumbnailUrl} alt=""/>
//             <p>{props.dataContent.username}</p>
//         </ContainerIconName>
        
//         <ContainerImage >
//             <img src={props.dataContent.imageUrl} alt=""/>
//         </ContainerImage>
//         <PostLikes dataLikes={props.dataContent.likes}/>
        
//         <CommentSection dataContent={props.dataContent}/>
       
//         {/* <ContainerTime>2 hours ago</ContainerTime> */}
//         {/* <input type="text" placeholder="Add a comment..."/> */}
//     </Container>
//     )
// }

// const Container = Styled.div `
//    border: 1px solid #808080;
//    margin-bottom: 20px;
//    margin-top: 10px;

// //    input {
// //        border-top: 1px solid #808080;
// //        border-right: 0;
// //        border-bottom: 0;
// //        border-left: 0;
// //        margin-left: 12px;
// //        width: 95%;
// //        font-size: .8rem;
// //        padding: 10px 0;
       

// //        :focus {
// //            outline: none;
// //        }
//    }
// `

// const ContainerIconName = Styled.div `
//     display: flex;

//     img {
//         border-radius: 90%;
//         height: 30px;
//         width: 30px;
//         margin: 15px 10px 15px 20px
//     }
//     p{
//         line-height: 55px;
//     }
// `

// const ContainerImage = Styled.div `
//     img {
//         width: 600px
//     }
// `
// // const ContainerTime = Styled.p `
// //   font-size: .6rem;
// //   margin-left: 12px;
// //   color: #808080;
// //   padding-top: 12px;
// //   padding-bottom: 10px;
// // `

// export default PostContainer; 