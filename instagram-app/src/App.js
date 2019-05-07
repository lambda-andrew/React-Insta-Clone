import React, { Component } from 'react';
import './App.css';
import './data/dummy-data';
import dummyData from './data/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
  super();
  this.state={
    data : dummyData,
  }
}

render() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer dataProps = {this.state.data} />
    </div>
    );
  }
}

export default App;
