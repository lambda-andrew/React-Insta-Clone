import React, {Component} from 'react';
import '../../App.css';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

class PostsPage extends Component {

    state = {
        dummyData: [],
        searchText: ''
    }

    handleSearch = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    componentDidMount() {
        this.setState({
            dummyData: dummyData
        })
    }


    render(){
        console.log(this.state.dummyData)
        return(
            <div>
                <SearchBar handleSearch={this.handleSearch} />
                <PostContainerWrapper>
                    <PostContainer dummyData={this.state.dummyData.filter(post => post.username.includes(this.state.searchText))}/>
                </PostContainerWrapper>
            </div>
        )
    }
}

const PostContainerWrapper = Styled.div `
    padding-top: 120px;
`
PostsPage.propTypes = {
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

export default PostsPage;