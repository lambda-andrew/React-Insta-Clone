import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

 
class App extends React.Component {
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

  render() {
    return(
      <div className='App'>
        <SearchBar 
          data={this.state.search}
          changes={this.handleChanges}
          search={this.search}
        />
        {this.state.data.map(item => {
          return <PostContainer data={item} key={item.timestamp}/>
        })}
      </div>
    );
  }
}

export default App;
