import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import './PostContainer.css';

 
export default class PostPage extends React.Component {
  state = {
      data: [],
      search: ''
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  handleChanges = e => {
    this.setState({
        search: e.target.value
    })
  }

  search = e => {
    e.preventDefault();
    const filter = this.state.data.filter( data => {
      return data.username === this.state.search;
    })
    if(this.state.search === '') {
      this.setState({
        data: dummyData
      })
    } else {
      this.setState({
        data: filter
      })
    }
  }

  logout = () => {
    localStorage.removeItem('username');
    document.location.reload(true)
  }  
  
  render() {
    return(
      <div className='PostPage'>
        <SearchBar 
          data={this.state.search}
          changes={this.handleChanges}
          search={this.search}
        />
        {this.state.data.map(item => {
          return <PostContainer data={item} key={item.timestamp}/>
        })}
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

