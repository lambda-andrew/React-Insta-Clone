import React, {Component} from 'react';


class PostLikes extends Component {
  render(){
      return(
            <div style={{border: "1x solid blue"}}>
               <div>
               <i class="far fa-heart"></i>
               <i class="far fa-comment"></i>
               </div>
                <p>{this.props.dataLikes}</p>
            </div>
      )
  }
}

export default PostLikes;